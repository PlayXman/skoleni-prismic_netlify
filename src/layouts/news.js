import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby";
import {RichText} from "prismic-reactjs";
import Map from "../components/map";
import Videos from "../components/videos";
import Carousel from "../components/carousel";
import Gallery from "../components/gallery";

const News = ( { data } ) => {
	const page = data.prismic.allNews.edges[0].node;
	const title = page.title[0].text;
	const date = new Date( page.date );

	return (
		<Layout>
			<SEO
				title={title}
				lang={page._meta.lang.substr( 0, 2 )}
			/>
			<main>
				<h1>{title}</h1>
				<h4>{`${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`}</h4>
				{RichText.render( page.content )}
				<hr />

				{page.body.map( ( component, index ) => {
					switch ( component.type ) {
						case 'location':
							return <Map key={`comp${index}`} />;
						case 'videos':
							return <Videos key={`comp${index}`} items={component.fields} />;
						case 'carousel':
							return <Carousel key={`comp${index}`} items={component.fields} />;
						case 'image_gallery':
							return <Gallery key={`comp${index}`} items={component.fields} />;
						default:
							return null;
					}
				} )}
			</main>
		</Layout>
	)
};

export default News

export const query = graphql`
query($uid: String) {
  prismic {
    allNews(uid: $uid) {
      edges {
        node {
          title
          date
          content
          _meta {
            lang
          }
          body {
            ... on PRISMIC_NewBodyCarousel {
              type
              fields {
                carousel_content
              }
            }
            ... on PRISMIC_NewBodyImage_gallery {
              type
              fields {
                gallery_image
                image_captions
              }
            }
            ... on PRISMIC_NewBodyVideos {
              type
              fields {
                video
                video_text
                video_title
              }
            }
            ... on PRISMIC_NewBodyLocation {
              type
              fields {
                locality_title
                map
              }
            }
          }
        }
      }
    }
  }
}
`;
