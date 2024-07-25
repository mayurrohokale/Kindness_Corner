import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApprovedBlogbyID } from '../../api/user';

export default function BlogDetail() {

  const { id } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getApprovedBlogbyID(id);
        setBlog(fetchedBlog?.data);
        console.log("Response",fetchedBlog);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  console.log(blog, "blog")

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div className="blog-detail">
      
      {/* <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-2xl">{blog.description}</p>
      <p className="text-gray-700">{blog.date}</p>
      <p className="text-lg">{blog.content}</p>
      <p className="text-gray-600">Written by: {blog.author}</p> */}
      <BlogPage {...blog} />
    </div>
  );
}





function BlogPage({ title, date, author, description, image }){
  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <div className="text-gray-500">{date}</div>
        <div className="text-gray-500">By {author}</div>
      </header>
      <article className="prose text-justify">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </article>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src={image}
              alt={image}
              className="rounded-lg shadow-md"
            />
        </div>
    </div>
  );
};