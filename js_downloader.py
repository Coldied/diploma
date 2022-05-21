import requests
from fake_useragent import UserAgent
from move_js import move_js
from bundle_reader_1 import bundle_reader_1


# [*] Loop through the list of the js urls
def js_downloader(array, link):
    count = 0
    for i in array:
        # if i[-1] != '/':
        #     i += '/'
        if link not in i:
            i = link+i
        # print(i)
        url = i
        if url.find('/'):
            # print(i)
            # [*] Remove all staff except the name of the file
            filename = url.rsplit('/', 1)[1].rsplit('?', 1)[0]
            print('[+] Downloading %s' % filename)
            # print(filename)
            try:
                # [*] Detection Bypass
                ua = UserAgent()
                header = {'User-Agent': str(ua.chrome)}
                # [*] Make GET request and download file
                req = requests.get(i, allow_redirects=True, verify=False, headers=header)
                # print(req.status_code)
                if req.status_code == 200:
                    # [*] Save them if status code is 200
                    open(filename, 'wb').write(req.content)
                    count += 1
                    # print('[+] Success!')
            except OSError:
                print(filename, filename)
                print("Cannot download this file: ", url)
    # [*] Move js to ./downloads folder
    move_js()
    print("Number of js files: ", count)
