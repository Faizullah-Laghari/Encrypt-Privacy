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
      <section className="py-[30px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold">Audit Details</h1>

            <nav className="flex items-center">
              <a href="#" className="mr-[30px]">
                <img src={notify} alt="" />
              </a>
              <div className="flex items-center gap-[10px]">
                <div className="text-right">
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
                </div>
              </div>
            </nav>
          </header>
          <div class="gap-[25px] mt-[25px]">
            <div class="flex items-center justify-between bg-[#323233] rounded-[20px] p-[20px]">
              <h1 class="text-[24px] font-bold text-[#fff]">Token Audit</h1>
              <img src={arrowToken} alt="" />
            </div>
            <div class="flex items-center justify-between py-[20px]">
              <div class="flex items-center gap-[15px]">
                <img src={encr} alt="" />
                <h1 class="text-[24px] font-bold text-[#fff]">
                  ENCR (Refresh To See Correct Info)
                </h1>
              </div>
              <div class="flex items-center bg-[#000207] p-[5px] rounded-[10px] gap-[5px]">
                <Link
                  to="/token-overview"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]
                  rounded-[5px] w-[116px] h-[30px] flex items-center justify-center "
                >
                  Overview
                </Link>
                <Link
                  to="/token-code"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]   rounded-[5px] w-[116px] h-[30px] flex items-center justify-center"
                >
                  Code
                </Link>
                <Link
                  to="/token-functions"
                  class="font-montserrat text-[16px] rounded-[5px] w-[116px] h-[30px]  flex items-center justify-center  text-[#7F8083] bg-[#323233] "
                >
                  Functions
                </Link>
                <Link
                  to="/token"
                  class="font-montserrat text-[16px] btn-gradient text-[#fff]rounded-[5px] w-[116px] h-[30px] flex items-center text-[#fff] rounded-[5px] justify-center"
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
