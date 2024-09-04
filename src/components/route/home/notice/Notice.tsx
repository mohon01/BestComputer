import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { GoTriangleRight } from "react-icons/go";
import img1 from "../../../../images/bg_notice_board.png";
import AnimatedButton from "./AnimatedButton";

interface NoticeNode {
  id: string;
  frontmatter: {
    title: string;
    date: string;
    description?: string;
    pdf: {
      publicURL: string;
    };
  };
}

const Notice: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }, limit: 10) {
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
  `);

  const notices: NoticeNode[] = data.allMarkdownRemark.nodes;

  return (
    <div className="mx-2 my-10 grid grid-cols-1 gap-10 md:mx-20 md:grid-cols-2">
      <div className="flex gap-10 overflow-hidden border bg-gradient-to-b from-gray-50 to-gray-200">
        <img src={img1} alt="Notice Board Background" className="h-fit w-24" />
        <div className="py-6">
          <p className="text-xl font-bold">নোটিশ বোর্ড</p>
          <div className="p-2">
            {notices.length === 0 ? (
              <div className="relative rounded border border-yellow-400 bg-yellow-100 px-4 py-3 text-center text-yellow-700">
                <strong className="font-bold">No Notices Found</strong>
                <span className="block sm:inline">
                  {" "}
                  Please check back later.
                </span>
              </div>
            ) : (
              <div className="space-y-2">
                {notices.map((notice) => (
                  <div key={notice.id} className="flex items-baseline gap-2">
                    <GoTriangleRight className="text-primary-100" />
                    <a
                      href={notice.frontmatter.pdf.publicURL}
                      className="text-gray-500 transition-all duration-200 hover:text-black hover:underline"
                      download
                    >
                      {notice.frontmatter.title}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <AnimatedButton />
      </div>
    </div>
  );
};

export default Notice;
