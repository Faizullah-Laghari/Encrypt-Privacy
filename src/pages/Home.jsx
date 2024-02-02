import React from "react";
import { Aside } from "../components/Aside";
import world from "../assets/img/common/world.svg";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

// dashboard
import tilt from "../assets/img/dashboard/tilt.svg";
import arrowBtn from "../assets/img/dashboard/arrow-btn.svg";
import arrowRight from "../assets/img/dashboard/arrow-right.svg";
import order from "../assets/img/dashboard/order.svg";
import search from "../assets/img/dashboard/search.svg";
import teatherTable from "../assets/img/dashboard/teather-table.svg";
import adaTable from "../assets/img/dashboard/ada-table.svg";
import btcTable from "../assets/img/dashboard/btc-table.svg";
import ethTable from "../assets/img/dashboard/eth-table.svg";
import recomendedTable from "../assets/img/dashboard/recomended-icons.svg";

import teather from "../assets/img/dashboard/teather.svg";
import arrowDashboard from "../assets/img/dashboard/arrow.svg";
import btc from "../assets/img/dashboard/btc.svg";
import eth from "../assets/img/dashboard/eth.svg";
import ada from "../assets/img/dashboard/ada.svg";
import sql from "../assets/img/dashboard/sql.svg";

export const Home = () => {
  return (
    <section className="flex gap-[30px]">
      <Aside active={1} />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Dashboard
            </h1>
            <div className="flex items-center lg:hidden">
              <div className="pr-[30px]">
                <h1 className="text-[20px] font-medium text-[#fff]">Use ID</h1>
                <p className="text-[16px] font-medium font-montserrat text-[#7F8083]">
                  1172048240
                </p>
              </div>
              <div className="px-[30px] border-x-[1px] border-x-[#323233]">
                <h1 className="text-[20px] font-medium text-[#fff]">
                  Vip Level
                </h1>
                <p className="text-[16px] font-medium font-montserrat text-[#7F8083]">
                  Regular User
                </p>
              </div>
              <div className="pl-[30px]">
                <h1 className="text-[20px] font-medium text-[#fff]">
                  User Type
                </h1>
                <p className="text-[16px] font-medium font-montserrat text-[#7F8083]">
                  Personal
                </p>
              </div>
            </div>
            <nav className="flex items-center ">
              <a href="#" className="mr-[30px] sm:hidden">
                <img src={world} alt="" />
              </a>
              <a href="#" className="mr-[30px] sm:hidden">
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

          <div className="grid grid-cols-[1fr_.5fr_.8fr] gap-[25px] mt-10 lg:grid-cols-[1fr]">
            <div className="bg-[#323233] p-[25px] rounded-[30px]">
              <h1 className="text-[24px] font-bold text-[#fff]">
                Estimated Balance
              </h1>

              <div className="my-[30px] sm:mb-0 flex items-center gap-[15px] sm:flex-col sm:items-start">
                <h1 className="text-[30px] sm:!text-[16px] font-bold text-[#fff] 3xl:text-[25px]">
                  0.812313 BTC
                </h1>
                <img src={arrowBtn} alt="" />
                <p className="flex items-center text-[30px] 3xl:text-[25px] font-bold text-[#7F8083] sm:!text-[16px]">
                  <img src={tilt} alt="" />
                  $20,234
                </p>
              </div>

              <div className="inline-flex items-center bg-[#19191A] p-[5px] rounded-[10px] gap-[5px] sm:hidden">
                <button className="font-montserrat text-[16px] text-[#fff] rounded-[5px] w-[116px] h-[30px] btn-gradient">
                  Deposit
                </button>
                <button className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px]">
                  Withdraw
                </button>
                <button className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px]">
                  Buy Crypto
                </button>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[24px] gap-[15px] font-bold text-[#fff] mb-[15px] flex items-center">
                Services
                <a href="#">
                  <img src={arrowRight} alt="" />
                </a>
              </h1>
              <div className="bg-[#323233] p-[25px] rounded-[30px] flex-1">
                <div className="items-center h-full flex flex-col justify-between">
                  <img src={order} alt="" />
                  <h1 className="text-[20px] font-medium text-[#fff]">
                    Open Orders
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-[24px] gap-[15px] font-bold text-[#fff] mb-[15px]">
                Explore
              </h1>
              <div className="bg-[#323233] px-[15px] rounded-xl h-[50px] flex">
                <input
                  type="text"
                  placeholder="Coin, Function"
                  className="flex-1 h-[50px] w-full bg-[transparent] text-[16px] font-montserrat font-normal outline-none border-none text-[#fff]"
                />
                <img src={search} alt="" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-[25px] mt-10 lg:grid-cols-1">
            <div className="bg-[#323233] p-[25px] rounded-[30px] col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-[15px]">
                <h1 className="text-[24px] font-bold text-[#fff]">Markets</h1>
                <div className="flex items-center bg-[#19191A] p-[5px] rounded-[10px] gap-[5px] lgmed:hidden">
                  <button className="font-montserrat text-[16px] text-[#fff] rounded-[5px] w-[116px] h-[30px] btn-gradient">
                    Holding
                  </button>
                  <button className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px]">
                    Hot
                  </button>
                  <button className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px]">
                    Favorite
                  </button>
                  <button className="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px]">
                    Top Gainers
                  </button>
                </div>
              </div>
              <div className="overflow-auto">
                <table className="w-full min-w-[700px]">
                  <thead className="bg-[#19191A]">
                    <tr>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        NAME
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        AMOUNT
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        PRICE
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        24H CHANGE
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <img src={teatherTable} alt="" />
                          <div>
                            <h1 className="text-[16px] font-medium text-[#fff]">
                              Tether (USDT)
                            </h1>
                            <p className="text-[14px] font-montserrat text-[#7F8083]">
                              Apr
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        20.234
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        1.00
                      </td>
                      <td className="font-montserrat text-[#0FC06B] font-medium uppercase p-[15px]">
                        +0.00%
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <img src={adaTable} alt="" />
                          <div>
                            <h1 className="text-[16px] font-medium text-[#fff]">
                              Cardano (ADA)
                            </h1>
                            <p className="text-[14px] font-montserrat text-[#7F8083]">
                              Apr
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        20.234
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        0.5008
                      </td>
                      <td className="font-montserrat text-[#E73535] font-medium uppercase p-[15px]">
                        -4.73%
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <img src={btcTable} alt="" />
                          <div>
                            <h1 className="text-[16px] font-medium text-[#fff]">
                              Bitcoin (BTC)
                            </h1>
                            <p className="text-[14px] font-montserrat text-[#7F8083]">
                              Apr
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        20.234
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        43,930.85
                      </td>
                      <td className="font-montserrat text-[#0FC06B] font-medium uppercase p-[15px]">
                        +3.28%
                      </td>
                    </tr>
                    <tr className="border-b-[1px] border-b-[#212224]">
                      <td className="p-[15px]">
                        <div className="flex items-center gap-[10px]">
                          <img src={ethTable} alt="" />
                          <div>
                            <h1 className="text-[16px] font-medium text-[#fff]">
                              Ethereum (ETH)
                            </h1>
                            <p className="text-[14px] font-montserrat text-[#7F8083]">
                              Apr
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        20.234
                      </td>
                      <td className="font-montserrat text-[#fff] font-medium uppercase p-[15px]">
                        2211.50
                      </td>
                      <td className="font-montserrat text-[#E73535] font-medium uppercase p-[15px]">
                        -3.13%
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[24px] font-bold text-[#fff] mb-[20px]">
                Recommended for you
              </h1>
              <div className="bg-[#323233] rounded-xl p-[25px] flex-1">
                <div className="flex flex-col justify-center items-start h-full">
                  <img src={recomendedTable} alt="" />
                  <p className="w-[252px] text-[20px] font-medium text-[#fff] mx-auto mt-[40px] mb-[40px]">
                    Convert The easiest way to trade crypto at 0 fees
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 3xl:grid-cols-4 gap-[25px] mt-10 lg:!grid-cols-2 sm:flex sm:flex-col">
            <div className="bg-[#fff] rounded-xl p-[15px]">
              <div className="flex items-center justify-between mb-[20px]">
                <div>
                  <h1 className="text-[20px] font-bold text-[#323233]">
                    Tether (USDT)
                  </h1>
                  <p className="font-montserrat text-[20px] font-medium text-[#323233]">
                    Apr
                  </p>
                </div>
                <img src={teather} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-montserrat font-medium text-[16px] text-[#323233]">
                  0,87% - 144,97%
                </h1>
                <a href="#">
                  <img src={arrowDashboard} alt="" />
                </a>
              </div>
            </div>

            <div className="bg-[#fff] rounded-xl p-[15px]">
              <div className="flex items-center justify-between mb-[20px]">
                <div>
                  <h1 className="text-[20px] font-bold text-[#323233]">
                    Bitcoin (BTC)
                  </h1>
                  <p className="font-montserrat text-[20px] font-medium text-[#323233]">
                    Apr
                  </p>
                </div>
                <img src={btc} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-montserrat font-medium text-[16px] text-[#323233]">
                  0,44% - 51,27%
                </h1>
                <a href="#">
                  <img src={arrowDashboard} alt="" />
                </a>
              </div>
            </div>

            <div className="bg-[#fff] rounded-xl p-[15px]">
              <div className="flex items-center justify-between mb-[20px]">
                <div>
                  <h1 className="text-[20px] font-bold text-[#323233]">
                    Ethereum (ETH)
                  </h1>
                  <p className="font-montserrat text-[20px] font-medium text-[#323233]">
                    Apr
                  </p>
                </div>
                <img src={eth} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-montserrat font-medium text-[16px] text-[#323233]">
                  0,64% - 114,97%
                </h1>
                <a href="#">
                  <img src={arrowDashboard} alt="" />
                </a>
              </div>
            </div>

            <div className="bg-[#fff] rounded-xl p-[15px]">
              <div className="flex items-center justify-between mb-[20px]">
                <div>
                  <h1 className="text-[20px] font-bold text-[#323233]">
                    Cardano (ADA)
                  </h1>
                  <p className="font-montserrat text-[20px] font-medium text-[#323233]">
                    Apr
                  </p>
                </div>
                <img src={ada} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-montserrat font-medium text-[16px] text-[#323233]">
                  0,68% - 124,97%
                </h1>
                <a href="#">
                  <img src={arrowDashboard} alt="" />
                </a>
              </div>
            </div>
            <div className="bg-[#fff] rounded-xl p-[15px]">
              <div className="flex items-center justify-between mb-[20px]">
                <div>
                  <h1 className="text-[20px] font-bold text-[#323233]">
                    Solana (SOL)
                  </h1>
                  <p className="font-montserrat text-[20px] font-medium text-[#323233]">
                    Apr
                  </p>
                </div>
                <img src={sql} alt="" />
              </div>
              <div className="flex items-center justify-between">
                <h1 className="font-montserrat font-medium text-[16px] text-[#323233]">
                  0,44% - 132,97%
                </h1>
                <a href="#">
                  <img src={arrowDashboard} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
