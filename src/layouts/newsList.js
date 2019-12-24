import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import List from "../components/list";

const NewsList = ( { title, lang, items } ) => {
	return (
		<Layout>
			<SEO
				title={title}
				lang={lang}
			/>
			<main>
				<h1>{title}</h1>
				<List items={items} />
			</main>
		</Layout>
	)
};

export default NewsList
