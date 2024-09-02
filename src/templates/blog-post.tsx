import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout/LayOut";

interface BlogPostProps extends PageProps {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
        date: string;
      };
      html: string;
    };
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <div className="prose mx-auto p-4">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-gray-600">{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

export default BlogPost;
