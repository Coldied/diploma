import os


def bundle_reader_2(link):
    # open the sample file used
    allfiles = os.listdir('../downloads')
    for j in allfiles:
        # If extension is .js then
        if j.endswith(".js"):
            file = open('./downloads/' + j, encoding='utf-8')
            start = '/chunk-"+t+"."+'
            end = '[t]+".js"}'
            # read the content of the file opened
            content = file.read()

            start_from = content.find(start) + len(start) + 1
            end_at = content.find(end) - 1
            bundle = content[start_from:end_at].split(',')
            chunk_list = []
            try:
                for i in bundle:
                    first_part = i.split(":")
                    chunk_list.append(link + "/static/js/" + "chunk-" + first_part[0]
                                      + "." + first_part[1][1:-1] + ".js")
            except IndexError:
                continue
            return chunk_list
