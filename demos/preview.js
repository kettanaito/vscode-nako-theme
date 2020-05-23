import Head from "next/head"
import { Image, renderMetaTags } from "react-datocms"
import { GraphQLClient } from "graphql-request"
import { request } from "../lib/datocms"

export function request({ query, variables, preview }) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

const HOMEPAGE_QUERY = gql`
  query HomePage($limit: IntType) {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    allPosts(first: $limit) {
      id
      title
      excerpt
      date
      author {
        name
      }
      coverImage {
        responsiveImage(
          imgixParams: { fit: crop, w: 300, h: 300, auto: format }
        ) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
  }
`

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  })

  return {
    props: {
      data,
    },
  }
}

export default function Home({ data }) {
  return (
    <div>
      <ProductDetai />
      <Head>{renderMetaTags(data.blog.seo.concat(data.site.favicon))}</Head>
      {data.allPosts.map((blogPost) => (
        <article key={blogPost.id}>
          <Image data={blogPost.coverImage.responsiveImage} />
          <h6>{blogPost.title}</h6>
        </article>
      ))}
    </div>
  )
}
