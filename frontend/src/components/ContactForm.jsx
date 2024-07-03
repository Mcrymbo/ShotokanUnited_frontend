import { useForm } from 'react-hook-form';
import { api } from '../hooks';

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await api.post("/api/message/", data);
            console.log(response.data);
        } catch (error) {
            console.error(error.message);
        }
      reset();
    }; 
  return (
    <div>
    <section className='bg-slate-800 py-10'>
      <form className='space-y-4 md:w-1/2 md:mx-auto' onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          {...register("name", { required: "Name is required" })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.name ? 'border border-red-500' : ''}`}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.email ? 'border border-red-500' : ''}`}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        <textarea
          name="message"
          placeholder="Your Message"
          {...register("message", { required: "Message is required" })}
          className={`w-full p-2 rounded bg-gray-700 text-black ${errors.message ? 'border border-red-500' : ''}`}
          rows="4"
        />
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        <button type="submit" className="w-full p-2 bg-orange-500 rounded text-white">
          Send Message
        </button>
      </form>
    </section>
    </div>
  )
}

export default ContactForm
