import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApprovedBlogs } from '../../api/user';
import dayjs from 'dayjs';
import { FaPenNib } from "react-icons/fa6";

export default function BlogsForm() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getApprovedBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const calculateDaysAgo = (date) => {
    const savedDate = dayjs(date);
    const today = dayjs();
    return today.diff(savedDate, 'day');
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
          <p className="font-monserrat text-black text-sm sm:text-xl dark:text-gray-800">
            "Join us as we share inspiring stories of generosity and the impactful change our community is making through Kindness Corner."
          </p>
        </div>
        <div className="grid m-4 md:m-2 sm:m-0 gap-8 lg:grid-cols-2">
          {blogs.slice(0, 4).map((item) => (
            <article key={item._id} className="p-6 bg-white rounded-lg border border-gray-300 hover:shadow-2xl hover:scale-105">
              <div className="flex justify-between items-center mb-5 text-gray-800">
                <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                  <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                  </svg>
                  Blog
                </span>
                <span className="text-sm">{calculateDaysAgo(item.date)} days ago</span>
              </div>
              <h2 className="mb-2 text-xl md:text-2xl text-start font-bold font-monserrat tracking-tight text-gray-900 dark:text-black">
                <Link to={`/blog/${item._id}`}>{item.title}</Link>
              </h2>
              <p className="mb-5 text-start font-monserrat text-[10px] md:text-[15px] text-gray-500">{item.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <span className="font-medium flex gap-2 text-[14px] md:text-[18px] dark:text-black">
                    {item.author} <FaPenNib />
                  </span>
                </div>
                <Link
                  to={`/blog/${item._id}`}
                  className="inline-flex text-[14px] md:text-[18px] items-center font-medium text-blue-600 hover:underline"
                >
                  Read more
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="pt-12 pb-8 text-center">
          <Link
            to="/allblog"
            className="border font-semibold border-gray-300 rounded-[50px] text-[13px] md:text-xl px-8 md:px-14 p-4 hover:shadow-lg"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
