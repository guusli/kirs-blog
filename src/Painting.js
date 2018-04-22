import React from "react";
import styled from "styled-components";
import {
  space,
  width,
  flexDirection,
  justifyContent,
  display
} from "styled-system";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  ${space};
  background: #fff;
  padding: 24px;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Column = styled.div`
  ${space};
  ${width};
  ${display};
`;

const Flex = styled.div`
  display: flex;
  ${flexDirection};
  ${justifyContent};
`;

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 6px;
`;

const DetailsItem = styled.li`
  margin: 0;
  padding: 0;
`;

const PriceItem = styled(DetailsItem)`
  ${space};
`;

const BackLink = styled(Link)`
  text-transform: uppercase;
`;

const Heading = styled.h2`
  color: #333;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 100;
`;

export default ({ works, images, match }) => {
  const painting = works.find(work =>
    work.name
      .split(" ")
      .join("-")
      .includes(match.params.slug)
  );
  const src = images.find(
    name => !name.includes("thumb") && name.includes(match.params.slug)
  );

  return (
    <Wrapper mx={3}>
      <Column width={1 / 2} pr={2}>
        <Image src={src} />
      </Column>
      <Column width={1 / 2} pl={32} display="flex">
        <Flex flexDirection="column" justifyContent="flex-end">
          <Heading>{painting.name}</Heading>
          <Details>
            {false && <DetailsItem>{painting.measurements}</DetailsItem>}
            <DetailsItem>{painting.technique}</DetailsItem>
            {false && <PriceItem mt={2}>{painting.price}</PriceItem>}
            {false && painting.sold ? <DetailsItem>Sold</DetailsItem> : ""}
          </Details>
          {false && <BackLink to="/">Back</BackLink>}
        </Flex>
      </Column>
    </Wrapper>
  );
};
