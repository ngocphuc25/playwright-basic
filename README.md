# Playwright Test Suite

## Overview

This repository contains end-to-end browser tests and API tests under `tests/e2e`. The suite covers the sample application at [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) and the Restful Booker API at [restful-booker.herokuapp.com](https://restful-booker.herokuapp.com/).

The latest full run discovered 61 test cases in 44 files. Each case runs in both configured browser projects (Desktop Chrome and Microsoft Edge), for 122 total test executions.

## Test Coverage

| Area | Test file(s) | Coverage |
| --- | --- | --- |
| Page content and layout | `abTest.spec.ts`, `challengingDom.spec.ts`, `largeDom.spec.ts`, `shiftingContent.spec.ts`, `floatingMenu.spec.ts`, `disappearingElements.spec.ts`, `typos.spec.ts` | A/B page content, challenging and large tables, shifting elements, floating navigation, disappearing menu items, and typo text |
| Authentication | `basicAuth.spec.ts`, `digestAuth.spec.ts`, `login.spec.ts` | Basic and digest authentication, successful login, and invalid login credentials |
| Forms and controls | `addRemoveElements.spec.ts`, `checkbox.spec.ts`, `dropdown.spec.ts`, `dynamicControls.spec.ts`, `inputs.spec.ts`, `keyPresses.spec.ts` | Adding/removing elements, checkbox states, single/multiple dropdown selection, dynamic controls, numeric input, and keyboard input |
| Dynamic behavior | `dynamicContent.spec.ts`, `dynamicLoading.spec.ts`, `exitIntent.spec.ts`, `notificationMessage.spec.ts`, `slowResources.spec.ts` | Changing content, loading hidden/rendered elements, exit-intent modal, notification messages, and slow resources |
| Mouse and drag interactions | `contextMenu.spec.ts`, `dragDrop.spec.ts`, `hover.spec.ts` | Right-click context menu, drag and drop, and hover behavior |
| Frames and browser dialogs | `frame.spec.ts`, `iframe.spec.ts`, `jsAlert.spec.ts` | Nested frames, TinyMCE iframe editor, JavaScript alert, confirm, and prompt dialogs |
| Navigation and windows | `links.spec.ts`, `multipleWindows.spec.ts`, `redirector.spec.ts`, `jqueryMenu.spec.ts` | Hyperlinks, new windows, redirects, and jQuery UI menu navigation |
| Browser features and components | `brokenImage.spec.ts`, `geolocation.spec.ts`, `shadowDom.spec.ts`, `wysiwygEditor.spec.ts`, `javascriptError.spec.ts` | Broken images, geolocation, Shadow DOM, WYSIWYG editor content, and browser console errors |
| Files | `uploadFile.spec.ts`, `secureDownload.spec.ts` | File upload and authenticated secure file download |
| Password recovery | `forgotPassword.spec.ts` | Forgot-password form submission and confirmation |
| API integration | `intergration-testing/booking.spec.ts` | Booking list and booking-by-ID responses, including response schema validation |
| Playwright starter examples | `example.spec.ts` | Example page title and getting-started link |

`download.spec.ts` and `horizontalSlider.spec.ts` currently contain commented-out tests and are not included in the discovered test count.

## Project Structure

```text
tests/
└── e2e/
    ├── fixtures/                 # Shared Playwright fixtures
    ├── intergration-testing/     # API integration tests
    ├── pages/                    # Page object models
    └── *.spec.ts                 # Browser end-to-end tests
```

The Playwright configuration uses `tests` as its test root and discovers the spec files recursively, including those under `tests/e2e`.

## Prerequisites

- Node.js (use the current LTS release)
- npm
- Playwright browser binaries for Chromium and Microsoft Edge
- Network access to the external test sites

Install dependencies and the default Playwright browsers:

```sh
npm ci
npx playwright install
```

Microsoft Edge must also be installed locally because the configuration runs a separate Edge project using the `msedge` channel.

## Running Tests

Run the complete suite:

```sh
npx playwright test
```

List discovered tests without running them:

```sh
npx playwright test --list
```

Run one test file:

```sh
npx playwright test tests/e2e/login.spec.ts
```

Run a specific browser project:

```sh
npx playwright test --project="Microsoft Edge"
```

The configured HTML reporter writes its output to `playwright-report`. Open the report after a run with:

```sh
npx playwright show-report
```

The suite uses a 60-second test timeout. On CI, it retries failed tests twice and limits execution to one worker.
