import React from "react";
import Image from "next/image";
import paymenthead from "./paymenthead.png"
import divider2 from "./divider2.png"
import divider1 from "./divider1.png"
import thumbups from "./thumbsup.png"

const cardData = [
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
    {
        title: "Upi",
        description:
            "Ensure ample liquidity for your exchange by implementing efficient trading algorithms and liquidity management solutions.",
    },
];

const cardData2 = [
    {
        title: "Right Payment Gateway",
        description:
            "Selecting the right payment gateway is crucial for your e-commerce success. Factors to consider when choosing a payment gateway include transaction fees, security, ease of integration, and the payment methods it supports.Our team of experts at Xettle can guide you through the selection process, ensuring that you choose the payment gateway that aligns best with your business goals and customer preferences.",
        link: "/",
    },
    {
        title: "Tailored Solutions",
        description:
            "We understand that every business is unique. Our solutions are customized to meet your specific needs and goals.",
        link: "/",
    },
];

const payment = () => {
    return (
        <div className="bg-[#F1F6FF]">
            <div className="flex flex-col justify-center items-center mb-20 lg:py-8">
                <h2 className="lg:text-[50px] md:text-[40px] text-[28px] font-bold flex items-center justify-center w-screen space-x-2 mt-10 ">
                    <p className="text-center">
                        <span className={`text-[#252BBF] mx-1 md:mx-3`}>Payment</span>
                        Gateways
                    </p>
                </h2>
                <div className="text-center max-w-[900px] w-[18rem] md:w-auto md:max-w-[1054px] space-y-4 lg:text-[18px] md:text-xl text-[12px] md:font-medium mx-auto lg:my-[20px] my-6">
                    <p className="">Welcome to the Payment Gateways at Xettle! We understand that the choice of payment gateways is a critical decision for any e-commerce business. This page provides an overview of the payment gateway options we offer to ensure secure and seamless transactions for your online store.</p>
                </div>
                <Image
                    src={paymenthead}
                    width="982"
                    height="464"
                    className="md:w-[70%] w-[70%] lg:w-[35%] mx-auto"
                    alt="Crypto Mobile Image"
                />
            </div>

            <div className="w-[90%] mx-auto sm:pt-[79px] sm:pb-[92px] pt-[10px] pb-[26px]">
                <div className="w-full sm:h-[92px] h-[45px] px-[19px] bg-[#4C9CFB33] rounded-2xl flex items-center justify-between">
                    <h5 className="lg:text-[20px] sm:text-xl font-bold ">Our Payment Gateway Options</h5>
                    <Image
                        src={divider2}
                        width={248}
                        height={248}
                        className="relative lg:bottom-10 bottom-6 lg:right-12 right-6 hidden sm:block sm:w-[200px] sm:h-[200px] lg:w-[248px] lg:h-[248px]"
                        alt="Why Choose Xettle"
                    />
                </div>

            </div>

            <p className="mx-auto my-5 text-center md:text-xl w-[80vw] font-[Inter] md:mb-20">
                At Xettle, we provide a range of payment gateway solutions tailored to
                meet your specific business needs. Here are some of the key payment
                gateway options available:
            </p>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 xl:gap-[30px] sm:gap-[20px]  mx-auto gap-10 mb-10 lg:px-[10%]">
                    {cardData &&
                        cardData.map((data, index) => {
                            return (
                                <div className="w-[95%] sm:w-auto mx-auto">
                                    <div className="bg-[#F8FBFF] xl:w-[auto] sm:w-auto space-y-10 p-10 md:h-auto cardbg font-[Inter]">
                                        <div className="lg:text-[20px] sm:text-[20px] text-[20px] font-bold flex">
                                            <Image src={thumbups} key={index} height={30} width={30} alt="thumbsup" />
                                            {data.title}
                                        </div>
                                        <h2 className="lg:text-[16px] text-[18px] md:text-[12px] sm:text-[16px]">
                                            {data.description}
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="w-[90%] mx-auto sm:pt-[79px] sm:pb-[92px] pt-[10px] pb-[26px]">
                    <div className="w-full mb-8 sm:h-[92px] h-[45px] px-[19px] bg-[#4C9CFB33] rounded-2xl flex items-center justify-between">
                        <h5 className="lg:text-[20px] sm:text-xl font-bold ">Choosing the Right Payment Gateway</h5>
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
                                        <div className="w-[96%] sm:w-auto mx-auto">
                                            <div className="bg-[#F8FBFF] xl:w-[500px] sm:w-auto space-y-10 p-10 md:h-[100%] cardbg font-[Inter]">
                                                <div className="lg:text-[20px] sm:text-[20px] text-[20px] font-bold flex">
                                                    <Image src={thumbups} key={index} height={30} width={30} alt="thumbsup" />
                                                    {data.title}
                                                </div>
                                                <h2 className="lg:text-[16px] text-[18px] md:text-[12px] sm:text-[16px]">
                                                    {data.description}
                                                </h2>
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
