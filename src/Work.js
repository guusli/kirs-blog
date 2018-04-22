import React from "react";
import Thumbnail from "./components/Thumbnail";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { space, width } from "styled-system";

const StyledThumbnail = styled(Thumbnail)`
  ${width} ${space};
`;

export default ({ works, images }) => {
  return (
    <div>
      {works.map(work => {
        const slug = work.name.split(" ").join("-");
        const src = images.find(
          name => name.includes(slug) && name.includes("thumb")
        );
        return (
          <Link to={`/work/${slug}`} key={slug}>
            <StyledThumbnail
              w={[1, 1 / 2, 1 / 3]}
              p={3}
              name={work.name}
              src={src}
            />
          </Link>
        );
      })}
    </div>
  );
};
