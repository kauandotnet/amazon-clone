import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.event_firing_webdriver import EventFiringWebElement

lazada_url = "https://www.lazada.sg/"
sleep_time = 5  # seconds
page_range = 10
item_range = 3


def get_url(page: int):
    return f'{lazada_url}/shop-laptops/?spm=a2o42.home.cate_1.3.2ec746b5sIEW9H'


# declare and intialiase driver, change this as require
driver = webdriver.Chrome('/Users/arifrahman/Code/chromedriver')
# browser should be loaded in maximized window, to ensure consistency on what to scrape
driver.maximize_window()
# open brower and control website
driver.get(get_url(1))


try:
    mapped_items = []
    for page in range(page_range):
        main = WebDriverWait(driver, 10).until(
            expected_conditions.presence_of_element_located((By.ID, 'root')))
        next_button = WebDriverWait(driver, sleep_time).until(expected_conditions.presence_of_element_located((By.CLASS_NAME, 'ant-pagination-next')))
        item_container = main.find_element_by_class_name("c1_t2i")
        print('item_container')
        items_list = item_container.find_elements_by_class_name("c2prKC")
        print('[items_list]', items_list)
        item: EventFiringWebElement

        for i in range(item_range):
            print('items_list[i]', items_list[i])
            product_name = items_list[i].find_element_by_class_name(
                'c16H9d').text
            img_src = items_list[i].find_element_by_class_name(
                'c1ZEkM').get_attribute('src')
            price = items_list[i].find_element_by_class_name('c13VH6').text
            mapped_items.append({
                "product_name": product_name,
                "img_src": img_src,
                "price": price
            })
        # once fone iterate click on next button to navigate
        next_button.click()

    print(mapped_items)

except:
    # we close our site when exception occur
    print('Something when wrong!!!')
