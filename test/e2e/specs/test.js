// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    browser
    .url('http://localhost:9090')
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.logo')
      .assert.containsText('h1', 'Hello For the Horde!')
      .assert.elementCount('p', 3)
      .end()
  }
}
