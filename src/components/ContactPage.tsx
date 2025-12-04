import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions, suggestions, or feedback? We'd love to hear from you. 
            Our support team is here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-8">
            <h2 className="text-white mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="report">Report an Issue</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-8">
              <h2 className="text-white mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Email</h3>
                    <p className="text-gray-300">support@skillswaphub.com</p>
                    <p className="text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-500">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Live Chat</h3>
                    <p className="text-gray-300">Available on our platform</p>
                    <p className="text-gray-500">Instant support for members</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-900/50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Location</h3>
                    <p className="text-gray-300">123 Learning Street</p>
                    <p className="text-gray-300">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-8">
              <h2 className="text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-white mb-2">How do I create an account?</h3>
                  <p className="text-gray-400">
                    Click the "Sign Up" button in the navigation bar and fill in your details. 
                    It's completely free!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white mb-2">Can I share my own resources?</h3>
                  <p className="text-gray-400">
                    Yes! Once you're logged in, you can post resources by clicking "Post Resource" 
                    in the navigation menu.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white mb-2">Is the platform really free?</h3>
                  <p className="text-gray-400">
                    Absolutely! Skill Swap Hub is completely free for all users. We believe in 
                    making learning accessible to everyone.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-white mb-2">How do I report inappropriate content?</h3>
                  <p className="text-gray-400">
                    Use the contact form above with the "Report an Issue" subject, or email us 
                    directly at support@skillswaphub.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}