import { graphql } from "gatsby";
import React from "react";
import Layout from "../layout/LayOut";

interface Frontmatter {
  author?: string;
  date?: string;
  title: string;
}

interface MarkdownRemark {
  id: string;
  frontmatter: Frontmatter;
  html: string;
}

interface BlogPostTemplateProps {
  data: {
    markdownRemark: MarkdownRemark;
  };
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  data: { markdownRemark: post },
}) => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">{post.frontmatter.title}</h1>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          {post.frontmatter.author && (
            <div className="italic">By: {post.frontmatter.author}</div>
          )}
          {post.frontmatter.date && <div>Posted: {post.frontmatter.date}</div>}
        </div>

        <hr className="border-gray-300 mb-6" />

        {(!post.html || post.html.length === 0) && (
          <p className="text-center text-gray-500">This post has no content</p>
        )}

        {post.html && post.html.length !== 0 && (
          <article
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        )}
      </div>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        title
      }
      html
    }
  }
`;
