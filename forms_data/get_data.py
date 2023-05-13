#!/usr/bin/python3

import csv
import json
import sys

def get_raw_data():
    csv_file = sys.argv[1]
    with open(csv_file, 'r') as file:
        reader = csv.DictReader(file, delimiter=',')
        data_raw = []
        for row in reader:
            # Convert the row to a JSON object and add it to the list
            data_raw.append(json.loads(json.dumps(row)))
    return data_raw

def get_data_questions(data_raw):
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


def main():
    json_file = sys.argv[2]

    data_raw = get_raw_data()
    data_questions = get_data_questions(data_raw)
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
                    "type": "ToDo",
                    "options": ["+150kg", "120-150kg", "100-120kg", "90-100kg", "85-90kg", "80-85kg", "75-80kg", "70-75kg", "65-70kg", "60-65kg", "55-60kg", "50-55kg", "45-50kg", "40-45kg", "20-40kg"]
                },
                {
                    "title": "Altura",
                    "type": "Bar"
                },
                {
                    "title": "Sexo",
                    "type": "Pie",
                    "options": ["Feminino", "Masculino"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["1", "2", "3", "4", "5", "6", "7", "8"]

                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Sim", "Mais ou menos", "Não"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Sim", "Mais ou menos", "Não"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["1", "2", "3", "4", "5", "6"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Sim e respeito-o", "Sim mas não o respeito-o", "Mais ou menos", "Não"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Sim e sigo um plano alimentar", "Sim mas não sigo um plano alimentar rigoroso", "Não mas sigo um plano alimentar", "Não e não sigo qualquer tipo de plano alimentar"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["Veganismo", "Vegetarianismo", "Não"]
                },
                {
                    "title": "ToDo",
                    "type": "ToDo",
                    "options": ["1-2", "3-5", "6-10", "+10", "Apenas ocasiões expeciais ou nunca."]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM"
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Coletivo", "Individual"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["1", "2", "3", "4", "5", "6", "7"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["1", "2", "3", "4", "5", "6", "7"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["<30min", "30min - 1h", "1h - 2h", ">2h"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim, mais do que uma...", "Sim", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["pouco ou nenhum", "leve 1-3 dias por semana", "de intensidade moderada 3-5 dias por semana", "intenso 6-7 dias por semana", "muito intenso 6-7 dias por semana"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["<5h", "5h - 6h", "6h - 7h", "7h - 8h", "8h - 9h", ">9h"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["<5h", "5h - 6h", "6h - 7h", "7h - 8h", "8h - 9h", "9h - 10h", ">10h"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                },
                {
                    "title": "TBM",
                    "type": "TBM",
                    "options": ["Sim", "Às vezes", "Não"]
                }
            ]
        },
        "questions": data_questions, 
        "answers": data_answers
        }

    with open(json_file, 'w') as file:
        json.dump(obj, file, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    main()