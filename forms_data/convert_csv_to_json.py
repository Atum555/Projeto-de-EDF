#!/usr/bin/python3

import csv
import json
import sys

csv_file = sys.argv[1]
json_file = sys.argv[2]

# Open the CSV file and read its contents
with open(csv_file, 'r', encoding='windows-1252') as file:
    reader = csv.DictReader(file, delimiter=';')

    # Create an empty list to store the JSON objects
    data = []

    # Iterate over each line in the CSV file
    for row in reader:
        # Convert the row to a JSON object and add it to the list
        data.append(json.loads(json.dumps(row)))


# Array of objects
clean_data = []
for i in range(len(data)):
    # Obejects
    temp = []
    for j in data[i]:
        # Key
        temp.append(data[i][j])
        # Value
    clean_data.append(temp)


with open(json_file, 'w') as file:
    json.dump(clean_data, file, indent=4)

for x in range(len(clean_data)):
    print(len(clean_data[x]))