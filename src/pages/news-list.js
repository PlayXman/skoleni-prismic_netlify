import React from "react"
import NewsList from "../layouts/newsList";
import { graphql } from "gatsby";

const NewsListPage = ({data}) => {
	return (
		<NewsList
			title="Novinky"
			lang="cs"
			items={data.prismic.allNews.edges}
		/>
	)
};

export default NewsListPage

export const query = graphql`
query {
  prismic {
    allNews(sortBy: meta_lastPublicationDate_ASC) {
      edges {
        node {
          title
          _meta {
            uid
          }
        }
      }
    }
  }
}
`;
