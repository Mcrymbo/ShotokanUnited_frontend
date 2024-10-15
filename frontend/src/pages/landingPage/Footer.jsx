import { logo } from '../../assets';
import { Link } from 'react-router-dom';
import { SeoOptimizer } from '../../common';
// import { ContactForm } from '../../components';


function FooterComponent() { 

  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
    <aside>
    <img src={logo} title='logo'
            width={240}
            height={192}
            loading='lazy'
            className='w-[60px] h-[60px]' alt="Shotokan United" />
      <p>
        Shotokan United Kenya
        <br />
        Strength, discipline, and community
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Programes</h6>
      <a className="link link-hover">Kids karate</a>
      <a className="link link-hover">Women in Karate</a>
      <a className="link link-hover">Adults Karate</a>
      <a className="link link-hover">Karate for schools</a>
    </nav>
    <nav>
      <h6 className="footer-title">Organization</h6>
      <Link to={"/about"} className="link link-hover">About us</Link>
      <Link to={"/contact"} className="link link-hover">Contact</Link>
      <Link to={"/news"} className="link link-hover">News</Link>
      <Link to={"#"} className="link link-hover">Blog</Link>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <SeoOptimizer />
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
  );
}

export default FooterComponent;
