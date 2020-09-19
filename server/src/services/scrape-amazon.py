# Top three python web scraping framework Selenium, BeautifulSoup, Scrapy, 
# Issue with opening chromedriver - https://stackoverflow.com/questions/60362018/macos-catalinav-10-15-3-error-chromedriver-cannot-be-opened-because-the-de

 from selenium import webdriver

 browser = webdriver.Chrome('/Users/arifrahman/Code/chromedriver')
 browser.get('https://youtube.com')