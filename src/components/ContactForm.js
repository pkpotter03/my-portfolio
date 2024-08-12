import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto my-8">
      <div className="my-4">
        <label className="block text-gray-200 mb-2">Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-zinc-900" required />
      </div>
      <div className="my-4">
        <label className="block text-gray-200 mb-2">Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-zinc-900" required />
      </div>
      <div className="my-4">
        <label className="block text-gray-200 mb-2">Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-zinc-900"></textarea>
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg ">
        Send Message
      </button>
    </form>
  );
}
