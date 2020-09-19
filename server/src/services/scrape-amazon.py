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
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions

amazon_url = "https://www.amazon.com"

def get_url(page: int):
  return f'{amazon_url}/s?i=computers&rh=n%3A565108%2Cp_72%3A1248879011&page={page}&pf_rd_i=565108&pf_rd_p=121acd9e-769b-5530-ae68-5a92ebd704d6&pf_rd_r=96GWQ3Z3JW7TEE7F0J0W&pf_rd_s=merchandised-search-12&pf_rd_t=BROWSE&qid=1600494979&ref=sr_pg_2'


print(get_url(1))

categories = {
  "electronic": '172282'
}
# amazon_url = 
# declare and intialiase driver
driver = webdriver.Chrome('/Users/arifrahman/Code/chromedriver')
# browser should be loaded in maximized window, to ensure consistency on what to scrape
driver.maximize_window()
# driver should wait implicitly for a given duration, for the element under consideration to load.
# to enforce this setting we will use builtin implicitly_wait() function of our 'driver' object.
driver.implicitly_wait(10) #10 is in seconds
# open brower and control website
driver.get(amazon_url)
# we iterate of n number of page and scrape items


try:
  for i in range(20):
    page = i+1
    url = get_url(page)
    # instead of redirect url, we can user the NEXT button to redirect to another page and extract all the data
except:
  # we close our site when exception occur
  driver.quit()


    # do something



print(driver.title)
