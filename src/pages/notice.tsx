import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout/LayOut";

interface NoticeIndexProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: { slug: string };
          frontmatter: {
            title: string;
            date: string;
            pdf: string;
          };
        };
      }>;
    };
  };
}

const NoticeIndex: React.FC<NoticeIndexProps> = ({ data }) => {
  const notices = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-4xl font-bold">Notices</h1>
        <div className="space-y-8">
          {notices.length > 0 ? (
            notices.map(({ node }) => (
              <div key={node.fields.slug}>
                <a
                  href={node.frontmatter.pdf}
                  download
                  className="text-2xl font-semibold text-blue-600"
                >
                  {node.frontmatter.title}
                </a>
                <p className="text-gray-500">{node.frontmatter.date}</p>
              </div>
            ))
          ) : (
            <p className="text-xl text-red-600">No notices found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            pdf
          }
        }
      }
    }
  }
`;

export default NoticeIndex;
