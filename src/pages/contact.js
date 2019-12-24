import React from "react"
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs'
import Contact from "../layouts/contact";

const ContactPage = ( { data } ) => {
	const pageData = data.prismic.allContacts.edges[0].node;

	return (
		<Contact
			title={pageData.title}
			bannerSrc={pageData.banner_image.url}
			lang="cs-cz"
			map={pageData.map}
		>
			{RichText.render( pageData.content )}
		</Contact>
	)
};

export default ContactPage;

export const query = graphql`
query {
  prismic {
      allContacts(lang: "cs-cz") {
        edges {
          node {
            title
            map
            content
            banner_image
          }
        }
      }
  }
}
`;
