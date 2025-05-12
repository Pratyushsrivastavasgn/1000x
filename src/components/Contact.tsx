import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      emailjs.send(
        'service_cah8fok', // <-- replace with your actual service ID
        'template_uo3fic3', // <-- replace with your actual template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'wbwA1RpTUq91zKHov' // <-- replace with your actual public key
      ).then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setIsSubmitted(false), 5000);
      }).catch((error) => {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
        alert('Failed to send message. Please try again later.');
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Fill out the form below to send us a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-gray-600">
                    109A, Ashish Royal Park, Pilibhit ByPass, Bareilly, UP 243006
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail size={24} className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-gray-600">thousandxconsultant@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone size={24} className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-gray-600">+91 9368610236</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-500 hover:text-black transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Thank you!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20 transition-colors`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white bg-black hover:bg-gray-800 transition-colors 
                    text-sm uppercase tracking-wider font-medium
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
