# Selenium Doc -
# @link - https://selenium-python.readthedocs.io/api.html

# Top three python web scraping framework Selenium, BeautifulSoup, Scrapy,
# Issue with opening chromedriver - https://stackoverflow.com/questions/60362018/macos-catalinav-10-15-3-error-chromedriver-cannot-be-opened-because-the-de

# - Scrape amazon site base on category
# - Get items
#   - price
#   - title
#   - img
#   - description
import requests
import bs4
from bs4 import BeautifulSoup
from urllib.request import urlopen

lazada_url = "https://www.lazada.sg"


def get_url(page: int):
    return f'{lazada_url}/shop-laptops/?spm=a2o42.home.cate_1.3.2ec746b5sIEW9H'


client = urlopen(get_url(1))
client_html = client.read()
soup = BeautifulSoup(client_html, 'html5lib')
# body = soup.body
root = soup.body.find(id="root")
print(root.getText())


# def main():
#   try:
#     print(get_url(1))
#     r = requests.get(get_url(1))
#     soup = BeautifulSoup(r.content, 'html5lib')
#     print(soup.title)
#     items = soup.find_all(id="products")
#     print(items)

#   except:
#       print('Something when wrong!')
#       # driver.quit()

# main()
