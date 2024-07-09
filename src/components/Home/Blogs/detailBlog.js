import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApprovedBlogs } from '../../api/user'; 

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getApprovedBlogs(id);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{blog.title}</h2>
          <p className="font-monserrat text-black text-sm sm:text-xl dark:text-gray-800">
            {blog.description}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg border border-gray-300">
          <h3 className="text-xl font-bold mb-4">Blog Content</h3>
          <p>{blog.content}</p>
          <div className="mt-6">
            <button
              onClick={() => window.history.back()}
              className="border font-semibold border-gray-300 rounded-[50px] text-[13px] md:text-xl px-8 md:px-14 p-4 hover:shadow-lg"
            >
              Back to Blog List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
