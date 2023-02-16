import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import './css/style.css'
import 'react-toastify/dist/ReactToastify.css';
function ContactForm() {
    const form = useRef();
    const [msgStatus, setMsgStatus] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_y7w2qwd',
            'template_0655k3a',
            form.current,
            'VwSrtK4XrIkIF1zjr')
            .then((result) => {
                if (result.status == 200) {
                    setMsgStatus(true)
                }
                console.log(result);
            }, (error) => {
                console.log(error.text);
                setMsgStatus(false)
            });
    };
    if (msgStatus === true) {
        document.getElementById("form").reset();
        setTimeout(() => {
            setMsgStatus(false)
        }, 2000);
    }
    const CustomToast = () => {
        return (
            <div className="customTt">
                Hellow
            </div>
        )
    }
    const notifyTimeout = () => {
        toast("✅ Message Sent Successfully!")
    return <ToastContainer limit={1} autoClose={2000}/>
};

    return (
        <div className='mx-auto md:w-[60vw] lg:w-[50vw] text-center'>

            <div className='mt-5 mb-10'>
                <h2 className='bg-gradient-to-r w-auto inline from-[#AD30FA] to-[#07C5D1] font-semibold uppercase bg-clip-text text-transparent text-3xl'>Get In Touch</h2>
            </div>
            <div className='mt-5'>
                <form ref={form} id="form" onSubmit={sendEmail}
                    className='flex flex-col gap-4' >
                    <input className='outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40' type="text" name="user_name" placeholder='Enter your Full Name' required />
                    <input className='outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40' type="email" name="user_email" placeholder='Enter your Email' required />
                    <textarea className='outline-none rounded px-4 py-2 font-normal bg-gradient-to-l from-[#AD30FA]/30 to-[#07C5D1]/30 backdrop-blur-[10rem] bg-black/40 resize-none' rows={5} cols={20} name="message" placeholder='Message' required />
                    <button type="submit" className='bg-gradient-to-r w-auto inline from-[#AD30FA] to-[#07C5D1] text-white py-3 uppercase  rounded hover:from-[#07C5D1] hover:to-[#AD30FA] hover:transition ease-in-out hover:translate-y-3 duration-500 delay-100' >Send</button>
                </form>
                {
                    msgStatus === true ? notifyTimeout() : null
                }
            </div>
        </div>
    )
}

export default ContactForm