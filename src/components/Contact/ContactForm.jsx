import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ContactForm() {
    const form = useRef();
    const [msgStatus, setMsgStatus] = useState(false)
    const [send, setSending] = useState(false)
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const validateForm = () => {
        let isValid = true;
        const errors = {
            user_name: '',
            user_email: '',
            message: '',
        };

        // Check the user name
        if (!formData.user_name.trim()) {
            errors.user_name = 'Full name is required';
            isValid = false;
        }

        // Check the email address
        if (!formData.user_email.trim()) {
            errors.user_email = 'Email address is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
            errors.user_email = 'Invalid email address';
            isValid = false;
        }

        // Check the message
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true)
        if (validateForm()) {
            emailjs.sendForm(
                import.meta.env.VITE_APP_MSG_TOKEN1,
                import.meta.env.VITE_APP_MSG_TOKEN2,
                form.current,
                import.meta.env.VITE_APP_MSG_TOKEN3
            ).then((result) => {
                if (result.status == 200) {
                    setMsgStatus(true);
                    setSending(false)
                }
                console.log(result);
            }, (error) => {
                console.log(error.text);
                setMsgStatus(false);
                setSending(false)
            });
        }
    };

    if (msgStatus === true) {
        document.getElementById("form").reset();
        setTimeout(() => {
            setMsgStatus(false)
        }, 2000);
    }
    const notifyTimeout = () => {
        toast("✅ Message Sent Successfully!")
        return <ToastContainer limit={1} autoClose={2000}
            position="top-center"
        />
    };

    return (
        <div className='mx-auto md:w-[60vw] lg:w-[50vw] text-center'>

            <div className='mt-5 mb-10'>
                <h2 className='bg-gradient-to-r w-auto inline from-[#AD30FA] to-[#07C5D1] font-semibold uppercase bg-clip-text text-transparent text-3xl'>Get In Touch</h2>
            </div>
            <div className='mt-5'>
                <form ref={form} id="form"
                    className='flex flex-col gap-4' >
                    <input
                        className={`outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40 ${formErrors.user_name ? 'border-red-500' : ''
                            }`}
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        placeholder="Enter your Full Name"
                        onChange={(e) => {
                            setFormData({ ...formData, user_name: e.target.value });
                        }}
                        required
                    />
                    <input className='outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40' type="email" name="user_email" placeholder='Enter your Email'
                        value={formData.user_email}
                        onChange={(e) => {
                            setFormData({ ...formData, user_email: e.target.value });
                        }}
                        required />
                    <textarea className='outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40 resize-none' rows={5} cols={20} name="message" placeholder='Message'
                        value={formData.message}
                        onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value });
                        }}
                        required />
                    {
                        !send ?
                            <button onClick={sendEmail} type="submit" className='bg-gradient-to-r w-auto inline from-[#AD30FA] to-[#07C5D1] text-white py-3 uppercase  rounded hover:from-[#07C5D1] hover:to-[#AD30FA] hover:transition ease-in-out hover:translate-y-3 duration-500 delay-100' >Send</button> : <button type="submit" className='bg-gradient-to-r w-auto inline from-[#AD30FA] to-[#07C5D1] text-white py-3 uppercase  rounded hover:from-[#07C5D1] hover:to-[#AD30FA] hover:transition ease-in-out hover:translate-y-3 duration-500 delay-100 cursor-wait' disabled>Sending</button>
                    }
                </form>
                {
                    msgStatus && notifyTimeout()
                }
            </div>
        </div>
    )
}

export default ContactForm