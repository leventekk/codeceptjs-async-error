```
$ codeceptjs run --steps --verbose
CodeceptJS v2.3.2
Using test root "/Users/leventekiraly/Works/codeceptjs-test"
Helpers: Puppeteer
Plugins: screenshotOnFail

Business rules --
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system
    [1] Starting recording promises
    Emitted | suite.before ([object Object])
  do something
    Emitted | test.before ([object Object])
    Emitted | test.start ([object Object])
    Emitted | step.before (I am on page "/")
    Emitted | step.after (I am on page "/")
    Emitted | step.before (I fill field "input[type=text]", "CodeceptJS")
    Emitted | step.after (I fill field "input[type=text]", "CodeceptJS")
    Emitted | step.before (I click "Google Search")
    Emitted | step.after (I click "Google Search")
    Emitted | step.before (I wait in url "/search", 5)
    Emitted | step.after (I wait in url "/search", 5)
    Emitted | step.before (I see "CodeceptJS")
    Emitted | step.after (I see "CodeceptJS")
    Emitted | step.before (I see "Quickstart")
    Emitted | step.after (I see "Quickstart")
    Emitted | step.before (I see "Guides")
    Emitted | step.after (I see "Guides")
    Emitted | step.before (I see "API")
    Emitted | step.after (I see "API")
    Emitted | step.start (I am on page "/")
    Emitted | step.comment (When I search for CodeceptJS )
    When I search for CodeceptJS
      I am on page "/"
      › [Url] https://www.google.com/
    Emitted | step.passed (I am on page "/")
    Emitted | step.finish (I am on page "/")
    Emitted | step.start (I fill field "input[type=text]", "CodeceptJS")
      I fill field "input[type=text]", "CodeceptJS"
    Emitted | step.passed (I fill field "input[type=text]", "CodeceptJS")
    Emitted | step.finish (I fill field "input[type=text]", "CodeceptJS")
    Emitted | step.start (I click "Google Search")
      I click "Google Search"
    Emitted | step.passed (I click "Google Search")
    Emitted | step.finish (I click "Google Search")
    Emitted | step.start (I wait in url "/search", 5)
      I wait in url "/search", 5
      › [Url] https://www.google.com/search?source=hp&ei=6WOXXb9qgs-uBKO8tagP&q=CodeceptJS&oq=CodeceptJS&gs_l=psy-ab.12..0l10.938.1199..1346...0.0..0.77.668.10......0....1..gws-wiz.......0i10.gSDvuI-JfTo&ved=0ahUKEwj_gonC9ILlAhWCp4sKHSNeDfUQ4dUDCAY
    Emitted | step.passed (I wait in url "/search", 5)
    Emitted | step.finish (I wait in url "/search", 5)
    Emitted | step.start (I see "CodeceptJS")
    Emitted | step.comment (process: _tickCallback )
    Then I see text CodeceptJS
    Emitted | step.comment (process: _tickCallback )
      process: _tickCallback
        I see "CodeceptJS"
    [1] Retrying... Attempt #2
    [1] Retrying... Attempt #3
        › [Url] https://codecept.io/
    [1] Retrying... Attempt #4
    Emitted | step.passed (I see "CodeceptJS")
    Emitted | step.finish (I see "CodeceptJS")
    Emitted | step.start (I see "Quickstart")
      I see "Quickstart"
    Emitted | step.passed (I see "Quickstart")
    Emitted | step.finish (I see "Quickstart")
    Emitted | step.start (I see "Guides")
      I see "Guides"
    Emitted | step.passed (I see "Guides")
    Emitted | step.finish (I see "Guides")
    Emitted | step.start (I see "API")
      I see "API"
    Emitted | step.passed (I see "API")
    Emitted | step.finish (I see "API")
    Emitted | test.passed ([object Object])
    Emitted | test.finish ([object Object])
  ✔ OK in 4147ms

    Emitted | test.after ([object Object])
    Emitted | suite.after ([object Object])

  OK  | 1 passed   // 5s
    Emitted | global.result ([object Object])
    Emitted | global.after ([object Object])
✨  Done in 5.80s.
```
