import os


def bundle_reader_2(link):
    # open the sample file used
    allfiles = os.listdir('./downloads')
    for j in allfiles:
        # If extension is .js then
        if j.endswith(".js"):
            file = open('./downloads/'+j, encoding='utf-8')
            start = 'static/js/chunk-"+t+".bundle.js?h="+'
            end = '}[t]}'
            # read the content of the file opened
            content = file.read()
            start_from = content.find(start) + len(start) + 1
            end_at = content.find(end) - 1
            bundle = content[start_from:end_at].split(',')
            chunk_list = []
            if start_from < 0 or end_at < 0:
                continue
            try:
                for i in bundle:
                    first_part = i.split(":")
                    chunk_list.append(link + "/static/js/" + "chunk-" + first_part[0]
                                      + ".bundle.js")
            except IndexError:
                continue
            return chunk_list
