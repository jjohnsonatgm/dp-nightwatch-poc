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
          "browserVersion" : "latest",
          "projectName" : "DP-SIT",
          "buildName" : "DP-SIT",
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
