import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner";
import Employees from "../components/employees/employees";

const AboutUs = ( { title, lang, bannerSrc, employees, children } ) => {
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
				<Employees items={employees} />
			</main>
		</Layout>
	)
};

export default AboutUs
