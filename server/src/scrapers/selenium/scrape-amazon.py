# Selenium Doc -
# @link - https://selenium-python.readthedocs.io/api.html

# Top three python web scraping framework Selenium, BeautifulSoup, Scrapy,
# Issue with opening chromedriver - https://stackoverflow.com/questions/60362018/macos-catalinav-10-15-3-error-chromedriver-cannot-be-opened-because-the-de

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.event_firing_webdriver import EventFiringWebElement

amazon_url = "https://www.amazon.com"
# declare and intialiase driver
driver = webdriver.Chrome('/Users/arifrahman/Code/chromedriver')
# browser should be loaded in maximized window, to ensure consistency on what to scrape
driver.maximize_window()

def get_url(page: int):
    return f'{amazon_url}/s?i=computers&rh=n%3A565108%2Cp_72%3A1248879011&page={page}&pf_rd_i=565108&pf_rd_p=121acd9e-769b-5530-ae68-5a92ebd704d6&pf_rd_r=96GWQ3Z3JW7TEE7F0J0W&pf_rd_s=merchandised-search-12&pf_rd_t=BROWSE&qid=1600494979&ref=sr_pg_2'

def get_price_by_item(item: EventFiringWebElement):
  try:
    price = ''
    prices = item.find_elements(By.CSS_SELECTOR, 'span.a-offscreen')

    if len(prices) > 0:
      price:EventFiringWebElement = prices[0]
      print('get_price_by_item -  price', price.text)
      return price
    else:
      return price
  except:
    print('Something when wrong - [get_price_by_item]')

def main():
  try:
      # open brower and control website
      driver.get(get_url(1))
      # We wait for 10sec to ensure the page is loaded succesfully
      main = WebDriverWait(driver, 10).until(
          expected_conditions.presence_of_element_located((By.ID, 'a-page')))
      item_container = main.find_element(By.CSS_SELECTOR, "div.s-main-slot")
      items_list = item_container.find_elements(By.CSS_SELECTOR, 'div.s-result-item.s-asin')
      item: EventFiringWebElement
      # mapped_items = []
      for item in items_list:
          # img_src = item.find_elements_by_css_selector('img.s-image').get_attribute('src')
          # name = item.find_element_by_xpath("//h2/a/span").text
          price = get_price_by_item(item=item)

          # mapped_items.append({"img_src": img_src, "name": name})
          # # name = item.find_element_by_css_selector('a.span')
      # for item in item_list:
      #     print('item >>>>>>>', item.text)

      # for i in range(20):
      # instead of redirect url, we can user the NEXT button to redirect to another page and extract all the data
  except:
      # we close our site when exception occur
      print('Something when wrong')
      # driver.quit()

main()


