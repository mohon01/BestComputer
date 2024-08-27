import { graphql, Link } from "gatsby";
import React from "react";
import Layout from "../../components/layout/LayOut";

interface NoticeListProps {
  data: {
    allMarkdownRemark: {
      nodes: {
        id: string;
        frontmatter: {
          title: string;
          date: string;
        };
        fields: {
          slug: string;
        };
        excerpt: string;
      }[];
    };
  };
}

const NoticeList: React.FC<NoticeListProps> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Notices</h1>
        <ul className="space-y-8">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white shadow hover:shadow-lg transition-shadow rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  to={post.fields.slug}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <p className="text-gray-500 mb-4">{post.frontmatter.date}</p>
              <p className="text-gray-700">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default NoticeList;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 150)
      }
    }
  }
`;
