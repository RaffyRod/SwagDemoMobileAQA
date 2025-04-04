# WebDriverIO with Appium Test Automation Framework

## Project Overview

This is a test automation framework built using WebDriverIO and Appium for mobile application testing. The framework includes support for visual testing, Allure reporting, and various Appium plugins to enhance test capabilities.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)
- Appium (v2.x)
- Java JDK (for Android testing)
- Xcode (for iOS testing)
- Android SDK (for Android testing)

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Install Appium globally (if not already installed):

```bash
npm install -g appium
```

## Configuration

The framework is configured through the following files:

- `wdio.config.js` - Main WebDriverIO configuration file
- `.env` - Environment variables
- `device.txt` - Device configuration (if used)
- `testdata.json` - Test data located in `utils/testData`

## Running Tests

To execute tests locally:

```bash
npm run local
```

## Features

- **Allure Reporting**: Comprehensive test reports with screenshots and step-by-step execution details
- **Visual Testing**: Integration with WDIO Visual Service for visual regression testing
- **Appium Plugins**:
  - Dashboard for test monitoring
  - Gestures support
  - Enhanced wait capabilities
  - Reporter plugin
- **Multi-browser Support**: Chrome and Firefox drivers included
- **UI Automator**: Android UI testing support

## Folder Structure

```
├── allure-results/       # Allure report output
├── buildscripts/         # Build-related scripts
├── config/               # Configuration files
├── docs/                 # Documentation
├── node_modules/         # Node.js dependencies
├── test/                 # Test specifications
├── utils/testData/       # Test data files
│   └── testdata.json     # Test data
├── .env                  # Environment variables
├── .gitignore            # Git ignore rules
├── device.txt            # Device configuration
├── package-lock.json     # Lock file for dependencies
├── package.json          # Project metadata and dependencies
└── wdio.config           # WebDriverIO configuration
```

## Dependencies

Key dependencies include:

- WebDriverIO (@wdio/cli, @wdio/local-runner)
- Mocha test framework
- Appium service and drivers
- Allure reporter
- Visual testing service
- Various Appium plugins for enhanced functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Support

For any issues or questions, please check the documentation or send me an email.