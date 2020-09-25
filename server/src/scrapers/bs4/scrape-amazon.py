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
from bs4 import BeautifulSoup

amazon_url = "https://www.amazon.com"

def get_url(page: int):
    return f'{amazon_url}/s?i=computers&rh=n%3A565108%2Cp_72%3A1248879011&page={page}&pf_rd_i=565108&pf_rd_p=121acd9e-769b-5530-ae68-5a92ebd704d6&pf_rd_r=96GWQ3Z3JW7TEE7F0J0W&pf_rd_s=merchandised-search-12&pf_rd_t=BROWSE&qid=1600494979&ref=sr_pg_2'
r = requests.get(get_url(2)) 
print('>>>>>> URL', get_url(1))
print(r.status_code)
soup = BeautifulSoup(r.content, 'html5lib') 

try:
  print(soup.prettify()) 

except:
    print('Something when wrong!')
    # driver.quit()
