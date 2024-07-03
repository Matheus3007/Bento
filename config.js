// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Matheus!',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning,',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep,',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'e8f2c4fa78b7ce58ed8dc11dd1211202', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '-23.55',
	defaultLongitude: '-46.63',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: false,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: true,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '3',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '6',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '5',
			name: 'youtube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '4',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Salesforce-Dev',
			icon: 'cloud-cog',
			link: 'https://d1h000000oliluag--rgscopy.sandbox.my.salesforce.com/',
		},
		{
			id: '2',
			name: 'Localhost',
			icon: 'server',
			link: 'http://localhost:3000/',
		},
		{
			id: '3',
			name: 'Cloud',
			icon: 'cloud',
			link: 'https://d1h000000oliluag.my.salesforce.com/',
		},
		{
			id: '6',
			name: 'AWS',
			icon: 'cog',
			link: 'https://271883367777.signin.aws.amazon.com/console',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
   firstlistsContainer: [
    {
      icon: 'cloud',
      id: '1',
      links: [
        {
          name: 'SF - Prod',
          link: 'https://d1h000000oliluag.my.salesforce.com/',
        },
        {
          name: 'SF - Dev',
          link: 'https://d1h000000oliluag--rgscopy.sandbox.my.salesforce.com/',
        },

      ],
    },
    {
      icon: 'server',
      id: '2',
      links: [
        {
          name: 'AWS Login',
          link: 'https://271883367777.signin.aws.amazon.com/console',
        },
	{
          name: 'localhost',
          link: 'http://localhost:3000/',
        },

      ],
    },
  ],
};
