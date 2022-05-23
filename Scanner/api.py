import os
import re
import csv
from datetime import date

regex_api = r"\W[\/\"':]*(api)\W[\/\"':]*"
regex_admin = r"[\/\"'_](admin)[\/\"'_]"
regex_links = r'''https?://(?!twitter.com|www.facebook.com|fb.me|vk.com
|www.google|www.w3.org|reactjs.org|npms.io|www.instagram)(?:[-\w.]|(?:%[\da-fA-F]{2}))+'''
regex_common_words = r''''''
# accessToken, token, access_Token, secret
regex_token = ''''''


def search_regex():
    os.chdir('downloads')
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
                temp = content[1 + content.rfind(' ', 0, index_of_keyword):content.find(' ', index_of_keyword)]
                if len(temp) > 50:
                    temp = content[index_of_keyword-20:index_of_keyword+25]
                list_of_api.append(temp)
            dictionary[i]['api'] = list_of_api
            matches = re.finditer(regex_admin, content, re.MULTILINE)
            list_of_admin = []
            for matchNum, match in enumerate(matches, start=1):
                index_of_keyword = match.start()
                temp = content[1 + content.rfind(',', 0, index_of_keyword):content.find('"', index_of_keyword) + 10]
                list_of_admin.append(temp)
            matches = re.findall(regex_links, content)
            matches = list(dict.fromkeys(matches))
            # print(matches)
            # list_of_links = set
            dictionary[i]['links'] = matches
            dictionary[i]['admin'] = list_of_admin

            if content.find('jquery') != -1:
                print(i)
            # print(dictionary[i])

    for i in dictionary.copy():
        if (dictionary[i]['api'] == [] or dictionary[i]['api'] == [''] )\
                and dictionary[i]['admin'] == []\
                and dictionary[i]['links'] == []\
                and dictionary[i]['default credentials'] == []:
            dictionary.pop(i)
    # for js in allfiles:
    d4 = date.today().strftime("%b-%d-%Y")
    os.chdir('../Results')
    with open(f'{d4}.csv', 'w+', encoding='utf-8') as output:
        writer = csv.writer(output)
        for key, value in dictionary.items():
            writer.writerow([key, value])
    import pandas as pd
    df = pd.DataFrame(data=dictionary)
    df.to_excel(f"{d4}.xlsx", index=True)
