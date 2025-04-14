exports.config = {
	user: 'raffyrodriguez_FPtiYs',
	key: 'cxshsj21nSGyuF5B7unq',

	updateJob: false,
	specs: ['../webdio-test/test/specs/**/*.js'],
	exclude: [],

	capabilities: [
		{
			project: 'SwagLabs',
			build: 'Webdriverio Android',
			name: 'App tests',
			device: 'Google Pixel 6 Pro',
			os_version: '13.0',
			autoGrantPermissions: true,
			app: 'bs://80264519e2214d7d59597f9566bff5d16ef52cb5',
			'browserstack.debug': true,
		},
	],

	logLevel: 'info',
	coloredLogs: true,
	screenshotPath: './errorShots/',
	baseUrl: '',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,

	framework: 'mocha',
	mochaOpts: {
		ui: 'bdd',
		timeout: 20000,
	},
};