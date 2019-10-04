## Test verbosed output

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
  do something async
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
    Emitted | step.comment (When I async search for CodeceptJS )
    When I async search for CodeceptJS
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
      › [Url] https://www.google.com/search?source=hp&ei=iWeXXY3vLYywrgTZ6qf4CQ&q=CodeceptJS&oq=CodeceptJS&gs_l=psy-ab.12..0l10.988.1258..1413...0.0..0.75.660.10......0....1..gws-wiz.......0i10.utXljr5utG4&ved=0ahUKEwjN1_b894LlAhUMmIsKHVn1CZ8Q4dUDCAY
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
  ✔ OK in 3901ms

    Emitted | test.after ([object Object])

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
      › [Url] https://www.google.com/search?source=hp&ei=jmeXXcyfB4_PrgS3sJqQDA&q=CodeceptJS&oq=CodeceptJS&gs_l=psy-ab.12..0l10.907.1172..1332...0.0..0.70.661.10......0....1..gws-wiz.......0i10.dyMjcJ-0wAs&ved=0ahUKEwjMnoH_94LlAhWPp4sKHTeYBsIQ4dUDCAY
    Emitted | step.passed (I wait in url "/search", 5)
    Emitted | step.finish (I wait in url "/search", 5)
    Emitted | step.start (I see "CodeceptJS")
    Emitted | step.comment (Then I see text CodeceptJS )
    Then I see text CodeceptJS
      I see "CodeceptJS"
    [1] Retrying... Attempt #2
    [1] Retrying... Attempt #3
      › [Url] https://codecept.io/
    [1] Retrying... Attempt #4
    Emitted | step.passed (I see "CodeceptJS")
    Emitted | step.finish (I see "CodeceptJS")
    Emitted | step.start (I see "Quickstart")
    Emitted | step.comment (And I see text Quickstart )
    And I see text Quickstart
      I see "Quickstart"
    Emitted | step.passed (I see "Quickstart")
    Emitted | step.finish (I see "Quickstart")
    Emitted | step.start (I see "Guides")
    Emitted | step.comment (And I see text Guides )
    And I see text Guides
      I see "Guides"
    Emitted | step.passed (I see "Guides")
    Emitted | step.finish (I see "Guides")
    Emitted | step.start (I see "API")
    Emitted | step.comment (And I see text API )
    And I see text API
      I see "API"
    Emitted | step.passed (I see "API")
    Emitted | step.finish (I see "API")
    Emitted | test.passed ([object Object])
    Emitted | test.finish ([object Object])
  ✔ OK in 3192ms

    Emitted | test.after ([object Object])
    Emitted | suite.after ([object Object])

  OK  | 2 passed   // 9s
    Emitted | global.result ([object Object])
    Emitted | global.after ([object Object])
✨  Done in 9.82s.
```
