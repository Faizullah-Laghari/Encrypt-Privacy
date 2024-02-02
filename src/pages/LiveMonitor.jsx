import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

export const LiveMonitor = () => {
  return (
    <section className="flex gap-[30px] lg:block">
      <Aside active={5} />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Live Monitoring
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

          <div class="bg-[#323233] p-[25px] rounded-[30px] mt-[25px]">
            <div class="flex items-center justify-between mb-[15px]">
              <h1 class="text-[24px] font-bold text-[#fff]">Markets</h1>
            </div>
            <div className="overflow-auto">
              <table class="w-full min-w-[1000px]">
                <thead class="bg-[#19191A]">
                  <tr>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      TOKEN
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      PRICE
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      CHANGE
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      LIQUIDITY
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      CREATED
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      AUDIT
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Bitcoin (BTC)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $44,038.40
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      0.25%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Jan 2009
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Ethereum (ETH)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $2,229.98
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      0.69%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Jul 2015
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Binance Coin (BNB)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $305.50
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      1.27%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Jul 2017
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Solana (SOL)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $93.93
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      5.14%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Apr 2020
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Cardano (ADA)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $0.567
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      4.21%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Sep 2017
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Ripple (XRP)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $0.41
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      0.59%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Jun 2012
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Polkadot (DOT)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $6.30
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      1.65%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      May 2020
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Encrypt (ENCR)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $1.01
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      26.65%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      139.04K
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Dec 2023
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                  <tr class="border-b-[1px] border-b-[#212224]">
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Chainlink (LINK)
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      $6.70
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      0.11%
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      View Liquidity
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      Jun 2017
                    </td>
                    <td class="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                      <a
                        href="#"
                        class="font-montserrat h-[32px] w-[70px] bg-[#5D5E60] flex items-center justify-center rounded-full text-[16px] font-medium"
                      >
                        View
                      </a>
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
