"use client"
import React, { useState } from "react";
import image from "./mobile.png";
import exchange from "./exchange.png"
import liquidity from "./liquidity.png"
import rules from "./rules.png"
import Image from "next/image";

export default function Home() {
    const [cardOpen, setCardOpen] = useState(false);
    const [cardOpen1, setCardOpen1] = useState(false);
    const [cardOpen2, setCardOpen2] = useState(false);
    const [cardOpen3, setCardOpen3] = useState(false);
    const [cardOpen4, setCardOpen4] = useState(false);
    const [cardOpen5, setCardOpen5] = useState(false);
    const handleOpen = () => {
        setCardOpen(!cardOpen);
    };
    const handleOpen1 = () => {
        setCardOpen1(!cardOpen1);
    };
    const handleOpen2 = () => {
        setCardOpen2(!cardOpen2);
    };
    const handleOpen3 = () => {
        setCardOpen3(!cardOpen3);
    };
    const handleOpen4 = () => {
        setCardOpen4(!cardOpen4);
    };
    const handleOpen5 = () => {
        setCardOpen5(!cardOpen5);
    };

    return (
        <div className="bg-[#F1F6FF] font-Lexend">
            <div className="flex flex-col items-center justify-center mb-20">
                <h2 className="lg:text-[50px] md:text-[40px] text-[28px] font-bold flex items-center justify-center w-screen space-x-2 mt-10 lg:pt-8">
                    <p className="text-center">
                        <span className="text-[#BF7525] mx-1 md:mx-3">Crypto</span>
                        Exchange Development
                    </p>
                </h2>
                <div className="text-center max-w-[900px] w-[18rem] md:w-auto md:max-w-[1054px] space-y-4 lg:text-[24px] md:text-xl text-[12px] md:font-medium mx-auto lg:my-[32px] my-6">
                    <p className="">
                        Unlock the Future of Finance with Crypto Exchange Development
                    </p>
                    <p className="lg:text-[1rem]">
                        In the rapidly evolving world of digital assets, a robust and secure
                        cryptocurrency exchange is your gateway to success. Our expert team
                        specializes in crafting cutting-edge solutions for crypto exchange
                        development, tailored to your unique needs.
                    </p>
                </div>

                <Image
                    src={image}
                    className="md:w-[70%] lg:w-[40%] mx-auto"
                    alt="Crypto Mobile Image"
                />
            </div>
            <div>
                <h2 className="md:text-[40px] text-[24px] font-medium space-x-2 flex items-center xl:w-[80%] w-[90%] mx-auto py-[59px]">
                    <p className="text-[#2A26FE]">Services</p>
                    <p>Included</p>
                </h2>
                {/* mobile responsive cards start */}
                <div className="flex flex-col space-y-4">
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            Custom Exchange Solutions
                        </h2>
                        {cardOpen && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    We design and develop cryptocurrency exchange platforms from
                                    the ground up, ensuring scalability, performance, and
                                    compliance with industry standards.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen1}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            Safety and Security First
                        </h2>
                        {cardOpen1 && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Safeguard your users&apos; assets with top-notch security
                                    features, including multi-layer authentication, cold storage,
                                    and real-time monitoring against threats.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen2}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            User-Friendly Interface
                        </h2>
                        {cardOpen2 && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Enhance user adoption with an intuitive, user-friendly
                                    interface that makes trading and managing assets a seamless
                                    experience.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen3}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            Liquidity Management
                        </h2>
                        {cardOpen3 && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Ensure ample liquidity for your exchange by implementing
                                    efficient trading algorithms and liquidity management
                                    solutions.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen4}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            Regulatory Compliance
                        </h2>
                        {cardOpen4 && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Stay on the right side of the law with compliance features
                                    that help you navigate the evolving regulatory landscape.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                    <div
                        className="flex flex-col card w-[90vw] mx-auto md:hidden"
                        onClick={handleOpen5}
                    >
                        <h2 className="font-medium text-[15px] p-5">
                            24/7 Help and Support
                        </h2>
                        {cardOpen5 && (
                            <div className="h-fit  mx-[22px] my-[20px] space-y-[37px]">
                                <p className="text-[15px] font-medium opacity-75">
                                    Our dedicated support team is here around the clock to assist
                                    you and your users with any queries or issues.
                                </p>
                                <button className="text-[#015EFE] text-[18px]">
                                    Get Started
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                {/* mobile responsive card ends */}
                <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
                    <div className="flex card lg:w-[69%] w-[49%]">
                        <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                Custom Exchange Solutions
                            </h2>
                            <p className="max-w-[22rem] text-xl font-medium opacity-75">
                                We design and develop cryptocurrency exchange platforms from the
                                ground up, ensuring scalability, performance, and compliance
                                with industry standards.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                        <Image
                            src={exchange}
                            width="982"
                            height="464"
                            className="w-[40%] lg:flex hidden m-auto"
                            alt="Crypto Mobile Image"
                        />
                    </div>
                    <div className="card lg:w-[30%] w-[49%] h-full">
                        <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                Safety and Security First
                            </h2>
                            <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                Safeguard your users&apos;s assets with top-notch security
                                features, including multi-layer authentication, cold storage,
                                and real-time monitoring against threats.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[80%] w-[90%] mx-auto md:flex flex-row-reverse hidden justify-between mb-4">
                    <div className="flex card lg:w-[69%] w-[49%]">
                        <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                Custom Exchange Solutions
                            </h2>
                            <p className="max-w-[22rem] text-xl font-medium opacity-75">
                                We design and develop cryptocurrency exchange platforms from the
                                ground up, ensuring scalability, performance, and compliance
                                with industry standards.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                        <Image
                            src={liquidity}
                            width="982"
                            height="464"
                            className="w-[40%] lg:flex hidden m-auto"
                            alt="Crypto Mobile Image"
                        />
                    </div>
                    <div className="card lg:w-[30%] w-[49%] h-full">
                        <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                Safety and Security First
                            </h2>
                            <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                Safeguard your users&apos;s assets with top-notch security
                                features, including multi-layer authentication, cold storage,
                                and real-time monitoring against threats.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                    </div>
                </div>
                <div className="xl:w-[80%] w-[90%] mx-auto md:flex hidden justify-between mb-4">
                    <div className="flex card lg:w-[69%] w-[49%]">
                        <div className="h-[339px] xl:w-[50%] lg:w-[60%] mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-xs lg:max-w-[18rem]">
                                Custom Exchange Solutions
                            </h2>
                            <p className="max-w-[22rem] text-xl font-medium opacity-75">
                                We design and develop cryptocurrency exchange platforms from the
                                ground up, ensuring scalability, performance, and compliance
                                with industry standards.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                        <Image
                            src={rules}
                            width="982"
                            height="464"
                            className="w-[40%] lg:flex hidden m-auto"
                            alt="Crypto Mobile Image"
                        />
                    </div>
                    <div className="card lg:w-[30%] w-[49%] h-full">
                        <div className="h-[339px] w-full mx-[22px] my-[20px] space-y-6 lg:space-y-[37px]">
                            <h2 className="font-medium lg:text-2xl text-xl max-w-[14rem] lg:max-w-[16rem]">
                                Safety and Security First
                            </h2>
                            <p className="xl:max-w-[20rem] max-w-[18rem] text-xl font-medium opacity-75">
                                Safeguard your users&apos;s assets with top-notch security
                                features, including multi-layer authentication, cold storage,
                                and real-time monitoring against threats.
                            </p>
                            <button className="text-[#015EFE] text-lg">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-20 w-[80%] mx-auto">
                <h2 className="md:text-[50px] text-[38px] font-extralight pb-[20px] md:pb-[73px]">
                    FAQs
                </h2>
                <div className="grid gap-12 md:grid-cols-2 md:gap-36">
                    <div className="space-y-10">
                        <h2 className="md:text-3xl text-[20px] font-extralight">
                            How Secure is the exchange?
                        </h2>
                        <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem]">
                            Our cryptocurrency exchange platform is backed by top-of-the-line
                            security measures, ensuring the complete safety and
                            confidentiality of all transactions.
                        </p>
                    </div>
                    <div className="mx-auto space-y-10">
                        <h2 className="md:text-3xl text-[20px] font-extralight">
                            Is your platform user-friendly?
                        </h2>
                        <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem]">
                            Absolutely, our platform is designed with user experience in mind.
                            Both beginners and experienced traders will find navigating our
                            exchange platform a breeze.
                        </p>
                    </div>
                    <div className="space-y-10">
                        <h2 className="md:text-3xl text-[20px] font-extralight">
                            Can I customize my exchange?
                        </h2>
                        <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem]">
                            Yes, we offer tailor-made solutions for various business
                            requirements. Our team will work closely with you to create a
                            customized exchange platform that fits your needs.
                        </p>
                    </div>
                    <div className="mx-auto space-y-10">
                        <h2 className="md:text-3xl text-[20px] font-extralight">
                            What makes your services unique?
                        </h2>
                        <p className="md:text-xxl text-[15px] font-extralight max-w-[26rem]">
                            We pride ourselves on our innovation and expertise –combining
                            advanced technology with impeccable service, we deliver a high
                            performing and secure cryptocurrency exchange platform that sets
                            you apart from the competition.
                        </p>
                    </div>
                </div>
            </div>
            <div className="md:pt-36 py-20 text-center flex flex-col justify-center items-center space-y-10 md:space-y-[31px]">
                <h2 className="md:text-[36px] text-[24px]">Contact Us</h2>
                <p className="md:text-[20px] text-[15px] font-base max-w-[18rem] md:max-w-2xl">
                    Ready to elevate your crypto trading experience with our
                    state-of-the-art platform? Contact us today and let&apos;s make it
                    happen.
                </p>
                <button className="bg btn">Contact Us</button>
            </div>
        </div>
    );
}
