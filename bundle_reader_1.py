import os
import requests
from fake_useragent import UserAgent


def bundle_reader_1(link1):
    # open the sample file used
    allfiles = os.listdir('downloads')
    for j in allfiles:
        # If extension is .js then
        if j.endswith(".js"):
            file = open('./downloads/' + j, encoding='utf-8')
            start = 'js/'
            end = '.js"'
            # read the content of the file opened
            content = file.read()
            ind_start = content.find(start)
            ind_end = content.find(end)
            bracket_1 = '{'
            bracket_2 = '}'
            arr = content[ind_start:ind_end]
            arr = arr[arr.find(bracket_1) + 1:arr[:ind_end].rfind(bracket_2)].replace('"', "")
            farr = arr[:arr.find(bracket_2)]
            sarr = arr[arr.find(bracket_1) + 1:]
            farr = farr.split(',')
            sarr = sarr.split(',')
            # print(arr, ind_start, ind_end)
            js_urls = []
            if len(arr) == 0:
                continue
            k_arr = []
            k_itt = list()
            for i in farr:
                findex = i.split(':')
                for k in range(len(sarr)):
                    sindex = sarr[k].split(':')
                    try:
                        link = sindex[0] + "." + sindex[1] + ".chunk.js"
                        if sindex[1] in k_arr or link in js_urls:
                            continue
                        if findex[0] == sindex[0] and len(sindex) == 2 and len(findex) == 2:
                            link = findex[1] + "." + sindex[1] + ".chunk.js"
                            js_urls.append(link)
                            k_itt.append(sindex)
                            break
                    except IndexError:
                        continue
            for i in range(len(k_itt)):
                var = k_itt[i]
                for k in sarr:
                    j = k.split(':')
                    if var == j:
                        sarr.remove(k)
            try:
                for i in sarr:
                    js_urls.append(i.split(':')[0] + '.' + i.split(':')[1] + '.chunk.js')
                for i in range(len(js_urls)):
                    js_urls[i] = link1 + '/static/js/' + js_urls[i]
            except IndexError:
                continue
            # print(js_urls)
            # try:
            #     ua = UserAgent()
            #     header = {'User-Agent': str(ua.chrome)}
            #     req = requests.get(js_urls[0], allow_redirects=True, verify=False, headers=header)
            #     print(req.status_code)
            # except requests.HTTPError:
            #     print('404 ERROR')
            return js_urls
