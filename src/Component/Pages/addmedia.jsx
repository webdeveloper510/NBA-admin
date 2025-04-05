import React, { useState } from "react";
import "../css/addmedia.css";
import { addmedia } from "../../Api";
import { toast } from "react-toastify";

const AddMedia = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    fileUrl: "",
  });

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!file) {
      newErrors.file = "Please upload an image or video";
    }
    return newErrors;
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on change
  };


  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setPreview({
        type: selectedFile.type,
        src: event.target.result,
      });
    };
    reader.readAsDataURL(selectedFile);
    setErrors({ ...errors, file: "" }); // clear error
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const mediaData = new FormData();
    mediaData.append("title", formData.title);
    mediaData.append("description", formData.description);
    mediaData.append("price", formData.price);
    if (file) {
      mediaData.append("filename", file);
    } else if (formData.fileUrl) {
      mediaData.append("filename", formData.fileUrl);
    } else {
      toast.error("Please upload a file or provide an external URL.");
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await addmedia(mediaData, token);
      console.log("Upload successful:", response);
      if (response.status === 201) {
        toast.success("Profile updated successfully");

      } else {
        toast.error(response.message || "Failed to update profile");
      }
      setFormData({ title: "", description: "", price: "", fileUrl: "" });
      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Upload failed!");
    }
  };

  return (
    <div className="container">
      <div className="w-10/12 mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Upload Media</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter a catchy title..."
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe your media..."
              value={formData.description}
              onChange={handleChange}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="price">Price (Optional)</label>
            <input
              id="price"
              name="price"
              type="text"
              placeholder="e.g., $19.99"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fileUrl">External URL (Optional)</label>
            <input
              id="fileUrl"
              name="fileUrl"
              type="url"
              placeholder="https://example.com/media"
              value={formData.fileUrl}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Upload Media</label>
            <div className="file-upload">
              <label className="file-upload-btn">
                Choose File (Image/Video)
                <input
                  type="file"
                  accept="image/*, video/*"
                  onChange={handleFileChange}
                />
              </label>
              {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
            </div>

            {preview && (
              <div style={{ marginTop: "10px" }}>
                {preview.type.startsWith("image/") ? (
                  <img
                    src={preview.src}
                    alt="Preview"
                    style={{
                      width: "300px",
                      height: "auto",
                      display: "block",
                      border: "1px solid #ccc",
                    }}
                  />
                ) : (
                  <video
                    controls
                    style={{
                      width: "300px",
                      height: "auto",
                      display: "block",
                      border: "1px solid #ccc",
                    }}
                  >
                    <source src={preview.src} type={preview.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Upload Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMedia;
