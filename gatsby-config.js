module.exports = {
	siteMetadata: {
		title: `CMS preview site`,
		description: `Let's see what Gatsby with Prismic can do together!`,
		author: `Michael Baron`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: 'gatsby-source-prismic-graphql',
			options: {
				repositoryName: 'firsttestlmc', // (REQUIRED, replace with your own)
				accessToken: 'MC5YZ0VabVJBQUFDTUE4TjVR.77-977-9LGHvv71l77-9Ww5577-9Jhbvv73vv73vv73vv73vv73vv73vv70w77-9Q--_ve-_ve-_vVwRMjbvv73vv70', // (optional API access token)
				path: '/preview', // (optional preview path. Default: /preview)
				previews: true, // (optional, activated Previews. Default: false)
				pages: [ { // (optional, builds pages dynamically)
					type: 'New',         // TypeName from prismic
					match: '/news/:uid',  // Pages will be generated under this pattern
					path: '/news-list',        // Placeholder page for unpublished documents
					component: require.resolve( './src/layouts/news.js' ),
				} ],
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
