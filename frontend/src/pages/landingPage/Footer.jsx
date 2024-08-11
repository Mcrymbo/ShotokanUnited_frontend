import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { logo } from '../../assets';
import { ContactForm } from '../../components';


function FooterComponent() { 

  return (
    <Footer container className='text-white bg-slate-800 rounded-none'>
      <div className="w-full mt-8 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex justify-between items-center">
          <div className='flex items-center space-x-2 mb-6 lg:mb-0'>
            <img src={logo} title='logo'
                width={240}
                height={192}
                loading='lazy'
                className='w-[60px] h-[60px]' alt="Shotokan United" />
            <div className='text-xl font-semibold'>Shotokan United</div>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 text-center md:text-left">
            <div className='flex flex-col'>
              <Footer.Title title="Contact us" />
              <ContactForm />
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
