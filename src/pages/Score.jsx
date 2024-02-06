import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import search from "../assets/img/security/search.svg";
export const Score = () => {
  return (
    <section className="flex gap-[30px] lg:block">
      <Aside active={6} />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Security Score
            </h1>

            <nav className="flex items-center">
              <a href="#" className="mr-[30px] lg:hidden">
                <img src={notify} alt="" />
              </a>
              <div className="flex items-center gap-[10px]">
                <div className="text-right sm:hidden">
                  <h1 className="text-[#f8e8e8] text-[18px] font-bold">
                    John Kit
                  </h1>
                  <p className="font-montserrat text-[#7F8083] text-[16px] font-medium">
                    Designation
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={avatar} alt="" />
                  <img src={arrow} alt="" />{" "}
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
          <div className="flex items-center w-[603px] h-[50px] bg-[#323233] px-[15px] rounded-[15px] mt-[25px] gap-[10px] md:w-full">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Search by name"
              className="flex-1 h-full bg-[transparent] outline-none border-0 font-montserrat text-[#fff] text-[16px] font-normal"
            />
          </div>
          <div className="gap-[25px] mt-[25px]">
            <div className="bg-[#323233] p-[25px] rounded-[30px] mt-[25px]">
              <div className="flex items-center justify-between mb-[15px]">
                <h1 className="text-[24px] font-bold text-[#fff]">
                  Security Leaderboard
                </h1>
              </div>
              <div className="overflow-auto">
                <table className="w-full min-w-[1000px]">
                  <thead className="bg-[#19191A]">
                    <tr>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        NAME
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        SECURITY SCORE
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        AUDITS
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        PRICE
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        CATEGORY
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Bitcoin
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>98.90%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[90%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        infrastructure
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Ethereum
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>67.55%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#EA6130] w-[67.55%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        defi
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Aptos
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>78.23%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[78.23%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        finance
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Ripple
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>88.75%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[88.75%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        crypto currency
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Litecoin
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>66.65%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#EA6130] w-[66.65%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        blockchain
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Cardano
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>98.90%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[90%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        technology
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Polkadot
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>56.55%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[56.55%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        smart contracts
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Chain-link
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>76.89%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[76.89%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        finance
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Stellar
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>53.90%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#EA6130] w-[53.90%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        meme coin
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Dogecoin
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>29.90%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#E73535] w-[29.90%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        privacy
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        EOS
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>77.67%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[77.67%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        blockchain
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        Moneron
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <p>98.90%</p>
                          <span className="bg-[#5D5E60] w-[204px] rounded-full h-[5px] block">
                            <span className="bg-[#0FC06B] w-[90%] rounded-full h-[5px] block"></span>
                          </span>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        5
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        $35,574.45
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium p-[15px]">
                        crypto currency
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
