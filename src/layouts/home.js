import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";

const Home = ( { title, lang, bannerSrc, children } ) => {
	return (
		<Layout>
			<SEO
				title={title}
				lang={lang.substr( 0, 2 )}
			/>
			<Banner imgSrc={bannerSrc} />
			<main>
				<h1>{title}</h1>
				{children}
			</main>
		</Layout>
	)
};

export default Home
