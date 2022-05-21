import os
import re
import csv

regex_api = r"\W[\/\"':]*(api)\W[\/\"':]*"
regex_admin = r"[\/\"'_](admin)[\/\"'_]"
regex_links = r'''https?://(?:[-\w.]|(?:%[\da-fA-F]{2}))+'''


def search_api():
    os.chdir('../downloads')
    allfiles = os.listdir(os.path.abspath(os.curdir))
    # print(os.listdir())
    dictionary = {}
    new_dictionary = {}
    for i in allfiles:
        if i.endswith('.js'):
            dictionary[i] = {
                'api': [],
                'admin': [],
                'links': [],
                'default credentials': []
            }
    for i in allfiles:
        if i.endswith('js'):
            file = open(i, encoding='utf-8')
            content = file.read().lower()
            matches = re.finditer(regex_api, content, re.MULTILINE)
            list_of_api = []
            for matchNum, match in enumerate(matches, start=1):
                index_of_keyword = match.start()
                temp = content[1 + content.rfind(',', 0, index_of_keyword):content.find('"}', index_of_keyword)]
                list_of_api.append(temp)
            dictionary[i]['api'] = list_of_api
            matches = re.finditer(regex_admin, content, re.MULTILINE)
            list_of_admin = []
            for matchNum, match in enumerate(matches, start=1):
                index_of_keyword = match.start()
                temp = content[1 + content.rfind(',', 0, index_of_keyword):content.find('"', index_of_keyword) + 1]
                list_of_admin.append(temp)
            matches = re.findall(regex_links, content)
            matches = list(dict.fromkeys(matches))
            # print(matches)
            # list_of_links = set
            dictionary[i]['links'] = matches
            dictionary[i]['admin'] = list_of_admin

            if content.find('jquery') != -1:
                print(i)
            print(dictionary[i])


    # for js in allfiles:
    with open('output.csv', 'w+', encoding='utf-8') as output:
        writer = csv.writer(output)
        for key, value in new_dictionary.items():
            writer.writerow([key, value])
    import pandas as pd
    from openpyxl import Workbook
    df = pd.DataFrame(data=new_dictionary)
    df.to_excel("output.xlsx", index=True)


search_api()
