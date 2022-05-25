import os, time, urllib3, platform
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.chrome.service import Service
from selenium.common.exceptions import WebDriverException
from debundle.bundle_reader import bundle_reader
from js.js_downloader import js_downloader
from debundle.bundle_reader_1 import bundle_reader_1
from debundle.bundle_reader_2 import bundle_reader_2
from js.remove_html import remove_html
from Scanner.api import search_regex

# -------------[LINKS]----------------
link = 'https://realestate-sales-mf.bi.group/'
# link = 'https://www.mechta.kz/'
# link = 'https://www.technodom.kz/'
# link = 'https://alser.kz/'
# link = 'https://www.chocotravel.com/'
# link = 'https://wolt.com/ru/kaz'
# link = 'https://www.gov.kz/'
# ------------------------------------


# [*] Returns the keyword from url
def keyword(url):
    url = url.split('//')
    url = url[1].split('.')[0]
    # print(url)
    return url


# [*] Returns cleaned url
def cleaner(url):
    if 'kz' in url:
        var = url.find('kz')
        url = url[:var+2] + '/'
    if 'com' in url:
        var = url.find('com')
        url = url[:var + 3] + '/'
    else:
        return url
    return url


link = cleaner(link)

# [*] Create directory if not exists
os.makedirs("downloads", exist_ok=True)

# [*] Clear directory if existed before
for i in os.listdir('downloads'):
    os.remove(os.path.join('downloads', i))

# [*] Disable checking HTTPS certificates
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# # Detection Bypass
# ua = UserAgent()
# header = {'User-Agent': str(ua.chrome)}
#
# # Request
# req = requests.get(link, 'html.parser', verify=False, headers=header, timeout=(3.05, 27))

# Saving page
# with open('page.html', 'w', encoding='utf-8') as f:
#     f.write(req.text)
#     f.close()
#
# with open('page.html', encoding='utf-8') as fp:
#     soup = BeautifulSoup(fp, 'html.parser')

# [*] Choose which chromedriver according to your OS
if platform.system() == 'Windows':
    s = Service('./chromedriver_win/chromedriver.exe')
else:
    s = Service('./chromedriver_linux64/chromedriver')

options = webdriver.ChromeOptions()
print('[*] Opening the website...')
options.add_argument('--headless')
driver = webdriver.Chrome(service=s, options=options)
# driver = webdriver.Chrome(service=s)

# [*] Handling error with opening the link
try:
    driver.get(link)
except WebDriverException:
    print(WebDriverException)

# [*] Let the webpage load in 3 seconds
time.sleep(3)

# [*] Parse the html page
print('[*] Parsing the website')
soup = BeautifulSoup(driver.page_source, "html.parser")

# [*] Get all js files on the webpage
# [*] Save to the js_url variable
print('[*] Get all js files on the webpage')
js_url = [i.get('src') for i in soup.find_all('script') if i.get('src')]
# print(js_url)

for i in range(len(js_url)):
    url = keyword(link)
    if url in js_url[i]:
        if url != keyword(js_url[i]):
            link = cleaner(js_url[i])
            # print(link)
# [*] Download the available js files from the webpage
print('Downloading js files from main page')
print('-----------------------------------')
js_downloader(js_url, link)

# [*] Download all js files from the bundle
chunk_url = bundle_reader(link)
chunk_url_1 = bundle_reader_1(link)
chunk_url_2 = bundle_reader_2(link)
# [*] If there is some links, download them
print('Downloading js files from main bundle')
print('-----------------------------------')
if chunk_url is not None:
    js_downloader(chunk_url, link)
if chunk_url_1 is not None:
    js_downloader(chunk_url_1, link)
if chunk_url_2 is not None:
    js_downloader(chunk_url_2, link)

# [*] Delete all files, which are not js
print('Cleaning unnecessary stuff')
remove_html()

# [*] Close browser
driver.close()

# [*] Regex
print('Searching for interesting things...')
search_regex()

print("Finished!!!. Look in /downloads folder for .js files")