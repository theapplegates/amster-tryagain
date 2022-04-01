module.exports.data = {
  posts: `{
    allPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          date
          tags
          slug
          cover {
            childImageSharp {
              gatsbyImageData(
                formats: [AVIF, WEBP, AUTO]
                width: 1000
                placeholder: BLURRED
                aspectRatio: 1.66
              )
            }
          }
        }
      }
    }
  }`,
}
