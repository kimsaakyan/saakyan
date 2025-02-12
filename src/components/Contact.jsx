import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-100 py-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Contact Me
                </h2>
                <p className="text-gray-700 text-lg text-center mb-8">
                    Feel free to reach out to me! Whether you have a question,
                    an opportunity, or just want to say hi, I’ll try my best to
                    get back to you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="flex flex-col items-start">
                        <h3 className="text-2xl font-semibold mb-4">
                            Get in Touch
                        </h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Email:</strong> saakyan.kimo@gmail.com
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Phone:</strong> +79269870602
                        </p>
                        <p className="text-gray-700">
                            <strong>Location:</strong> Moscow, Russian
                        </p>
                    </div>
                    {/* Contact Form */}
                    <form className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
