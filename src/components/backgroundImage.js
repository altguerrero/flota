import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

export default ({ name, children }) => {
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
    <BackgroundImage fluid={dataFilter.node.fluid}>{children}</BackgroundImage>
  );
};
