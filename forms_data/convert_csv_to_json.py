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
    return data_questions

def get_data_answers(data_raw):
    data_answers = []
    for i in range(len(data_raw)):
        temp = []
        for j in data_raw[i]:
            temp.append(data_raw[i][j])
        data_answers.append(temp)
    return data_answers

    


def main():
    json_file = sys.argv[2]

    data_raw = get_raw_data()
    data_questions = get_data_questions(data_raw)
    data_answers = get_data_answers(data_raw)    

    ## Continue Here
    


    with open(json_file, 'w') as file:
        json.dump(data_raw, file, indent=4, ensure_ascii=False)

    for x in range(len(data_answers)):
        print(len(data_answers[x]))

if __name__ == "__main__":
    main()