import { useRef, useState, useContext } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from '../../context/ThemeContext';

function ContactForm() {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [sending, setSending] = useState(false);
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
    const errors = { user_name: '', user_email: '', message: '' };

    if (!formData.user_name.trim()) {
      errors.user_name = 'Full name is required';
      isValid = false;
    }
    if (!formData.user_email.trim()) {
      errors.user_email = 'Email address is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      errors.user_email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill the form correctly!");
      return;
    }

    setSending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_MSG_TOKEN1,
        import.meta.env.VITE_APP_MSG_TOKEN2,
        form.current,
        import.meta.env.VITE_APP_MSG_TOKEN3
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message Sent Successfully!");
            setFormData({ user_name: '', user_email: '', message: '' });
          }
          setSending(false);
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.");
          setSending(false);
        }
      );
  };

  const inputStyle = `w-full outline-none rounded-lg px-4 py-3 font-normal transition-colors border ${
    theme
      ? 'bg-slate-100 text-slate-900 border-slate-300 placeholder-slate-400 focus:border-cyan-500'
      : 'bg-white/10 text-white border-white/10 placeholder-gray-400 focus:border-cyan-400 backdrop-blur-md'
  }`;

  return (
    <div className="mx-auto w-full md:w-[60vw] lg:w-[50vw] text-center px-4">
      <ToastContainer limit={1} autoClose={2000} position="top-center" />
      
      <div className="mt-5 mb-10">
        <h2 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold uppercase text-3xl md:text-4xl">
          Get In Touch
        </h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <div>
          <input
            className={`${inputStyle} ${formErrors.user_name ? '!border-red-500' : ''}`}
            type="text"
            name="user_name"
            value={formData.user_name}
            placeholder="Enter your Full Name"
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
          />
          {formErrors.user_name && <p className="text-red-500 text-xs text-left mt-1 pl-1 font-medium">{formErrors.user_name}</p>}
        </div>

        <div>
          <input
            className={`${inputStyle} ${formErrors.user_email ? '!border-red-500' : ''}`}
            type="email"
            name="user_email"
            placeholder="Enter your Email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
          />
          {formErrors.user_email && <p className="text-red-500 text-xs text-left mt-1 pl-1 font-medium">{formErrors.user_email}</p>}
        </div>

        <div>
          <textarea
            className={`${inputStyle} resize-none ${formErrors.message ? '!border-red-500' : ''}`}
            rows={5}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          {formErrors.message && <p className="text-red-500 text-xs text-left mt-1 pl-1 font-medium">{formErrors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-cyan-500 hover:to-purple-600 text-white font-semibold py-3 uppercase rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;