import React, { useEffect, useState } from 'react';
import { getApprovedBlogs } from '../../api/user';
import BlogElement from './BlogElement';
export default function ViewAllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await getApprovedBlogs();
        // Sort blogs by date in descending order
        const sortedBlogs = fetchedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);


  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">All Blogs</h2>
          <p className="font-monserrat text-black text-sm sm:text-xl dark:text-gray-800">
            "Discover all our inspiring stories and impactful changes through Kindness Corner."
          </p>
        </div>
        <div className="grid m-4 md:m-2 sm:m-0 gap-8 lg:grid-cols-2">
          {blogs.map((item) => (
            <BlogElement key={item._id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
