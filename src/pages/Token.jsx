import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import arrowToken from "../assets/img/token/arrow.svg";
import encr from "../assets/img/token/encr.svg";
import token from "../assets/img/token/token.svg";
import { Link } from "react-router-dom";

export const Token = () => {
  return (
    <section className="flex gap-[30px]">
      <Aside />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Audit Details
            </h1>

            <nav className="flex items-center">
              <a href="#" className="mr-[30px] lg:hidden">
                <img src={notify} alt="" />
              </a>
              <div className="flex items-center gap-[10px]">
                <div className="text-right sm:hidden">
                  <h1 className="text-[#fff] text-[18px] font-bold">
                    John Kit
                  </h1>
                  <p className="font-montserrat text-[#7F8083] text-[16px] font-medium">
                    Designation
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={avatar} alt="" />
                  <img src={arrow} alt="" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fff"
                    className="w-6 h-6 hidden xl:block"
                    onClick={(e) => {
                      document
                        .querySelector(".aside-custom")
                        .classList.toggle("active");
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </nav>
          </header>
          <div class="gap-[25px] mt-[25px]">
            <div class="flex items-center justify-between bg-[#323233] rounded-[20px] p-[20px]">
              <h1 class="text-[24px] font-bold text-[#fff]">Token Audit</h1>
              <img src={arrowToken} alt="" />
            </div>
            <div className="flex items-center justify-between py-[20px] md:flex-col md:items-start md:gap-2">
              <div class="flex items-center gap-[15px]">
                <img src={encr} alt="" />
                <h1 class="text-[24px] font-bold text-[#fff]">
                  ENCR (Refresh To See Correct Info)
                </h1>
              </div>
              <div className="flex sm:flex-col items-center bg-[#000207] p-[5px] rounded-[10px] gap-[5px] sm:w-full">
                <Link
                  to="/token-overview"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]
                  rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Overview
                </Link>
                <Link
                  to="/token-code"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]   rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Code
                </Link>
                <Link
                  to="/token-functions"
                  class="font-montserrat text-[16px] rounded-[5px] w-[116px] h-[30px]  flex items-center justify-center  text-[#7F8083] bg-[#323233] sm:w-full"
                >
                  Functions
                </Link>
                <Link
                  to="/token"
                  class="font-montserrat text-[16px] btn-gradient text-[#fff]rounded-[5px] w-[116px] h-[30px] flex items-center text-[#fff] rounded-[5px] justify-center sm:w-full"
                >
                  Dependency
                </Link>
              </div>
            </div>

            <div class="flex items-center justify-center mt-[60px] mb-[60px]">
              <img src={token} alt="" />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
