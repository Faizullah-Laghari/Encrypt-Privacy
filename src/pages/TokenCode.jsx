import React from "react";
import { Aside } from "../components/Aside";
import notify from "../assets/img/common/notify.svg";
import avatar from "../assets/img/common/avatar.svg";
import arrow from "../assets/img/common/arrow.svg";

import arrowToken from "../assets/img/token/arrow.svg";
import encr from "../assets/img/token/encr.svg";
import arrowBottom from "../assets/img/token/arrow-bottom.svg";
import { Link } from "react-router-dom";
export const TokenCode = () => {
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
                  class="font-montserrat text-[16px] btn-gradient text-[#fff] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center"
                >
                  Code
                </Link>
                <Link
                  to="/token-functions"
                  class="font-montserrat text-[16px] text-[#7F8083] bg-[#323233] rounded-[5px] w-[116px] h-[30px] flex items-center justify-center"
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

            <div class="grid grid-cols-[1fr_333px] gap-[25px] mt-[25px]">
              <div class="bg-[#323233] rounded-[20px] p-[20px]">
                <h1 class="text-[24px] font-bold text-[#fff]">
                  ENCR Monitoring (Refresh To See Correct Info)
                </h1>

                <table class="w-full mt-[20px]">
                  <thead>
                    <tr class="bg-[#19191A] h-[50px]">
                      <td class="pl-[15px] w-[310px]">
                        <div class="flex items-center gap-2">
                          <img src={arrowBottom} alt="" />
                          <p class="text-[16px] text-[#fff] font-medium font-montserrat">
                            Call Tree
                          </p>
                        </div>
                      </td>
                      <td class="pl-[15px]">
                        <div class="flex items-center gap-2">
                          <p class="text-[16px] text-[#fff] font-medium font-montserrat">
                            Contract code
                          </p>
                        </div>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        ENCR Token (Contract)
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          1 '@
                          <span class="text-[#2188E8]">
                            atlaskit/dropdown-menu';
                          </span>
                        </p>
                      </td>
                    </tr>

                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        total Supply [Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          2 '@atlaskit/icon/glyph/media-services/add-comment';
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        get Deploment Start time[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          3
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#EA6130]">
                              Button from '@atlaskit/button/standard-button';
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        get Lp Rewards Entitlement [Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          4
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#EA6130]">
                              MediaServicesAddCommentIcon from
                              '@atlaskit/icon/add-comment
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        transfer [Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          5
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#fff]">
                              {"{(Box, xcss)} from '@atlaskit/primitives';"}
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        allowance[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          6
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#fff]">
                              Popup from '@atlaskit/popup'
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        transfer Form[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          7
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#fff]">
                              Form, {"{(Field, FormFooter, HelperMessage)}"}{" "}
                              from '@atlaskit/form';
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        decrease Allowance[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          8
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#0FC06B]">
                              TextArea from '@atlaskit/textarea';
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        send To ENCR Staking[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">9 *</p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        domain Separator[Pub]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">10 *</p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        Permit[Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">11 *</p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        nonces [Ext]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          12
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#fff]"> Form, </span>
                            <span class="text-[#EA6130]">
                              Form, {"{(Field, FormFooter, HelperMessage)}"}{" "}
                              from '@atlaskit/form';
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        _chain ID[Prv]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">
                          13
                          <span class="text-[#2188E8]">
                            import
                            <span class="text-[#EA6130]">
                              {"{(Box, xcss)}"} from '@atlaskit/primitives';
                            </span>
                          </span>
                        </p>
                      </td>
                    </tr>
                    <tr class="h-[50px] border-b-[1px] border-b-[#212224]">
                      <td class="pl-[15px] text-[16px] text-[#fff] font-medium font-montserrat">
                        _build Domain Separator[Prv]
                      </td>
                      <td class="text-[16px] font-montserrat font-normal text-[#fff]">
                        <p class="text-[#fff]">14 *</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="bg-[#323233] rounded-[20px] p-[20px] flex flex-col">
                <h1 class="text-[24px] font-bold text-[#fff]">Findings</h1>

                <div class="mt-[20px] flex flex-col gap-[20px]">
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      ENCR ERC20 contracts lack Renounce Ownership function in
                      Authorized ERC20.sol
                    </p>
                  </div>
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      ERC20 Supply overflow not checked everywhere
                    </p>
                  </div>
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      ‘EIP712.sll’ should be marked as ‘constant’
                    </p>
                  </div>
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      Active decentralized attackers can create malicious Dai
                      Supply sources which will accept any interest rates
                    </p>
                  </div>
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      ‘EIP712.sll’ should be marked as ‘constant’
                    </p>
                  </div>
                  <div class="bg-[#19191A] p-[20px] rounded-lg">
                    <span class="inline-flex mb-[25px] items-center gap-[10px] px-[20px] py-[6px] text-[16px] font-bold text-[#fff] border-[1px] border-[#717274] rounded-full">
                      <span class="w-4 h-4 block rounded-full bg-[#EA6130]"></span>
                      MEDIUM
                    </span>
                    <p class="text-[16px] font-semibold text-[#fff]">
                      ‘EIP712.sll’ should be marked as ‘constant’
                    </p>
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
