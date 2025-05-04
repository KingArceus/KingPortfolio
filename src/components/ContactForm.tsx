import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formData,
      //   'YOUR_USER_ID'
      // );
      
      // Simulating EmailJS send for demo purposes
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully!'
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'There was an error sending your message. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {status.submitted && (
        <div className={`mb-4 p-3 rounded ${
          status.success 
            ? 'bg-green-900/50 text-green-400 border border-green-700' 
            : 'bg-red-900/50 text-red-400 border border-red-700'
        }`}>
          {status.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full flex justify-center items-center"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;