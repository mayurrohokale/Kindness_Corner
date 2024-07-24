import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApprovedBlogbyID } from '../../api/user';

export default function BlogDetail() {

  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  console.log(id,"ID");
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getApprovedBlogbyID(id);
        setBlog(fetchedBlog);
        console.log("Response",fetchedBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail">
      <h1>Data ikd </h1>
      blog
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-700">{blog.date}</p>
      <p className="text-lg">{blog.content}</p>
      <p className="text-gray-600">Written by: {blog.author}</p>
    </div>
  );
}
