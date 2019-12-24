import React from "react"
import Home from "../../layouts/home";
import { graphql } from "gatsby";
import { RichText } from "prismic-reactjs";

const IndexPage = ({data}) => {
	const pageData = data.prismic.allHomes.edges[0].node;

	return (
		<Home
			title={pageData.title}
			bannerSrc={pageData.banner_image.url}
			lang='en-us'
		>
			{RichText.render(pageData.content)}
		</Home>
	)
};

export default IndexPage;

export const query = graphql`
query {
  prismic {
    allHomes(lang: "en-us") {
      edges {
        node {
          title
          banner_image
          content
        }
      }
    }
  }
}
`;
