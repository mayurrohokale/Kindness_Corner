// BlogDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
  { id: 1, title: "Making an Impact:", fullText: "Full content of blog 1..." },
  { id: 2, title: "NGO Spotlight:", fullText: "Full content of blog 2..." },
  { id: 3, title: "Tips for Effective Giving:", fullText: "Full content of blog 3..." },
  { id: 4, title: "Volunteer Stories:", fullText: "Full content of blog 4..." },
  { id: 5, title: "Fundraising Events:", fullText: "Full content of blog 5..." }
];

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="bg-white p-6 mx-auto max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-lg text-gray-700">{blog.fullText}</p>
    </section>
  );
};

export default BlogDetail;
