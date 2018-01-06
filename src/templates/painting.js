import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { space, width, color } from "styled-system";
import Link from "gatsby-link";

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled(Img)`
  max-width: 100%;
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 32px;
`;

const DetailsItem = styled.li`
  margin: 0;
  padding: 0;
`;

const PriceItem = styled(DetailsItem)`
  ${space};
`;

const FlexFill = styled(Flex)`
  height: 100%;
`;

const BackLink = styled(Link)`
  text-transform: uppercase;
  padding-bottom: 24px;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 18px;
  text-transform: uppercase;
`;

export default ({ data }) => {
  const painting = data.markdownRemark.frontmatter;
  return (
    <Flex px={3}>
      <Box width={1 / 2} pr={2}>
        <Image resolutions={painting.thumbnail.childImageSharp.resolutions} />
      </Box>
      <Box width={1 / 2} pl={48}>
        <FlexFill direction="column" justify="flex-end">
          <Heading>{painting.title}</Heading>
          <Details>
            <DetailsItem>{painting.technique}</DetailsItem>
            <DetailsItem>{painting.measurements}</DetailsItem>
            <PriceItem mt={2}>{painting.price}</PriceItem>
            {painting.sold ? <DetailsItem>Sold</DetailsItem> : ""}
          </Details>
          <BackLink to="/work">Back</BackLink>
        </FlexFill>
      </Box>
    </Flex>
  );
};

export const query = graphql`
  query PaintingQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        technique
        measurements
        price
        sold
        _PARENT
        parent
        thumbnail {
          childImageSharp {
            resolutions(width: 500, height: 500) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
    file(relativePath: { regex: "/$slug/" }) {
      childImageSharp {
        resolutions(width: 500, height: 500) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
