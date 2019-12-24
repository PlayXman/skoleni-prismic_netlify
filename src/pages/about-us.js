import React from "react"
import AboutUs from "../layouts/aboutus";
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs'

const About = ( {data}) => {
	const pageData = data.prismic.allAbout_uss.edges[0].node;

	return (
		<AboutUs
			title={pageData.title}
			bannerSrc={pageData.banner_image.url}
			lang='cs-cz'
			employees={pageData.employees}
		>
			{RichText.render(pageData.content)}
		</AboutUs>
	)
};

export default About;

export const query = graphql`
query {
   prismic {
      allAbout_uss(lang: "cs-cz") {
        edges {
          node {
            title
            content
            banner_image
            employees {
	            employee_info
	            employee_name
	            employee_photo
	        }
          }
        }
      }
   }
}
`;
