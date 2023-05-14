#!/usr/bin/python3

import csv
import json
import sys

def get_raw_data(csv_file):
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file, delimiter=',')
        data_raw = []
        for row in reader:
            # Convert the row to a JSON object and add it to the list
            data_raw.append(json.loads(json.dumps(row, ensure_ascii=False)))
    return data_raw

def get_data_questions_from_raw(data_raw):
    data_questions = []
    for i in data_raw[0]:
        data_questions.append(i)
    for i in data_raw:
        count = 0
        for j in i:
            if j != data_questions[count]:
                print("Questions don't match!")
                exit(1)
            count += 1
    for i in range(5):
        data_questions.pop(0)
    return data_questions

def get_data_answers(data_raw):
    data_answers = []
    for i in range(len(data_raw)):
        temp = []
        for j in data_raw[i]:
            temp.append(data_raw[i][j])
        for i in range(5):
            temp.pop(0)
        data_answers.append(temp)
    return data_answers

def count_specifics(id, answers, options):
    data_count = {}
    for i in range(len(options)):
        data_count[options[i]] = 0
    for i in range(len(answers)):
        semi_anwers = answers[i][id].split(";")[:-1]
        for j in range(len(semi_anwers)):
            try:
                if semi_anwers[j][id] in data_count:
                    data_count[semi_anwers[j]] = 1
                else:
                    data_count[semi_anwers[j]] += 1
            except:
                print("Error")
    return data_count

def get_data_points_single(id, answers, options):
    data_count = {}
    if options == None:
        for i in range(len(answers)):
            try:
                if not answers[i][id] in data_count:
                    data_count[answers[i][id]] = 1
                else:
                    data_count[answers[i][id]] += 1
            except:
                print("Error")
        try:
            data_count.pop("")
        except:
            pass

        result = []
        for key in sorted(data_count.keys()):
            result.append({"y": data_count[key], "label": key})
        return json.dumps(result, ensure_ascii=False)
    
    if id == 1:
        data_count = count_specifics(id=id, answers=answers, options=options)
    else:
        for i in range(len(options)):
            data_count[options[i]] = 0
        for i in range(len(answers)):
            try:
                if not answers[i][id] in data_count:
                    data_count[answers[i][id]] = 1
                else:
                    data_count[answers[i][id]] += 1
            except:
                print("Error")
    result = []
    try:
        data_count.pop("")
    except:
        pass
    for key, value in data_count.items():
        result.append({"y": value, "label": key})
    return json.dumps(result, ensure_ascii=False)

def get_functions_single(_data):
    result = ""
    for i, q in enumerate(_data["questions"]):
        if _data["graph_type"]["single"][i]["type"] == "Pie":
            result += 'case "'
            result += str(i)
            result += '":\n    draw_graph = new CanvasJS.Chart(_graph_container_id, {animationEnabled: true, animationDuration: 500, theme: "light2", title: {text: "'
            result += _data["graph_type"]["single"][i]["title"]
            result += '"}, data: [{type: "doughnut", startAngle: -90, indexLabelFontSize: 17, indexLabel: "{label} - #percent%", toolTipContent: "<b>{label}:</b> {y} (#percent%)", dataPoints:'
            result += get_data_points_single(id=i, answers=_data["answers"], options=_data["graph_type"]["single"][i]["options"])
            result += '}]});\n    draw_graph.render();\n    break;\n'
        if _data["graph_type"]["single"][i]["type"] == "Bar":
            result += 'case "'
            result += str(i)
            result += '":\n    draw_graph = new CanvasJS.Chart(_graph_container_id, {animationEnabled: true, animationDuration: 3000, theme: "light2", title: {text: "'
            result += _data["graph_type"]["single"][i]["title"]
            result += '"},'
            if "axisY" in _data["graph_type"]["single"][i]:
                result += ' axisY: {title: "' + _data["graph_type"]["single"][i]["axisY"] + '"},'
            if "axisX" in _data["graph_type"]["single"][i]:
                result += ' axisX: {title: "' + _data["graph_type"]["single"][i]["axisX"] + '"},'
            result += ' data: [{type: "column", dataPoints:'
            result += get_data_points_single(id=i, answers=_data["answers"], options=_data["graph_type"]["single"][i]["options"])
            result += '}]});\n    draw_graph.render();\n    break;\n'
    result = result.replace("Apenas ocasiões expeciais ou nunca.", "Raro")
    return result

def main():
    csv_file = sys.argv[1]
    json_file = sys.argv[2]
    single_functions_file = sys.argv[3]

    data_raw = get_raw_data(csv_file)
    data_questions = get_data_questions_from_raw(data_raw)
    data_answers = get_data_answers(data_raw)    

    ## Continue Here
    obj = {
        "graph_type": {
            "single": [
                {
                    "title": "Cursos",
                    "type": "Pie",
                    "options": ["Ciências e Tecnologias", "Humanidades", "Economia", "Artes"]
                },
                {
                    "title": "Especificas",
                    "type": "Pie",
                    "options": ["Química", "Biologia", "Física", "Psicologia B", "Inglês", "Sociologia", "História A", "Geografia C", "Oficina de Artes", "Oficina Multimédia", "Espanhol"]
                },
                {
                    "title": "Peso",
                    "type": "Bar",
                    "options": ["+150kg", "120-150kg", "100-120kg", "90-100kg", "85-90kg", "80-85kg", "75-80kg", "70-75kg", "65-70kg", "60-65kg", "55-60kg", "50-55kg", "45-50kg", "40-45kg", "20-40kg"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Peso"
                },
                {
                    "title": "Altura",
                    "type": "Bar",
                    "options": None,
                    "axisY": "Número de Pessoas",
                    "axisX": "Altura (cm)"
                },
                {
                    "title": "Sexo",
                    "type": "Pie",
                    "options": ["Feminino", "Masculino"]
                },
                {
                    "title": "Número de Refeições",
                    "type": "Bar",
                    "options": ["1", "2", "3", "4", "5", "6", "7", "8"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Número de Refeições"

                },
                {
                    "title": "Pequeno Almoço",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Pequeno Almoço Saudavél",
                    "type": "Pie",
                    "options": ["Sim", "Mais ou menos", "Não"]
                },
                {
                    "title": "Alimentação de acordo com a Roda dos Alimentos",
                    "type": "Pie",
                    "options": ["Sim", "Mais ou menos", "Não"]
                },
                {
                    "title": "Peças de Fruta Diárias",
                    "type": "Bar",
                    "options": ["1", "2", "3", "4", "5", "6"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Número de Peças de Fruta"
                },
                {
                    "title": "Porções de Legumes",
                    "type": "Bar",
                    "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Número de Porções de Legumes"
                },
                {
                    "title": "Pessoas que sabem o consumo calórico recomendado",
                    "type": "Pie",
                    "options": ["Sim e respeito-o", "Sim mas não o respeito-o", "Mais ou menos", "Não"]
                },
                {
                    "title": "Pessoas que consultam um Nutricionista",
                    "type": "Pie",
                    "options": ["Sim e sigo um plano alimentar", "Sim mas não sigo um plano alimentar rigoroso", "Não mas sigo um plano alimentar", "Não e não sigo qualquer tipo de plano alimentar"]
                },
                {
                    "title": "Restrições Alimentares",
                    "type": "Pie",
                    "options": ["Veganismo", "Vegetarianismo", "Não"]
                },
                {
                    "title": "Fast-Food Mensal",
                    "type": "Bar",
                    "options": ["Apenas ocasiões expeciais ou nunca.", "1-2", "3-5", "6-10", "+10"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Vezes por mês"
                },
                {
                    "title": "Praticas Atividade Física?",
                    "type": "Pie",
                    "options": ["Sim", "Não"]
                },
                {
                    "title": "Desporto Praticado",
                    "type": "Pie",
                    "options": None
                },
                {
                    "title": "Tipo de Atividade Física",
                    "type": "Pie",
                    "options": ["Coletivo", "Individual"]
                },
                {
                    "title": "Frequencia da Atividade Física",
                    "type": "Bar",
                    "options": ["1", "2", "3", "4", "5", "6", "7"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Vezes por semana"
                },
                {
                    "title": "Ginásio",
                    "type": "Pie",
                    "options": ["Sim", "Não"]
                },
                {
                    "title": "Frequencia do Ginásio",
                    "type": "Bar",
                    "options": ["1", "2", "3", "4", "5", "6", "7"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Vezes por semana"
                },
                {
                    "title": "Duração treinos Ginásio",
                    "type": "Bar",
                    "options": ["<30min", "30min - 1h", "1h - 2h", ">2h"],
                    "axisY": "Número de Pessoas"
                },
                {
                    "title": "Lesões",
                    "type": "Pie",
                    "options": ["Sim, mais do que uma...", "Sim", "Não"]
                },
                {
                    "title": "Intensidade do Exercício físico",
                    "type": "Pie",
                    "options": ["pouco ou nenhum", "leve 1-3 dias por semana", "de intensidade moderada 3-5 dias por semana", "intenso 6-7 dias por semana", "muito intenso 6-7 dias por semana"]
                },
                {
                    "title": "Horas de Sono durante a Semana",
                    "type": "Bar",
                    "options": ["<5h", "5h - 6h", "6h - 7h", "7h - 8h", "8h - 9h", ">9h"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Horas por dia"
                },
                {
                    "title": "Horas de Sono durante o Fim de Semana",
                    "type": "Bar",
                    "options": ["<5h", "5h - 6h", "6h - 7h", "7h - 8h", "8h - 9h", "9h - 10h", ">10h"],
                    "axisY": "Número de Pessoas",
                    "axisX": "Horas por dia"
                },
                {
                    "title": "Ecrâs perto da hora de dormir",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Ecrâs até adormecer",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Comer antes de dormir",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Exercício antes de Dormir",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Sestas durante o dia",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "Sono regulado",
                    "type": "Pie",
                    "options": ["Sim", "Às vezes", "Não"]
                }
            ]
        },
        "questions": data_questions, 
        "answers": data_answers
        }

    with open(json_file, 'w') as file:
        json.dump(obj, file, indent=4, ensure_ascii=False)

    with open(single_functions_file, 'w') as file:
        file.write(get_functions_single(obj))

if __name__ == "__main__":
    main()