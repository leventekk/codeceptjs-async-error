exports.config = {
  output: './output',
  helpers: {
    Puppeteer: {
      windowSize: '1280x800',
      url: 'https://google.com',
      show: true
    }
  },
  include: {},
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'codeceptjs-test'
}
