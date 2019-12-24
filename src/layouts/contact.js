import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";
import Map from "../components/map";

const Contact = ( { title, lang, bannerSrc, map, children } ) => {
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
				<Map />
			</main>
		</Layout>
	)
};

export default Contact
