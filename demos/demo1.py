from selenium import webdriver
from time import sleep

class TestCase(object):
    def __init__(self):
        self.driver = webdriver.Chrome()


    def test(self):
        self.driver.get('http://www.baidu.com')
        sleep(1)
        self.driver.find_element_by_id('kw').send_keys('selenium')
        sleep(1)
        self.driver.find_element_by_id('su').click()
        sleep(3)
        self.driver.quit()

if __name__ == '__main__':
    case = TestCase()
    case.test()