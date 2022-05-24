import os


def remove_html():
    path = '../downloads/'
    allfiles = os.listdir(path)
    # print(allfiles)
    for i in allfiles:
        file = open(path+i, encoding='utf-8')
        content = file.read()
        file.close()
        string = '<!doctype'
        if string in content:
            os.remove(os.path.join('../downloads', i))
