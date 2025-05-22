



"use client";

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
//   const formRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [error, setError] = useState('');


  const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [submitStatus, setSubmitStatus] = useState(null);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
    const [error, setError] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      setError('');
      setSubmitStatus(null);

      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      console.log('Email sent!', result.text);
      setSubmitStatus('success');
      formRef.current.reset();
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (err) {
      console.error('Send error:', err);
      setSubmitStatus('error');
      setError('Failed to send message.');
      setTimeout(() => {
        setError('');
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 rounded-xl p-6 md:p-12 mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Get in touch</h2>
          <p className="text-gray-700 mb-6">
            Use our contact form for all information requests<br className="hidden sm:block" />
            or feel free to get in touch with us via email.
          </p>
          <div>
            <p className="font-medium text-gray-800">Email</p>
            <a href="mailto:info@journeyhealth.uk" className="text-blue-600 hover:underline">
              info@journeyhealth.uk
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="to_name" value="Journey Health Team" />

            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-700"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Enter a valid email address"
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-700"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Enter your message"
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-300 text-gray-700 resize-none"
            ></textarea>

            {error && submitStatus === 'error' && (
              <div className="flex items-center text-red-600 text-sm p-2 bg-red-50 rounded">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>{error}</span>
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="flex items-center text-green-600 text-sm p-2 bg-green-50 rounded">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Message sent successfully!</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#b9d765] hover:bg-green-400 transition-colors duration-200 font-medium text-black py-3 rounded-md disabled:bg-gray-300"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="w-4 h-4 animate-spin mr-2" /> Sending...
                </span>
              ) : (
                'Submit your request'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;