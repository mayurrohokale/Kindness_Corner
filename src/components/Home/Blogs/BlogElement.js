import { calculateDaysAgo } from "../../../utils/functions"
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa6";
export default function BlogElement(blog) {

    return (
        
        <Link to={`/blog/${blog._id}`} key={blog._id} className="p-6 bg-white rounded-lg border border-gray-300 hover:shadow-2xl hover:scale-105 cursor-pointer">
              <div className="flex justify-between items-center mb-5 text-gray-800">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Blog
                </span>
                <span className="text-sm">{calculateDaysAgo(blog.date)} days ago</span>
              </div>
              <h2 className="mb-2 text-xl md:text-2xl text-start font-bold font-monserrat tracking-tight text-gray-900 dark:text-black">
                <p>{blog.title}</p>
              </h2>
              <p className="mb-5 text-start font-monserrat text-[10px] md:text-[15px] text-gray-500 h-14 lg:w-full md:w-[500px] w-[200px] truncate">{blog.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-medium flex gap-2 text-[14px] md:text-[18px] dark:text-black">
                    {blog.author} <FaPenNib />
                  </span>
                </div>
                <p
                  className="inline-flex text-[14px] md:text-[18px] items-center font-medium text-[#2196F3] hover:text-blue-700 hover:underline"
                >
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </p>
              </div>
            </Link>
    )
}