



import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroImage from "../image/heroImage.png";
import AimImage from "../image/aimImage.jpg";
import FakeMed from "../image/fakemed.png";
import ResellImg from "../image/resell.jpg";

const UserDashboard = () => {
    const navigate = useNavigate();

    const handleFormNavigation = () => {
        navigate('/user-medicine-form');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleScanner = () => {
        navigate('/scan');
    };

    const handleResell = () => {
        navigate('/resell'); // Ensure this is the correct route
    };

    return (
        <>
            <div className="mx-auto w-full max-w-7xl">
                <div className="w-full flex">
                    <div className="w-1/2">
                        <img src={HeroImage} alt="Hero" />
                    </div>
                    <div className="w-1/2">
                        <h1 className="text-7xl font-semibold pb-12">
                            Create an <br /> unfair advantage
                        </h1>
                        <p className="pb-7">
                           In most of the Indian households often have leftover medicines, some of which are still within their expiry date, while others have expired. These medicines often end up in the trash, harming the environment. A proposed software solution addresses this by collecting expired and unused medicines from users. Users earn points for medicines still within their expiry date, which are verified for authenticity using QR codes and manual data entry. After user verification, the medicine data is sent to an admin portal for approval. Accepted medicines are returned to manufacturers for raw material extraction and reuse, preventing environmental harm.
                        </p>
                        <button
                            onClick={handleSignup}
                            type="button"
                            className="rounded-md bg-sky-500 text-base px-4 py-2 font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="relative" id="aboutSection">
                {/* What we do */}
                <div className="px-2 pb-3 pt-20">
                    <h1 className="text-4xl font-black absolute left-[63px]">
                        What we do at MedRustum
                    </h1>
                    <div className="mt-4 flex justify-around">
                        <div className="text-xl mt-10">
                            Our goal is to ensure that cost-effective medication is accessible
                            to all <br />
                            individuals in need, at the most reasonable prices possible.
                            <div className="facts flex">
                                <p className="text-lg text-sky-900 font-bold italic pr-4">
                                    <a href="https://www.valueinhealthjournal.com/article/S1098-3015(13)01458-7/fulltext">
                                        SOME FACTS
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.valueinhealthjournal.com/action/showPdf?pii=S1098-3015%2813%2901458-7">
                                        <svg
                                            fill="#3c85fb"
                                            height="20px"
                                            width="20px"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 231.306 231.306"
                                        >
                                            <path d="M229.548,67.743L163.563,1.757C162.438,0.632,160.912,0,159.32,0H40.747C18.279,0,0,18.279,0,40.747v149.813 c0,22.468,18.279,40.747,40.747,40.747h149.813c22.468,0,40.747-18.279,40.747-40.747V71.985 C231.306,70.394,230.673,68.868,229.548,67.743z M164.32,19.485l47.5,47.5h-47.5V19.485z M190.559,219.306H40.747 C24.896,219.306,12,206.41,12,190.559V40.747C12,24.896,24.896,12,40.747,12H152.32v60.985c0,3.313,2.687,6,6,6h60.985v111.574 C219.306,206.41,206.41,219.306,190.559,219.306z"></path>
                                            <path d="m103.826,52.399c-5.867-5.867-13.667-9.098-21.964-9.098s-16.097,3.231-21.964,9.098c-5.867,5.867-9.098,13.667-9.098,21.964 0,8.297 3.231,16.097 9.098,21.964l61.536,61.536c7.957,7.956 20.9,7.954 28.855,0 7.955-7.956 7.955-20.899 0-28.855l-60.928-60.926c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l60.927,60.927c3.276,3.276 3.276,8.608 0,11.884s-8.607,3.276-11.884,0l-61.536-61.535c-3.601-3.601-5.583-8.388-5.583-13.479 0-5.092 1.983-9.879 5.583-13.479 7.433-7.433 19.525-7.433 26.958,0l64.476,64.476c11.567,11.567 11.567,30.388 0,41.955-5.603,5.603-13.053,8.689-20.977,8.689s-15.374-3.086-20.977-8.689l-49.573-49.574c-2.343-2.343-6.143-2.343-8.485,0-2.343,2.343-2.343,6.142 0,8.485l49.573,49.573c7.87,7.87 18.333,12.204 29.462,12.204s21.593-4.334 29.462-12.204 12.204-18.333 12.204-29.463c0-11.129-4.334-21.593-12.204-29.462l-64.476-64.476z"></path>
                                        </svg>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                src={AimImage}
                                alt="Our Aim"
                                className="h-[350px] w-[350px] rounded-3xl"
                            />
                        </div>
                    </div>
                </div>

                {/* How we did it */}
                <div className="pt-3 px-[63px]">
                    <h1 className="text-4xl font-black">How we did it</h1>
                    <div className="text-xl mt-10">
                        The process is designed to be user-friendly, allowing individuals to
                        opt out at any point according to their preferences. Our primary
                        objective is to enhance the availability of medicine in the market.
                        We plan to achieve this by collecting unused and expired medication
                        from households and subsequently selling it to pharmaceutical
                        companies.
                    </div>

                    <div className="pt-6 flex-col justify-around">
                        <span className="text-4xl font-bold">
                            STEP-1 Tracking Counterfeit Medicine
                        </span>
                        <div className="flex justify-around pt-5">
                            <div>
                                <img
                                    src={FakeMed}
                                    alt="Fake Medicine"
                                    className="w-[350px] h-[200px] rounded-3xl"
                                />
                            </div>
                            <div className="w-[400px] pt-12 text-xl">
                                <p>
                                    We have an advanced tracking system for counterfeit medicine
                                    that helps us identify and track such products efficiently.
                                </p>
                                <div className="text-lg pb-7">
                                        Click on the button to identify
                                    </div>
                                    {/* <Button text="Check authenticity" /> */}
                                    <button onClick={handleScanner}
                                        type="button"
                                        class="rounded-md bg-sky-500 text-base px-4 py-2  font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Check authenticity
                                    </button>
                            </div>
                        </div>

                        <span className="text-4xl font-bold pt-8">
                            STEP-2 Reselling Unused Medication
                        </span>
                        <div className="flex justify-around pt-5">
                            <div>
                                <img
                                    src={ResellImg}
                                    alt="Reselling"
                                    className="w-[350px] h-[200px] rounded-3xl"
                                />
                            </div>
                            <div className="w-[400px] pt-12 text-xl">
                                <p>
                                    We resell unused medication, allowing for greater accessibility
                                    and affordability of medicines to those in need.
                                </p>

                                <p className="text-lg pb-7">Click on the button to know more</p>                                {/* <Button text="Resell the medicine" /> */}
                                <button  onClick={handleFormNavigation}
                                   type="button"
                                   class="rounded-md bg-sky-500 text-base px-4 py-2  font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                              >
                                     Resell the medicine
                                 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="callToAction bg-gray-100 py-16">
                <div className="text-center">
                    <h2 className="text-4xl font-bold">Take Action Now</h2>
                    <p className="mt-4 text-lg">
                        Join us in our mission to improve healthcare accessibility. <br />
                        <button
                            onClick={handleFormNavigation}
                            type="button"
                            className="mt-4 rounded-md bg-sky-500 text-base px-4 py-2 font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            Medicine Form
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
};

export default UserDashboard;
