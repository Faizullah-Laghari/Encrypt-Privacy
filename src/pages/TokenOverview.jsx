import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import arrowToken from "../assets/img/token/arrow.svg";
import encr from "../assets/img/token/encr.svg";
import supply from "../assets/img/token/supply.svg";
import holder from "../assets/img/token/holder.svg";
import price from "../assets/img/token/price.svg";
import market from "../assets/img/token/market.svg";
import network from "../assets/img/token/network.svg";
import { Link } from "react-router-dom";

export const TokenOverview = () => {
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
              <a href="/" className="mr-[30px] lg:hidden">
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
            <div class="flex items-center justify-between py-[20px] md:flex-col md:items-start md:gap-2">
              <div class="flex items-center gap-[15px]">
                <img src={encr} alt="" />
                <h1 class="text-[24px] font-bold text-[#fff]">ENCR</h1>
              </div>
              <div class="flex sm:flex-col items-center bg-[#000207] p-[5px] rounded-[10px] gap-[5px] sm:w-full">
                <Link
                  to="/token-overview"
                  class="font-montserrat text-[16px] text-[#fff] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center btn-gradient sm:w-full"
                >
                  Overview
                </Link>
                <Link
                  to="/token-code"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Code
                </Link>
                <Link
                  to="/token-functions"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Functions
                </Link>
                <Link
                  to="/token"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center sm:w-full"
                >
                  Dependency
                </Link>
              </div>
            </div>

            <div class="grid grid-cols-5 gap-2 lg:grid-cols-1">
              <div class="bg-[#323233] p-[15px] rounded-[30px]">
                <div class="flex items-center justify-between">
                  <h1 class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    Current Price
                  </h1>
                  <img src={price} alt="" />
                </div>
                <p class="text-[30px] text-[#fff] font-bold mt-[10px]">$1.01</p>
              </div>
              <div class="bg-[#323233] p-[15px] rounded-[30px]">
                <div class="flex items-center justify-between">
                  <h1 class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    Supply
                  </h1>
                  <img src={supply} alt="" />
                </div>
                <p class="text-[30px] text-[#fff] font-bold mt-[10px]">
                  100{" "}
                  <span class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    million
                  </span>
                </p>
              </div>
              <div class="bg-[#323233] p-[15px] rounded-[30px]">
                <div class="flex items-center justify-between">
                  <h1 class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    Market Cap
                  </h1>
                  <img src={market} alt="" />
                </div>
                <p class="text-[30px] text-[#fff] font-bold mt-[10px]">
                  $1.01{" "}
                  <span class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    million
                  </span>
                </p>
              </div>
              <div class="bg-[#323233] p-[15px] rounded-[30px]">
                <div class="flex items-center justify-between">
                  <h1 class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    Holders
                  </h1>
                  <img src={holder} alt="" />
                </div>
                <p class="text-[30px] text-[#fff] font-bold mt-[10px]">550</p>
              </div>
              <div class="bg-[#323233] p-[15px] rounded-[30px]">
                <div class="flex items-center justify-between">
                  <h1 class="text-[20px] font-montserrat font-medium text-[#7F8083]">
                    Network
                  </h1>
                  <img src={network} alt="" />
                </div>
                <p class="text-[30px] text-[#fff] font-bold mt-[10px]">
                  Ethereum
                </p>
              </div>
            </div>

            <div class="grid grid-cols-[1fr_320px] gap-[25px] mt-[25px] lg:grid-cols-1">
              <div class="bg-[#323233] p-[25px] rounded-[30px]">
                <h1 class="text-[24px] font-bold text-[#fff]">Audit Details</h1>
                <ul class="mt-[20px] flex flex-col gap-8 sm:gap-2">
                  <li class="flex items-center gap-4">
                    <div class="px-[12px] py-[10px] bg-[#19191A] flex items-center justify-between rounded-tl-lg rounded-bl-lg min-w-[162px]  sm:w-full">
                      <h1 class="text-[20px] font-montserrat text-[#fff]">
                        Health
                      </h1>
                      <p class="text-[20px] font-montserrat font-normal text-[#7F8083]">
                        90%
                      </p>
                    </div>
                    <div class="h-[50px] flex-1 bg-[#19191A] rounded-tr-lg rounded-br-lg sm:hidden">
                      <span class="h-[50px] w-[90%] bg-liear2 block rounded-tr-lg rounded-br-lg"></span>
                    </div>
                  </li>
                  <li class="flex items-center gap-4">
                    <div class="px-[12px] py-[10px] bg-[#19191A] flex items-center justify-between rounded-tl-lg rounded-bl-lg min-w-[162px]  sm:w-full">
                      <h1 class="text-[20px] font-montserrat text-[#fff]">
                        Serenity
                      </h1>
                      <p class="text-[20px] font-montserrat font-normal text-[#7F8083]">
                        97%
                      </p>
                    </div>
                    <div class="h-[50px] flex-1 bg-[#19191A] rounded-tr-lg rounded-br-lg sm:hidden">
                      <span class="h-[50px] bg-liear2 w-[97%] block rounded-tr-lg rounded-br-lg"></span>
                    </div>
                  </li>
                  <li class="flex items-center gap-4">
                    <div class="px-[12px] py-[10px] bg-[#19191A] flex items-center justify-between rounded-tl-lg rounded-bl-lg min-w-[162px]  sm:w-full">
                      <h1 class="text-[20px] font-montserrat text-[#fff]">
                        Strength
                      </h1>
                      <p class="text-[20px] font-montserrat font-normal text-[#7F8083]">
                        99%
                      </p>
                    </div>
                    <div class="h-[50px] flex-1 bg-[#19191A] rounded-tr-lg rounded-br-lg sm:hidden">
                      <span class="h-[50px] bg-liear2 w-[99%] block rounded-tr-lg rounded-br-lg"></span>
                    </div>
                  </li>
                  <li class="flex items-center gap-4">
                    <div class="px-[12px] py-[10px] bg-[#19191A] flex items-center justify-between rounded-tl-lg rounded-bl-lg min-w-[162px] sm:w-full">
                      <h1 class="text-[20px] font-montserrat text-[#fff]">
                        Stability
                      </h1>
                      <p class="text-[20px] font-montserrat font-normal text-[#7F8083]">
                        100%
                      </p>
                    </div>
                    <div class="h-[50px] flex-1 bg-[#19191A] rounded-tr-lg rounded-br-lg sm:hidden">
                      <span class="h-[50px] bg-liear2 w-[100%] block rounded-tr-lg rounded-br-lg"></span>
                    </div>
                  </li>
                  <li class="flex items-center gap-4">
                    <div class="px-[12px] py-[10px] bg-[#19191A] flex items-center justify-between rounded-tl-lg rounded-bl-lg min-w-[162px]  sm:w-full">
                      <h1 class="text-[20px] font-montserrat text-[#fff]">
                        Trust
                      </h1>
                      <p class="text-[20px] font-montserrat font-normal text-[#7F8083]">
                        75%
                      </p>
                    </div>
                    <div class="h-[50px] flex-1 bg-[#19191A] rounded-tr-lg rounded-br-lg sm:hidden">
                      <span class="h-[50px] bg-liear2 w-[75%] block rounded-tr-lg rounded-br-lg"></span>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bg-[#323233] p-[25px] rounded-[30px]">
                <h1 class="text-[24px] font-bold text-[#fff]">ENCR</h1>
                <p class="font-montserrat text-[20px] text-[#fff] font-medium my-[19px]">
                  Contract{" "}
                  <span class="text-[15px] font-normal">Ox6dea...c54d</span>
                </p>
                <div class="flex items-center justify-between">
                  <p class="text-[20px] text-[#fff] font-bold">Verified</p>
                  <div class="flex items-center justify-between gap-2">
                    <button class="text-[16px] font-montserrat font-normal w-[68px] h-[36px] rounded-[10px] text-[#fff] btn-gradient">
                      Yes
                    </button>
                    <button class="text-[16px] font-montserrat font-normal w-[68px] h-[36px] rounded-[10px] text-[#7F8083] bg-[#5D5E60]">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
