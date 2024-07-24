import { useState, useEffect } from "react";
import { postBlog } from "../../api/user";
import { FaPenNib } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

const CustomInput = ({ label, type, placeholder, value, onChange, error, icon, onBlur }) => {
  return (
    <div className="relative mb-4">
      <label className="flex flex-row items-center justify-center gap-1 font-semibold">{label} {icon}</label>
      <input
        className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-4 py-2 w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!validateForm());
  }, [title, description, author, image]);

  const handleBlur = (field) => {
    setTouched({
      ...touched,
      [field]: true,
    });
    validateForm();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = "Title is required";
    else if (title.split(" ").length > 25) newErrors.title = "Title should be a Maximum of 25 words";
    if (!description) newErrors.description = "Description is required";
    else if (description.split(" ").length > 3000) newErrors.description = "Description should be a maximum of 3000 words";
    if (!image) newErrors.image = "Image is required!";
    else if (!/^https?:\/\/.+\..+$/.test(image)) newErrors.image = "Image URL must start with http:// or https://";
    if (!author) newErrors.author = "Author is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const blogData = {
      title,
      description,
      image,
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
      setImage('');
      setErrors({});
      setTouched({});
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error(error?.message || "Please Log in To create Blog!", {
        position: "top-center",
      });
      setErrors({ form: 'Failed to create blog. Please Log in!' });
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
          onBlur={() => handleBlur('title')}
          error={touched.title && errors.title}
        />
        <div className="relative mb-4">
          <label className="flex flex-col gap-1 font-semibold">Description</label>
          <textarea
            className="border border-gray-300 hover:border-[#2196F3] rounded shadow-lg px-4 py-2 w-full"
            placeholder="Enter your description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => handleBlur('description')}
            required
          />
          {touched.description && errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>
        <CustomInput
          label="Author"
          icon={<FaPenNib />}
          type="text"
          placeholder="Enter your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onBlur={() => handleBlur('author')}
          error={touched.author && errors.author}
        />
        <CustomInput
          label="Image"
          type="text"
          placeholder="Enter your Image Url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          onBlur={() => handleBlur('image')}
          error={touched.image && errors.image}
        />
        {errors.form && <p className="text-red-500 text-center mb-4">{errors.form}</p>}
        <button
          type="submit"
          className={`w-full text-white font-semibold py-2 rounded-lg shadow-lg transition duration-300 ${isSubmitDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#2196F3] hover:bg-[#1e88e5]'}`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
