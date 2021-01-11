import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

export default ({ name, description, className }) => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryAsset {
        edges {
          node {
            fluid {
              ...CloudinaryAssetFluid
              src
            }
          }
        }
      }
    }
  `);

  const dataFilter = data.allCloudinaryAsset.edges.find((edge) => {
    return edge.node.fluid.src.split("/").find((nameEdge) => nameEdge === name);
  });

  if (!dataFilter) {
    return null;
  }

  return (
    <Image
      fluid={dataFilter.node.fluid}
      alt={description}
      className={className}
    />
  );
};
