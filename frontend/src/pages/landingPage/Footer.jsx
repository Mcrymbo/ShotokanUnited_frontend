import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { logo } from '../../assets';
import { useForm } from 'react-hook-form';

function FooterComponent() {
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

  const onSubmit = () => {
    reset();
  };

  return (
    <Footer container className='text-white bg-slate-800 rounded-none'>
      <div className="w-full mt-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between items-center">
          <div className='flex items-center space-x-2 mb-6 lg:mb-0'>
            <img src={logo} className='w-[60px] h-[60px]' alt="Shotokan United" />
            <div className='text-xl font-semibold'>Shotokan United</div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:space-x-16 space-y-6 lg:space-y-0 text-center lg:text-left">
            <div className='flex flex-col'>
              <Footer.Title title="Contact us" />
              <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
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
            </div>
            <div className='flex flex-col'>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className='flex flex-col'>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>

        <div className="w-full sm:flex sm:items-center sm:justify-center mt-6 lg:mt-10">
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>

        <Footer.Divider />

        <div className='text-center mt-6'>
          <Footer.Copyright href="#" by="Alphy™" year={2024} />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;
