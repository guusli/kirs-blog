import React from "react";
import Thumbnail from "../components/Thumbnail";
import styled from "styled-components";
import Link from "gatsby-link";
import { space, width } from "styled-system";
import Helmet from "react-helmet";

const StyledThumbnail = styled(Thumbnail)`
  ${width} ${space};
`;

export default ({ data }) => {
  const edges = data.allMarkdownRemark.edges;
  return (
    <div>
      {edges.map(edge => {
        return (
          <Link to={edge.node.fields.slug}>
            <StyledThumbnail
              w={1 / 3}
              p={3}
              name={edge.node.frontmatter.title}
              resolutions={
                edge.node.frontmatter.thumbnail.childImageSharp.resolutions
              }
            />
          </Link>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            thumbnail {
              childImageSharp {
                resolutions(width: 250, height: 250) {
                  ...GatsbyImageSharpResolutions_noBase64
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
