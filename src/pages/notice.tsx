import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layout/LayOut";

interface NoticeNode {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    pdf: {
      publicURL: string;
    };
  };
}

interface NoticesData {
  allMarkdownRemark: {
    nodes: NoticeNode[];
  };
}

const NoticeIndex: React.FC<PageProps<NoticesData>> = ({ data }) => {
  const notices = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-center text-4xl font-bold">Notices</h1>
        {notices.length === 0 ? (
          <div className="relative rounded border border-yellow-400 bg-yellow-100 px-4 py-3 text-center text-yellow-700">
            <strong className="font-bold">No Notices Found</strong>
            <span className="block sm:inline"> Please check back later.</span>
          </div>
        ) : (
          <div className="space-y-8">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="rounded-md bg-white p-6 shadow-md transition-all duration-200 hover:bg-gray-50"
              >
                <a
                  href={notice.frontmatter.pdf.publicURL}
                  download
                  className="text-2xl font-semibold text-blue-600 hover:underline"
                >
                  {notice.frontmatter.title}
                </a>
                <p className="mt-2 text-gray-500">{notice.frontmatter.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          pdf {
            publicURL
          }
        }
      }
    }
  }
`;

export default NoticeIndex;
