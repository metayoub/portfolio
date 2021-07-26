import React, { useState }  from 'react'
import {  send } from 'emailjs-com';
import Modal from '../../shared/modal';

export default function Contact({ contact }) {

    const [isOpen, setIsOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState('');
    const [toSend, setToSend] = useState({
        reply_to: '',
        message: '',
        to_name: contact.title
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_mailService,
            process.env.REACT_APP_mailTemplate,
            toSend,
            process.env.REACT_APP_mailToken
          )
            .then(() => {
                setIsOpen(true);
                setDialogMessage("Your email was sent successfully");
            })
            .catch(() => {
                setIsOpen(true);
                setDialogMessage("Failed delivery");
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div id="contact" className="w-full min-h-screen bg-gray-50 dark:bg-gray-800 flex flex-col justify-center  items-center mx-auto">
            <form onSubmit={onSubmit} className="w-full md:w-3/4 lg:w-3/6 p-4">
                <div className="p-3">
                    <p className="w-full flex justify-center text-2xl text-gray-800 dark:text-gray-200 font-bold "  >Get in Touch </p>
                </div>
                <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-300 leading-5 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="email"
                            name="reply_to"
                            placeholder="Your Email" 
                            value={toSend.reply_to}
                            onChange={handleChange}
                            required />
                </div>
                <div className="p-3">
                    <textarea className="resize-none border rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-gray-400 rounded-md w-full py-3 px-4 text-gray-700 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-300 leading-5 focus:outline-none focus:ring-2 focus:ring-gray-500 h-56" 
                            placeholder="Your Message"
                            name="message"
                            value={toSend.message}
                            onChange={handleChange}
                            required />
                </div>
                <div className="p-3">
                    <button className="w-full flex justify-center bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white dark:text-gray-100 font-bold py-3 px-3 rounded text-xl" type="submit">
                        Send
                    </button>
                </div>
                <div className="p-3">
                    <Modal Open={isOpen} setIsOpen={setIsOpen} Message={dialogMessage}/>
                </div>
            </form>
        </div>
    )
}