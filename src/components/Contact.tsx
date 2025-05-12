import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

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

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xkgrqbwa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (error: any) {
      console.error('Formspree error:', error);
      alert(`Failed to send message: ${error.message}`);
    } finally {
      setIsSubmitting(false);
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
          {/* Contact Info Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="mr-4 text-gray-400" />
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-gray-600">109A, Ashish Royal Park, Pilibhit ByPass, Bareilly, UP 243006</p>
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

                  <div className="pt-10">
  <h4 className="text-lg font-semibold mb-4">Connect with us</h4>
  <ul className="space-y-2 text-gray-700">
    <li>
      <a href="https://www.instagram.com/thousandxconsultant/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Instagram
      </a>
    </li>
    <li>
      <a href="https://youtube.com/@thousandx18?si=x-5UD8CBJ6OZxKCj" target="_blank" rel="noopener noreferrer" className="hover:underline">
        YouTube
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/company/thousandxconsultant/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        LinkedIn
      </a>
    </li>
    <li>
      <a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Twitter
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/share/16YVvoZYrd/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="hover:underline">
        Facebook
      </a>
    </li>
  </ul>
</div>

                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6">
                <h4 className="font-semibold text-lg mb-2">Thank you!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${errors.message ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-black/20`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white bg-black hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider font-medium ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
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
