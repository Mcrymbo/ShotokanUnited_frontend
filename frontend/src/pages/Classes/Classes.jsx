import React from 'react';
import '../Home/Home.css';
import '../Classes/Classes.css';
import { FaChildren } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { MdSportsMartialArts } from "react-icons/md";
import { GiBlackBelt } from "react-icons/gi";


function Classes() {
    return (
        <>
            <div className='class-parent'>
                <div className='content container mt-5'>
                    <h6 className='text-center text-light mb-3'>Our Classes</h6>
                    <h3 className='text-center mb-3 explore'>Explore Our Karate Classes</h3>
                    <div className='text-center container mb-4 px-5 text-light'>
                        <p className='px-5'>
                            Discover the art of Shotokan Karate at Shotokan-United's Classes page. From Karate Basics to Advanced techniques, and engaging Kids Karate programs, we cater to all levels. Join us and embark on a journey of skill, discipline, and empowerment!</p>
                    </div>
                    <div className='row '>
                        <div className="col-md-4 mb-4">
                            {/* Container 1 */}
                            <div className="container gold-bg uniform-height">
                                <div className="myIcon mb-3"><FaCertificate /></div>
                                <h2 className='sub-head text-center mb-3'>Karate Basics</h2>
                                <span>Master the essentials of Shotokan Karate with our Basic program. Perfect for beginners, it's a welcoming space to learn fundamental techniques, forms, and discipline</span>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            {/* Container 2 */}
                            <div className="container gold-bg uniform-height">
                                <div className="myIcon mb-3"><GiBlackBelt /></div>
                                <h2 className='sub-head text-center mb-3'>Advanced Karate</h2>
                                <span>Elevate your karate skills with our Advanced program. Designed for experienced practitioners, it offers a dynamic mix of traditional training and modern practice to refine techniques and unlock your full potential.</span>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            {/* Container 3 */}
                            <div className="container gold-bg uniform-height">
                                <div className="myIcon mb-3"><FaChildren /></div>
                                <h2 className='sub-head text-center mb-3'>Kids Karate</h2>
                                <span>Empower your child with our Kids program. Through fun and supportive classes, children learn Shotokan Karate while developing essential life skills like discipline, confidence, and respect.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Classes;
