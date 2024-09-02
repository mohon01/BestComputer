import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout/LayOut";

interface BlogIndexProps extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: { slug: string };
          frontmatter: {
            title: string;
            date: string;
            description: string;
          };
        };
      }>;
    };
  };
}

const BlogIndex: React.FC<BlogIndexProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <div className="space-y-8">
          {posts.map(({ node }) => (
            <div key={node.fields.slug}>
              <Link
                to={`/blog${node.fields.slug}`}
                className="text-2xl font-semibold text-blue-600"
              >
                {node.frontmatter.title}
              </Link>
              <p className="text-gray-500">{node.frontmatter.date}</p>
              <p className="mt-2">{node.frontmatter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;

export default BlogIndex;
