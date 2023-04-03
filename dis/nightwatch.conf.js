"use strict";
module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['./dis/src/fixtures/assign'],
    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: [
        './dis/src/pages/auth',
        './dis/src/pages/explore',
        './dis/src/pages/assess'
    ],
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
    custom_commands_path: [],
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
    custom_assertions_path: [],
    // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
    plugins: [],
    // See https://nightwatchjs.org/guide/concepts/test-globals.html
    globals_path: '',
    webdriver: {},
    test_workers: {
        enabled: true,
        workers: 2
    },
    test_settings: {
        default: {
            disable_error_log: false,
            launch_url: 'https://digital.uat.greatminds.dev/',
            screenshots: {
                enabled: false,
                path: 'screens',
                on_failure: true
            },
            webdriver: {
                start_process: true,
                server_path: ''
            },
            globals: {
                waitForConditionTimeout: 20000
            }
        },
        // chrome: {
        //   desiredCapabilities: {
        //     browserName: 'chrome',
        //     'goog:chromeOptions': {
        //       // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
        //       //
        //       // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
        //       w3c: true,
        //       args: [
        //         //'--no-sandbox',
        //         //'--ignore-certificate-errors',
        //         //'--allow-insecure-localhost',
        //         //'--headless'
        //       ]
        //     }
        //   },
        //
        //   webdriver: {
        //     start_process: true,
        //     server_path: '',
        //     cli_args: [
        //       // --verbose
        //     ]
        //   }
        // },
        //////////////////////////////////////////////////////////////////////////////////
        // Configuration for using the browserstack.com cloud service                    |
        //                                                                               |
        // Please set the username and access key by setting the environment variables:  |
        // - BROWSERSTACK_USERNAME                                                       |
        // - BROWSERSTACK_ACCESS_KEY                                                     |
        // .env files are supported                                                      |
        //////////////////////////////////////////////////////////////////////////////////
        browserstack: {
            selenium: {
                host: 'hub.browserstack.com',
                port: 443
            },
            // More info on configuring capabilities can be found on:
            // https://www.browserstack.com/automate/capabilities?tag=selenium-4
            desiredCapabilities: {
                'bstack:options': {
                    "browserVersion": "latest",
                    "projectName": "DP-SIT",
                    "buildName": "DP-SIT",
                    userName: '${BROWSERSTACK_USERNAME}',
                    accessKey: '${BROWSERSTACK_ACCESS_KEY}'
                }
            },
            disable_error_log: true,
            webdriver: {
                timeout_options: {
                    timeout: 15000,
                    retry_attempts: 3
                },
                keep_alive: true,
                start_process: false
            }
        },
        'app.android.emulator': {
            extends: 'app',
            'desiredCapabilities': {
                // More capabilities can be found at https://github.com/appium/appium-uiautomator2-driver#capabilities
                browserName: null,
                platformName: 'android',
                // appium:options is not natively supported in Appium v1,but works with Nightwatch.
                // If copying these capabilities elsewhere while using Appium v1,make sure to remove appium:options
                // and add appium: prefix to each one of its capabilities,e.g. change 'app' to 'appium:app'.
                'appium:options': {
                    automationName: 'UiAutomator2',
                    // Android Virtual Device to run tests on
                    avd: 'Pixel C API 33 Lambo',
                    // While Appium v1 supports relative paths,it's more safe to use absolute paths instead.
                    // Appium v2 does not support relative paths.
                    app: `${__dirname}/wikipedia.apk`,
                    // appPackage: 'org.wikipedia',
                    // appActivity: 'org.wikipedia.main.MainActivity',
                    // appWaitActivity: 'org.wikipedia.onboarding.InitialOnboardingActivity',
                    // chromedriver executable to use for testing web-views in hybrid apps.
                    // add '.exe' at the end below (making it 'chromedriver.exe') if testing on windows.
                    // chromedriverExecutable: `${__dirname}/chromedriver-mobile/chromedriver`,
                    newCommandTimeout: 0
                }
            }
        },
        'browserstack.chrome': {
            extends: 'browserstack',
            desiredCapabilities: {
                browserName: 'chrome',
                'goog:chromeOptions': {
                    w3c: true
                }
            }
        },
        'browserstack.safari': {
            extends: 'browserstack',
            desiredCapabilities: {
                browserName: 'safari',
                // add other capabilities you want
            }
        },
    },
};
