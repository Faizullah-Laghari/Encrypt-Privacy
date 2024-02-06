import React, { useState } from "react";
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
    const [data, setData] = useState('') 
  const [address, setAddress] = useState(''); // State to store textarea value
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const apiUrl = `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${address}`;

    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(Object.values(jsonData.result)[0])
  

      // navigate("/token-overview"); // Navigate after the API call
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <section className="flex gap-[30px]">
      <Aside active={4} />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Audit
            </h1>

            <nav className="flex items-center">
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
          <div className="gap-[25px] mt-[25px]">
            <div className="bg-[#323233] rounded-[20px] p-[20px]">
              <div className="flex items-center justify-between">
                <h1 className="text-[24px]  font-bold text-[#fff]">
                  Token Audit
                </h1>
                <img src={arrowToken} className="rotate-180" alt="" />
              </div>
              <div className="grid grid-cols-1 gap-2 mt-6 lg:grid-cols-1">
                <div className="bg-[#5D5E60] p-[20px] rounded-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={token1} alt="" />
                    <h1 className="text-[24px]  sm:text-[18px] font-bold text-[#fff]">
                      Token Auditor
                    </h1>
                  </div>
                  <div className="p-[25px] bg-[#323233] rounded-[10px] mt-[15px] h-[286px] flex flex-col lg:h-[unset]">
                    <textarea
                      className="flex-1 bg-[transparent] resize-none text-[#7F8083] font-montserrat text-[16px] outline-none"
                      placeholder="Enter contact address..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)} // Update state when textarea changes
                      cols="30"
                      rows="10"
                    ></textarea>
                    <button
                      className="text-[16px] font-montserrat font-normal w-[100px] h-[40px] rounded-[10px] text-[#fff] ml-auto btn-gradient"
                      onClick={handleSubmit} // Handle form submission
                    >
                      Submit
                    </button>
                  </div>
                </div>
                {/* <div className="bg-[#5D5E60] p-[20px] rounded-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={token2} alt="" />
                    <h1 className="text-[24px] font-bold text-[#fff] sm:text-[18px]">
                      Audit Report
                    </h1>
                  </div>

                  <div className="p-[25px] bg-[#323233] rounded-[10px] mt-[15px] h-[286px] flex flex-col items-center justify-center  lg:h-[unset]">
                    <p className="text-[18px] font-normal text-[#808083] text-center mb-[10px] flex-1">
                      A Comprehensive audit report that includes a detailed
                      analysis of the code, a list of all the vulnerabilities
                      found, and recommendations on how to fix then.
                    </p>
                    <h1 className="text-[24px]  sm:text-[18px] font-bold text-[#fff] my-2 text-center">
                      ULLOCK FULL AUDIT REPORT WITH PREMIUM
                    </h1>
                    <button className="text-[16px] font-montserrat font-normal w-[125px] h-[40px] rounded-[10px] text-[#fff] flex items-center justify-center gap-[10px] btn-gradient">
                      <img src={lock} alt="" />
                      Locked
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="bg-[#323233] rounded-[20px] p-[20px] flex flex-col items-center gap-2 mt-[25px]">
              <img src={tokenMain} alt="" />
              <p className="text-[22px] font-bold lg:text-center text-[#fff]">
               {/* {data.result[0]} */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
