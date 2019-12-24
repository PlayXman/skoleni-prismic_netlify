import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const News = () => (
	<Layout>
		<SEO title="News page" />
		<h1>News Page</h1>
		<p>Welcome to news page</p>
		<Link to="/">Go back to the homepage</Link>
	</Layout>
)

export default News
