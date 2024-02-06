import React ,{useState} from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";
import axios from "axios";



export const Code = () => {

  const [code, setCode] = useState('');
  const getCodeAudit = async () => {
    if (!code) {
        console.log("No code provided");
        return;
    }

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', 
        {
          model: "gpt-3.5-turbo-0613",
            prompt: 'Hello',
            max_tokens: 100
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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`
            }
        });

        console.log(response.data);
    } catch (error) {
        console.error("Error calling OpenAI API", error);
    }
};


  return (
    <section className="flex gap-[30px]">
      <Aside active={3} />
      <section className="py-[30px] lg:h-[unset] lg:pl-[20px] pr-[20px] h-[100vh] flex-1">
        <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] p-[30px] lg:h-[unset]">
          <header className="flex items-center justify-between">
            <h1 className="text-[32px] text-[#fff] font-bold sm:text-[20px]">
              Code Audit
            </h1>

            <nav className="flex items-center">
              <a href="#" className="mr-[30px]  sm:hidden">
                <img src={notify} alt="" />
              </a>
              <div className="flex items-center gap-[10px]">
                <div className="text-right  sm:hidden">
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
          <div className="grid grid-cols-3 gap-[25px] mt-[25px] lg:grid-cols-1">
            <div className="col-span-2 bg-[#323233] rounded-[20px] p-[20px] lg:col-span-1">
              <h1 className="text-[24px] font-bold text-[#fff]">
                Contract code
              </h1>
              <textarea
                type="text"
                value={code}
                onChange={(e)=>{setCode(e.target.value)}}
                placeholder="Contract code"
                className="font-montserrat text-[#fff] text-[16px] font-medium px-[15px] w-full h-[87%] resize-none rounded-[10px] bg-[#19191A] mt-[20px] mb-[15px]"
              />
              {/* <ul>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>1</p>
                  <p>*</p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>2</p>
                  <p>
                    *Submitted for verification at
                    <span className="text-[#0FC06B]">
                      Etherscan.io on 2023-12-06
                    </span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>3</p>
                  <p>
                    // SPDX-License-Identifier:
                    <span className="text-[#0FC06B]">MIT</span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>4</p>
                  <p>
                    <span className="text-[#2188E8]">
                      function totalSupply() external view returns
                    </span>
                    <span className="text-[#0FC06B]"> (uint256);</span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>5</p>
                  <p>
                    <span className="text-[#2188E8]">
                      {" "}
                      function totalSupply(){" "}
                    </span>
                    <span className="text-[#EA6130]">
                      external view returns (uint256);
                    </span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>6</p>
                  <p>
                    <span className="text-[#2188E8]">
                      function add(
                      <span className="text-[#EA6130]">
                        uint256 a, uint256 b
                      </span>
                      ) internal pure returns
                      <span className="text-[#0FC06B]">(uint256)</span> {"{"}
                    </span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>7</p>
                  <p>
                    <span className="text-[#2188E8]">
                      return sub(
                      <span className="text-[#EA6130]">
                        a, b, "SafeMath: subtraction overflow"
                      </span>
                      );
                    </span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>8</p>
                  <p>
                    require(c / a == b, "SafeMath: multiplication overflow");
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>9</p>
                  <p>
                    <span className="text-[#2188E8]">
                      * @dev Throws if called by
                      <span className="text-[#EA6130]">
                        any account other than the owner.
                      </span>
                      ;
                    </span>
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>10</p>
                  <p>
                    function _checkOwner()
                    <span className="text-[#2188E8]">
                      <span className="text-[#EA6130]">
                        internal view virtual
                      </span>
                    </span>
                    {"{"}
                  </p>
                </li>
                <li className="text-[16px] font-montserrat font-normal flex items-center gap-[15px] px-[15px] text-[#fff] py-[15px] border-b-[1px] border-b-[#212224]">
                  <p>11</p>
                  <p>
                    <span className="text-[#2188E8]">
                      function transferOwnership(
                      <span className="text-[#0FC06B]">address newOwner</span>)
                      public virtual Owner {"{"}
                    </span>
                  </p>
                </li>
              </ul> */}
            </div>

            <div className="bg-[#323233] rounded-[20px] p-[20px] flex flex-col">
              <h1 className="text-[24px] font-bold text-[#fff]">Findings</h1>
              <button onClick={getCodeAudit} className="w-full text-[18px] text-[#fff] font-bold h-[53px] bg-[#19191A] rounded-[10px] my-5">
                Audit your code
              </button>
              <div className="bg-[#19191A] p-[20px] rounded-lg flex-1">
                <div className="flex items-center gap-[10px] mb-5">
                  <div className="flex items-center">
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h1 className="text-[#fff] text-[18px] font-bold">
                      John Kit
                    </h1>
                    <p className="font-montserrat text-[#7F8083] text-[16px] font-medium">
                      personal
                    </p>
                  </div>
                </div>
                <div
                  contenteditable=""
                  className="font-montserrat text-[16px] text-[#7F8083] outline-none"
                >
                  The smart contract has undergone a thorough code review and
                  analysis to assess its functionality, security, and compliance
                  with best practices. The audit aimed to identify potential
                  vulnerabilities, inefficiencies, and areas of improvement
                  within the contract's codebase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
