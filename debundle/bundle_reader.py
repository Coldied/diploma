import os


def bundle_reader(link1):
    # [*] Detect all files in directory
    allfiles = os.listdir('./downloads')
    for j in allfiles:
        # [*] If extension is .js then:
        if j.endswith(".js"):
            file = open('./downloads/' + j, encoding='utf-8')
            # [*] It is the pattern that we will be searching for
            start = 'u=e=>(({'
            end = '.js"'
            # [*] Read the content of the file opened
            content = file.read()
            # [*] Try to find the pattern in js file
            ind_start = content.find(start)
            ind_end = content.find(end)
            # print(ind_start, ind_end)
            # [*] These to variables are needed to remove everything before { and after }
            b1 = '{'
            b2 = '}'
            # [*] Create array from ind_start to ind_end
            arr = content[ind_start:ind_end]
            arr = arr[arr.find(b1) + 1:arr[:ind_end].rfind(b2)].replace('"', "")
            farr = arr[:arr.find(b2)]
            sarr = arr[arr.find(b1) + 1:]
            farr = farr.split(',')
            sarr = sarr.split(',')
            js_urls = []
            # print(farr)
            # print(sarr)
            if len(arr) == 0:
                continue
            k_arr = []
            k_itt = list()
            for i in farr:
                findex = i.split(':')
                for k in range(len(sarr)):
                    try:
                        sindex = sarr[k].split(':')
                        link = sindex[0] + "." + sindex[1] + ".js"
                        if sindex[1] in k_arr or link in js_urls:
                            continue
                        if findex[0] == sindex[0] and len(sindex) == 2 and len(findex) == 2:
                            link = findex[1] + "." + sindex[1] + ".js"
                            js_urls.append(link)
                            k_itt.append(sindex)
                            break
                    except IndexError:
                        continue
            # if there is no links exit
            if not js_urls:
                return
            for i in range(len(k_itt)):
                var = k_itt[i]
                for k in sarr:
                    j = k.split(':')
                    if var == j:
                        sarr.remove(k)
            for i in sarr:
                js_urls.append(i.split(':')[0] + '.' + i.split(':')[1] + '.js')
            for i in range(len(js_urls)):
                js_urls[i] = link1 + js_urls[i]
            return js_urls
