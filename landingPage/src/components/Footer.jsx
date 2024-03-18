import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

import hdki from '../assets/images/HDKI.jpg'
function FooterComponent() {
  return (
    <Footer container className='text-white bg-neutral-400 rounded-none py-10'>
      <div className="mt-8 lg:mx-20">
        <div className="lg:flex justify-between">
          <div className=''>
            <div className='flex items-center space-x-2 sm:mb-10'>
              <img src={hdki} className='w-[60px] h-[60px] sm:p-10' alt="hdki" />
              <div className='w-[20px]'>Shotokan United</div>
            </div>
            <div></div>
          </div>
          
          <div className="flex space-x-16">
            <div className='flex flex-col'>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Shotokan United</Footer.Link>
                <Footer.Link href="#"></Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        {/* <Footer.Divider /> */}
        <div className="w-full sm:flex sm:items-center sm:justify-center mt-4 mb-10">
          <div className="mt-4 flex space-x-8 sm:mt-0 sm:justify-center">
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

export default FooterComponent