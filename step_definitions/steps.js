const doSomeAsync = require('../helpers/someAsync')

const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

When(/I open the ([a-z]+) page/, page => {
  I.amOnPage(pages[page])
})

When(/I async search for (.*)/, async text => {
  const searchValue = await doSomeAsync(text)
  I.amOnPage('/')
  I.fillField('input[type=text]', searchValue)
  I.click('Google Search')
  I.waitInUrl('/search', 5)
})

When(/I search for (.*)/, async text => {
  I.amOnPage('/')
  I.fillField('input[type=text]', text)
  I.click('Google Search')
  I.waitInUrl('/search', 5)
})

Then(/I see (?:title|text) (.*)/, text => {
  I.see(text)
})
