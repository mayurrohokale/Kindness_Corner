import { useState } from "react";
import { postBlog } from "../../api/user"; // Ensure the correct path

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
    debugger
    try {
      const response = await postBlog(blogData);
      console.log('Blog created successfully:', response);
      setTitle('');
      setDescription('');
      setAuthor('');
      setError('');
    } catch (error) {
      console.error('Error creating blog:', error);
      setError('Failed to create blog. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
