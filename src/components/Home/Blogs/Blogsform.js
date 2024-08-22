import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getApprovedBlogs } from '../../api/user';
import BlogElement from './BlogElement';
import sortedBlogs from '../../../utils/functions';
import { ScaleLoader } from 'react-spinners';
export default function BlogsForm() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getApprovedBlogs();
        const sortedBlogs = fetchedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  if (!blogs || blogs.length === 0) {
    return <div className="h-14"><ScaleLoader color="#E91E63" /></div>;
  }


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
            <BlogElement key={item._id} {...item} />
          ))}
        </div>
        <div className="pt-12 pb-8 text-center">
          <Link
            to="/allblog"
            className=" bg-transparent hover:bg-blue-500 text-[#2196F3] font-semibold hover:text-white py-3 md:py-4  border border-[#2196F3] hover:border-transparent rounded text-[13px] md:text-xl px-5 md:px-8 p-4 hover:shadow-2xl"
          >   
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
