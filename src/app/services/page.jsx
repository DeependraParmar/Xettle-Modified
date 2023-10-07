import React from "react";
import Image from "next/image";
import ecommerce from "./ecommerce.png"
import divider2 from "./divider2.png"
import divider1 from "./divider1.png"
import Link from "next/link";

const cardData = [
    {
        number: "1",
        title: "Custom Website Development",
        description:
            "Transform your e-commerce vision into reality with our custom website development services. We design and build online stores that not only look great but also offer seamless user experiences. Our solutions are scalable, responsive, and optimized for maximum performance.",
    },
    {
        number: "2",
        title: "E-commerce Platform Integration",
        description:
            "With the rise of mobile shopping, having a mobile-responsive e-commerce site is crucial. We ensure that your online store is accessible and user-friendly on all devices, providing a consistent shopping experience for your customers.",
    },
    {
        number: "3",
        title: "Mobile Commerce (M-commerce)",
        description:
            "With the rise of mobile shopping, having a mobile-responsive e-commerce site is crucial. We ensure that your online store is accessible and user-friendly on all devices, providing a consistent shopping experience for your customers.",
    },
    {
        number: "4",
        title: "Payment Gateway Integration",
        description:
            "Simplify the checkout process and offer multiple payment options to your customers. Our experts can integrate secure and reliable payment gateways, ensuring safe transactions and building trust with your audience.",
    },
    {
        number: "5",
        title: "E-commerce SEO Services",
        description:
            "Drive organic traffic to your online store with our e-commerce SEO services. We optimize your product listings, meta tags, and content to improve search engine rankings, helping you reach a wider audience.",
    },
    {
        number: "6",
        title: "E-commerce Security",
        description:
            "Security is paramount in e-commerce. We implement robust security measures to protect your customers' data and ensure the integrity of your online store, reducing the risk of cyber threats and fraud.",
    },
];

const cardData2 = [
    {
        title: "Experienced Team",
        description:
            "Our team of seasoned developers and designers has a proven track record in e-commerce development.",
        link: "/",
    },
    {
        title: "Tailored Solutions",
        description:
            "We understand that every business is unique. Our solutions are customized to meet your specific needs and goals.",
        link: "/",
    },
    {
        title: "Scalability",
        description:
            "Our e-commerce websites are built to grow with your business. You won't outgrow our solutions.",
        link: "/",
    },
    {
        title: "On-Time Delivery",
        description:
            "We are committed to delivering your e-commerce project on time and within budget.",
        link: "/",
    },
];

const payment = () => {
    return (
        <div className="bg-[#F1F6FF]">
            <div className="flex flex-col justify-center items-center mb-20 lg:py-8 py-[1rem]">
                <h2 className="lg:text-[50px] md:text-[40px] text-[28px] font-bold flex items-center justify-center w-screen space-x-2 mt-10 ">
                    <p className="text-center">
                        <span className={`text-[#252BBF] mx-1 md:mx-3`}>E-Commerce</span>
                        Softwares
                    </p>
                </h2>
                <div className="text-center max-w-[900px] w-[18rem] md:w-auto md:max-w-[1054px] space-y-4 lg:text-[18px] md:text-xl text-[12px] md:font-medium mx-auto lg:my-[20px] my-6">
                    <p className="">Unlock the Future of Shopping with E-Commerce Software Solutions. <br />

                        Welcome to Xettle's E-commerce Development Services! At Xettle, we specialize in creating robust and user-friendly e-commerce solutions tailored to your unique business needs. Whether you're launching a new online store or looking to enhance an existing one, our team of experts is here to assist you every step of the way.</p>
                </div>
                <Image
                    src={ecommerce}
                    width="982"
                    height="464"
                    className="md:w-[70%] w-[70%] lg:w-[35%] mx-auto"
                    alt="Crypto Mobile Image"
                />
            </div>

            <div className="w-[90%] mx-auto sm:pt-[79px] sm:pb-[92px] pt-[10px] pb-[26px]">
                <div className="w-full sm:h-[92px] py-3 px-[19px] bg-[#4C9CFB33] rounded-2xl flex items-center justify-between">
                    <h5 className="lg:text-[20px] text-[18px] sm:text-xl font-bold ">Our E-commerce Development Services</h5>
                    <Image
                        src={divider2}
                        width={248}
                        height={248}
                        className="relative lg:bottom-10 bottom-6 lg:right-12 right-6 hidden sm:block sm:w-[200px] sm:h-[200px] lg:w-[248px] lg:h-[248px]"
                        alt="Why Choose Xettle"
                    />
                </div>

            </div>
            <div className="flex flex-col items-center justify-center px-[1rem]">
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:gap-[30px] sm:gap-[20px]  mx-auto gap-10 mb-10 lg:px-[10%]">
                    {cardData &&
                        cardData.map((data, index) => {
                            return (
                                <div className="lg:space-y-5 sm:space-y-4 space-y-5 p-5 xl:w-[auto] sm:h-[100%] sm:w-auto mx-auto cardservice ">
                                    <h2 className="text-[#2A282F] xl:text-[24px] lg:text-[22px] sm:text-[20px] text-[18px] font-semibold">
                                        {data.title}
                                    </h2>
                                    <p className="lg:text-[18px] sm:text-[14px] text-[14px]">{data.description}</p>
                                </div>
                            );
                        })}
                </div>
                <div className="w-[90%] mx-auto sm:pt-[79px] sm:pb-[92px] pt-[10px] pb-[26px]">
                    <div className="w-full mb-8 sm:h-[92px] py-3 px-[19px] bg-[#4C9CFB33] rounded-2xl flex items-center justify-between">
                        <h5 className="lg:text-[20px] text-[18px] sm:text-xl font-bold ">Why Choose Xettle?</h5>
                        <Image
                            src={divider1}
                            width={248}
                            height={248}
                            className="relative lg:bottom-10 bottom-6 lg:right-12 right-6 hidden sm:block sm:w-[200px] sm:h-[200px] lg:w-[248px] lg:h-[248px]"
                            alt="Why Choose Xettle"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-[30px] sm:gap-[20px] sm:w-[78%] w-[90%] mx-auto gap-10 mb-10 lg:py-12">
                            {cardData2 &&
                                cardData2.map((data, index) => {
                                    return (
                                        <div className="w-[auto] sm:w-auto mx-auto">
                                            <div className="bg-[#F8FBFF] xl:w-[auto] sm:w-auto space-y-10 p-6 md:h-[100%] cardbg font-[Inter]">
                                                <div className="lg:text-[24px] sm:text-[20px] text-[18px] font-bold">
                                                    {data.title}
                                                </div>
                                                <h2 className="text-[14px] lg:text-[20px] sm:text-[16px]">
                                                    {data.description}
                                                </h2>
                                                <div className="my-2">
                                                    <Link href={data.link} className="text-[#015EFE] ">
                                                        Get Started
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                    <div className="py-10 text-center flex flex-col justify-center items-center space-y-10 md:space-y-[31px]">
                        <h2 className="md:text-[36px] text-[24px]">Contact Us</h2>
                        <p className="md:text-[20px] text-[15px] font-base max-w-[18rem] md:max-w-2xl">
                            Ready to elevate your crypto trading experience with our
                            state-of-the-art platform? Contact us today and let&apos;s make it
                            happen.
                        </p>
                        <button className="bg btn">Contact Us</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default payment;
