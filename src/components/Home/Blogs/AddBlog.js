import { useState } from "react";
import { postBlog } from "../../api/user"; 
import { FaPenNib } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


const CustomInput = ({ label, type, placeholder, value, onChange, error, icon }) => {
  return (
    <div className="relative mb-4">
      <label className="flex flex-row items-center justify-center gap-1 font-semibold">{label} {icon}</label>
      <input
        className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-4 py-2 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const blogData = {
      title,
      description,
      author,
    };

    try {
      const response = await postBlog(blogData);
      
      console.log('Blog created successfully:', response);
      toast.success("Blog created, Goes for Approval!", {
        position: "top-center",
      });
      setTitle('');
      setDescription('');
      setAuthor('');
      setError('');
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error( "Failed to Create Blog!", {
         position: "top-center",
      })
      setError('Failed to create blog. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Write a Blog</h2>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Title"
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="relative mb-4">
          <label className="flex flex-col gap-1 font-semibold">Description</label>
          <textarea
            className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-4 py-2 w-full"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <CustomInput
          label="Author"
          icon = {<FaPenNib/>}
          type="text"
          placeholder="Enter your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-[#2196F3] text-white font-semibold py-2 rounded-lg shadow-lg hover:bg-[#1e88e5] transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
