import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import arrowToken from "../assets/img/token/arrow.svg";
import encr from "../assets/img/token/encr.svg";
import search from "../assets/img/security/search.svg";
import warning from "../assets/img/token/warning.svg";
import { Link } from "react-router-dom";
export const TokenFunctions = () => {
  return (
    <section className="flex gap-[30px] lg:block">
      <Aside active={4} />
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
          <div className="gap-[25px] mt-[25px]">
            <div className="flex items-center justify-between bg-[#323233] rounded-[20px] p-[20px]">
              <h1 className="text-[24px] font-bold text-[#fff]">Token Audit</h1>
              <img src={arrowToken} alt="" />
            </div>
            <div className="flex items-center justify-between py-[20px] md:flex-col md:items-start md:gap-2">
              <div className="flex items-center gap-[15px]">
                <img src={encr} alt="" />
                <h1 className="text-[24px] font-bold text-[#fff]">ENCR</h1>
              </div>
              <div className="flex sm:flex-col items-center bg-[#000207] p-[5px] rounded-[10px] gap-[5px] sm:w-full">
                <Link
                  to="/token-overview"
                  className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]
                  sm:w-full
                rounded-[5px] w-[116px] h-[30px] flex items-center justify-center "
                >
                  Overview
                </Link>
                <Link
                  to="/token-code"
                  className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233]   rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Code
                </Link>
                <Link
                  to="/token-functions"
                  className="font-montserrat text-[16px] rounded-[5px] w-[116px] h-[30px] btn-gradient text-[#fff] flex items-center justify-center sm:w-full"
                >
                  Functions
                </Link>
                <Link
                  to="/token"
                  className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Dependency
                </Link>
              </div>
            </div>

            <div className="bg-[#323233] p-[25px] rounded-[30px]">
              <div className="flex items-center justify-between mb-[15px] lg:flex-col">
                <h1 className="text-[24px] font-bold text-[#fff]">
                  ENCR Monitoring (Refresh To See Correct Info)
                </h1>
                <div className="flex items-center w-[395px] h-[50px] bg-[#000207] px-[15px] rounded-[15px] gap-[10px] sm:w-full">
                  <img src={search} alt="" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="flex-1 h-full bg-[transparent] outline-none border-0 font-montserrat text-[#7F8083] placeholder:text-[#7F8083] text-[16px] font-normal"
                  />
                </div>
              </div>
              <div className="overflow-auto">
                <table className="w-full lg:min-w-[1000px]">
                  <thead className="bg-[#19191A]">
                    <tr>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        TYPE
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        NAME
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        MUTABILITY
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        VISIBILITY
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        Constructor
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <span className="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>Public</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        total Supply
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>External</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        balance OF
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>Public</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        get Deployment Start Time
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>External</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        get Deployment Start Time
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>Public</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        transfer
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>External</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        allowance
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <span className="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>Public</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        approve
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <span className="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>External</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        func
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        transfer Form
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <span className="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        <div className="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                          <p>Public</p>
                          <img src={warning} alt="" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
