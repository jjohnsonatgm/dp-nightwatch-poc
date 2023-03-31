"use strict";
module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ['./dis/src/fixtures'],
    // See https://nightwatchjs.org/guide/concepts/page-object-model.html
    page_objects_path: [
        './dis/src/pages/auth',
        './dis/src/pages/explore'
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
    'test_settings': {
        'app': {
            selenium: {
                start_process: true,
                use_appium: true,
                host: 'localhost',
                port: 4723,
                server_path: '/wd/hub',
                // args to pass when starting the Appium server
                cli_args: [
                // automatically download the required chromedriver
                // '--allow-insecure=chromedriver_autodownload'
                ],
                // Remove below line if using Appium v1
                default_path_prefix: ''
            },
            webdriver: {
                timeout_options: {
                    timeout: 150000,
                    retry_attempts: 3
                },
                keep_alive: false,
                start_process: false
            },
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
    }
};
