import Image from "next/image";
import React from "react";
import "./fintech.css";
import hero from "./fintech-hero.png";
import herom from "./fintech-herom.png";
import cross from "./cross.png";
import tick from "./tick.png";
import aeps from "./aeps.png";
import recharge from "./recharge.png";
import pan from "./pan.png";
// import Contour from "@/Components/contour.jsx";

// import Fintechlottie from "@/Components/fintechlottie.jsx";

const fintech = () => {
  return (
    <main>
      <section
        id="hero"
        className="min-h-[90vh] w-[100vw] pt-[16%] px-[3%] flex flex-col items-center md:pt-[6%] md:px-[8%] pb-16"
      >
        <h1 className="text-[2.5rem] font-bold text-center">
          <span className="text-[#015dfd]">Fin-Tech</span> <br /> Softwares
        </h1>
        <div className="text-[#3c3d40]">
          <h3 className="text-center pt-[2rem] font-bold text-[1.2rem]">
            Unlock the Future of Finance with Fintech Software Solutions
          </h3>
        </div>
        <Image
          src={hero}
          width={1000}
          className="mx-auto pt-[2rem] hidden md:block"
          quality={100}
        />
        <Image
          src={herom}
          width={1000}
          className="mx-auto pt-[2rem] block md:hidden"
          quality={100}
        />
        <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] xl:m-[-10%]">
          {/* <Fintechlottie /> */}
        </div>
        <div className="text-[#3c3d40]">
          <p className="pt-[2rem] text-center font-medium">
            At Xettle, we're passionate about driving innovation in the world of
            finance. Our cutting-edge fintech software solutions empower
            businesses and individuals alike to navigate the digital financial
            landscape with ease, efficiency, and security.
          </p>
        </div>

        <button className="bg-[#015dfd] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
          Get Started
        </button>
      </section>
      <section
        id="services"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-16 lg:px-[8%] bg-transparent relative"
      >
        <div className="w-[100%] h-[100%] absolute z-[-1] top-0 left-0 invert">
          {/* <Contour /> */}
        </div>
        {/* <div className="absolute h-[100%] w-[100%] z-[1] opacity-90">
          <Image src={contour} width={2800} className="transform translate-y-[-10%] translate-x-[-5%] absolute"/>
        </div> */}
        <h1 className="text-[2rem] font-medium">
          <span className="text-[#015dfd]">Services</span>
        </h1>
        <div className="grid grid-cols-[1fr] gap-[1rem] pt-8 lg:grid-cols-5 xl:p-[5%]">
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] item1">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium ">AEPS</h2>
              <p className="text-0.92rem py-3 opacity-75">
                We design and develop cryptocurrency exchange platforms from the
                ground up, ensuring scalability, performance, and compliance
                with industry standards.
              </p>
              <button className="text-[#015EFE] text-[1.1rem]">
                Get Started
              </button>
            </div>
            <Image
              src={aeps}
              width={150}
              className="hidden object-contain md:block "
            />
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] lg:h-[100%] item2">
            <h2 className="text-[1.5rem] font-medium">BBPS</h2>
            <p className="py-3 opacity-75 ">
              Safeguard your users' assets with top-notch security features,
              including multi-layer authentication, cold storage, and real-time
              monitoring against threats.
            </p>
            <button className="text-[#015EFE] text-[1.1rem]">
              Get Started
            </button>
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] item3">
            <div>
              <h2 className="text-[1.5rem] font-medium">DMT</h2>
              <p className="py-3 opacity-75 ">
                Enhance user adoption with an intuitive, user-friendly interface
                that makes trading and managing assets a seamless experience.
              </p>
              <button className="text-[#015EFE] text-[1.1rem]">
                Get Started
              </button>
            </div>
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] item4">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium">Recharge</h2>
              <p className="py-3 opacity-75 ">
                Ensure ample liquidity for your exchange by implementing
                efficient trading algorithms and liquidity management solutions.
              </p>
              <button className="text-[#015EFE] text-[1.1rem]">
                Get Started
              </button>
            </div>
            <Image
              src={recharge}
              width={150}
              className="hidden object-contain md:block"
            />
          </div>
          <div className="rounded-2xl w-full h-fit backdrop-blur-sm py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] md:flex md:items-center md:justify-between lg:h-[100%] item5">
            <div className="md:w-[70%]">
              <h2 className="text-[1.5rem] font-medium">
                Aadhaar/ Pan Verification
              </h2>
              <p className="py-3 opacity-75 ">
                Stay on the right side of the law with compliance features that
                help you navigate the evolving regulatory landscape.
              </p>
              <button className="text-[#015EFE] text-[1.1rem]">
                Get Started
              </button>
            </div>
            <Image
              src={pan}
              width={130}
              className="hidden object-contain md:block"
            />
          </div>
        </div>
      </section>
      <section
        id="packages"
        className="min-h-[100vh] w-[100vw] px-[5%] pt-16 md:px-[8%]"
      >
        <h1 className="text-[2rem] font-medium">
          <span className="text-[#015dfd]">Packages</span>
        </h1>
        <div id="b2b">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">B2B</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                  Standard
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      AEPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer{" "}
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opening
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)] m-auto">
                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                  Premium
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      AEPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer{" "}
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opening
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="Reseller">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">Reseller</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <h2 className="text-[1.5rem] font-medium text-center opacity-70 pb-3">
                  Standard
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      EPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={cross} width={30} />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <h2 className="text-[1.5rem] font-medium text-center text-[#F6A122] pb-3">
                  Premium
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      EPS
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Account Opeaning
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Ofline Market Share
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      UPI Collection
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      PAN-UTI Software
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      NSDL Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Domestic Money Transfer
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="B2C" className="pb-16">
          <div>
            <h2 className="text-[1.5rem] font-medium pt-8">B2C</h2>
            <div className="grid grid-cols-1 gap-[1rem] pt-4 md:grid-cols-2">
              <div className="rounded-2xl w-full h-fit bg-[#F8FBFF] py-8 px-8 shadow-[0px_4px_35px_0px_rgba(0,_0,_0,_0.15)]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      BBPC
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Hotel Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Bus Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Flight Booking Portal
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                  <div className="flex items-center justify-between">
                    <span className="text-[1.2rem] leading-[200%] font-semibold">
                      Multi Recharge
                    </span>
                    <Image src={tick} width={35} />
                  </div>
                  <hr />
                </div>
              </div>
              <div className="items-center justify-center hidden md:flex md:flex-col">
                <button className="bg-[#015dfd] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
                  Purchase Now
                </button>
                <button className="bg-[#202020] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-evenly md:hidden">
            <button className="bg-[#015dfd] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
              Purchase Now
            </button>
            <button className="bg-[#202020] w-[8.5rem] h-[2.9rem] text-white mt-[2rem] rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default fintech;
