import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import token1 from "../assets/img/token/token1.svg";
import token2 from "../assets/img/token/token2.svg";
import arrowToken from "../assets/img/token/arrow.svg";
import lock from "../assets/img/token/lock.svg";
import tokenMain from "../assets/img/token/token-main.svg";
import { useNavigate } from "react-router-dom";

export const TokenAudit = () => {
  const navigate = useNavigate();
  return (
    <section className="flex gap-[30px]">
      <Aside />
      <section className="py-[30px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold">Audit</h1>

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
          <div className="gap-[25px] mt-[25px]">
            <div className="bg-[#323233] rounded-[20px] p-[20px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-bold text-[#fff]">
                  Token Audit
                </h1>
                <img src={arrowToken} className="rotate-180" alt="" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div className="bg-[#5D5E60] p-[20px] rounded-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={token1} alt="" />
                    <h1 className="text-[24px] font-bold text-[#fff]">
                      Token Auditor
                    </h1>
                  </div>
                  <div className="p-[25px] bg-[#323233] rounded-[10px] mt-[15px] h-[286px] flex flex-col">
                    <textarea
                      className="flex-1 bg-[transparent] resize-none text-[#7F8083] font-montserrat text-[16px] outline-none"
                      name=""
                      placeholder="Enter contact address..."
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                    <button
                      onclick="location.href='./token-overview.html'"
                      className="text-[16px] font-montserrat font-normal w-[100px] h-[40px] rounded-[10px] text-[#fff] ml-auto btn-gradient"
                      onClick={(e) => {
                        navigate("/token-overview");
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <div className="bg-[#5D5E60] p-[20px] rounded-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={token2} alt="" />
                    <h1 className="text-[24px] font-bold text-[#fff]">
                      Audit Report
                    </h1>
                  </div>

                  <div className="p-[25px] bg-[#323233] rounded-[10px] mt-[15px] h-[286px] flex flex-col items-center justify-center">
                    <p className="text-[18px] font-normal text-[#808083] text-center mb-[10px]">
                      A Comprehensive audit report that includes a detailed
                      analysis of the code, a list of all the vulnerabilities
                      found, and recommendations on how to fix then.
                    </p>
                    <h1 className="text-[24px] font-bold text-[#fff] my-2 text-center">
                      ULLOCK FULL AUDIT REPORT WITH PREMIUM
                    </h1>
                    <button className="text-[16px] font-montserrat font-normal w-[125px] h-[40px] rounded-[10px] text-[#fff] flex items-center justify-center gap-[10px] btn-gradient">
                      <img src={lock} alt="" />
                      Locked
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#323233] rounded-[20px] p-[20px] flex flex-col items-center gap-2 mt-[25px]">
              <img src={tokenMain} alt="" />
              <p className="text-[22px] font-bold text-[#fff]">
                Input token audit to see informations
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
