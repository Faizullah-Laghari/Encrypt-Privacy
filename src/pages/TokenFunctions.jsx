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
                <h1 class="text-[24px] font-bold text-[#fff]">ENCR</h1>
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
                  class="font-montserrat text-[16px] rounded-[5px] w-[116px] h-[30px] btn-gradient text-[#fff] flex items-center justify-center"
                >
                  Functions
                </Link>
                <Link
                  to="/token"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center"
                >
                  Dependency
                </Link>
              </div>
            </div>

            <div class="bg-[#323233] p-[25px] rounded-[30px]">
              <div class="flex items-center justify-between mb-[15px]">
                <h1 class="text-[24px] font-bold text-[#fff]">
                  ENCR Monitoring (Refresh To See Correct Info)
                </h1>
                <div class="flex items-center w-[395px] h-[50px] bg-[#000207] px-[15px] rounded-[15px] gap-[10px]">
                  <img src={search} alt="" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    class="flex-1 h-full bg-[transparent] outline-none border-0 font-montserrat text-[#7F8083] placeholder:text-[#7F8083] text-[16px] font-normal"
                  />
                </div>
              </div>
              <table class="w-full">
                <thead class="bg-[#19191A]">
                  <tr>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      TYPE
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      NAME
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      MUTABILITY
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      VISIBILITY
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      Constructor
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <span class="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>Public</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      total Supply
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>External</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      balance OF
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>Public</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      get Deployment Start Time
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>External</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      get Deployment Start Time
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>Public</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      transfer
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]"></td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>External</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      allowance
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <span class="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>Public</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      approve
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <span class="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
                        <p>External</p>
                        <img src={warning} alt="" />
                      </div>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      func
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      transfer Form
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <span class="w-6 h-6 block rounded-full bg-[#EA6130]"></span>
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium p-[15px]">
                      <div class="inline-flex items-center px-[15px] py-[6px] bg-[#5D5E60] rounded-full justify-center gap-2">
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
      </section>
    </section>
  );
};
