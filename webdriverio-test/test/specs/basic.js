const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('http://kyivstar.mysafetytest.mmska.kiev.ua')
        let login = $(`#login`)
        let pass = $(`#pass`)
        let button = $(`#loginButton`)
        login.setValue(`980438271`)
        browser.pause(500)
        pass.setValue(`123456`)
        button.click()
        browser.pause(1000)
    })
})