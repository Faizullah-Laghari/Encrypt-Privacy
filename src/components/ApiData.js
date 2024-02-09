
import React from 'react';
import './api.css';

const ApiData = () => {
    return (
      <section className="flex gap-[30px]">
          <div className="h-full bg-[#191919] overflow-auto no-scrollbar rounded-[30px] lg:h-[unset]">
            <div className="grid grid-cols-2 gap-[25px] mt-[25px] lg:grid-cols-1">
            <div>
              <div className="col-span-2 bg-[#323233] rounded-[20px] p-[20px] lg:col-span-1">
                <h1 className="text-[24px] p-0 font-bold text-start text-[#fff]">
                Contract Security
                </h1>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>Contract source code verified</h2></span>
                <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>This token contract is open source. You can check the contract code for details. Unsourced token contracts are likely to have malicious functions to defraud their users of their assets.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No proxy</h2></span>
                <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>There is no proxy in the contract. The proxy contract means contract owner can modifiy the function of the token and possibly effect the price.
</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No mint function</h2></span>
                <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Mint function is transparent or non-existent. Hidden mint functions may increase the amount of tokens in circulation and effect the price of the token.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No function found that retrieves ownership</h2></span>
                <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>If this function exists, it is possible for the project owner to regain ownership even after relinquishing it</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>Owner can't change balance</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The contract owner is not found to have the authority to modify the balance of tokens at other addresses.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No hidden owner</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No hidden owner address was found for the token. For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>This token can not self destruct</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No self-destruct function found. If this function exists and is triggered, the contract will be destroyed, all functions will be unavailable, and all related assets will be erased.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No external call risk found</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>External calls would cause this token contract to be highly dependent on other contracts, which may be a potential risk.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>This token is not a gas abuser</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No gas abuse activity has been found.</p>
                </div>
              </div>
              </div>

{/* column 2 */}

              <div >
              <div className="bg-[#323233] mb-5 rounded-[20px] p-[20px] flex flex-col">               
                <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Basic Info</h1>
                <div className="bg-[#19191A] p-[20px] rounded-lg flex-1">
                    <div className='flex justify-between items-end'>
                    <div>
                      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'> Token Symbol</p>
                      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'> Token Name</p>
                      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'> Token Contract Address</p>
                      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'> Contract Creator</p>
                      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'> Contract Owner</p>
                    </div>
                    <div className='text-end'>
                      <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'> $ENCR</p>
                      <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'> ENCRYPT</p>
                      <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white
                     outline-none'> Token Contract Address</p>
                      <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white
                     outline-none'> Contract Creator</p>
                      <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white
                     outline-none'> Contract Owner</p>
                    </div>
                    </div>
                </div>
                </div>



              <div className="bg-[#323233]  rounded-[20px] p-[20px] flex flex-col">               
                <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Top 10 Holders</h1>
                <div className="bg-[#19191A] p-[20px] rounded-lg flex-1">
                <div className='border-b-2 pb-5 mb-5 border-[#323233]'>
                  <div className=" mb-5">
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium"> Token Holders: 1021 </p>
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium"> Total Supply: 100000000.00</p>
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium"> Top10 Holders Ratio</p>
                  </div>
                  <div className="bg-black w-full border border-[#243c5a] rounded mt-2"><div className="progress rounded p-2  w-[25%] bg-[#5D5E60]">25.98%</div></div>
                </div>
                <div className='border-b-2 pb-5 mb-5 border-[#323233]'>
                <div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> UniswapV2 </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 5.206M  (5.21%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> 0xab...305f </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.835M  (2.83%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> 0x65...6b74 </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium">2.666M  (2.67%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> 0xed...d586</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium">2.5M  (2.50%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0xb1...beb6</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.247M  (2.25%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0x6a...5061</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.244M  (2.24%)</p>
                  </div>
                </div>
                </div>
                <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0x6a...5061</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.244M  (2.24%)</p>
                  </div>
                <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0x6a...5061</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.244M  (2.24%)</p>
                  </div>
                <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0x6a...5061</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.244M  (2.24%)</p>
                  </div>
                <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium">0x6a...5061</p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.244M  (2.24%)</p>
                  </div>
                </div>
                </div>






   <div className="bg-[#323233] my-5 rounded-[20px] p-[20px] flex flex-col">               
                <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Top 10 LP Holders</h1>
                <div className="bg-[#19191A] p-[20px] rounded-lg flex-1">
                <div className='border-b-2 pb-5 mb-5 border-[#323233]'>
                <div>
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium">LP Holders: 2</p>
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium"> Total Supply: 13416.41</p>
                      <p className="font-montserrat text-white text-start p-0 text-[16px] font-medium"> Percent of LP Locked</p>
                    </div>
                    <div className="bg-black w-full border border-[#243c5a] rounded mt-2"><div className="progress rounded p-2  w-[100%] bg-[#5D5E60]">100.00%</div></div>
                </div>
                <div className='border-b-2 pb-5 mb-5 border-[#323233]'>
                <div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> UniswapV2 </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 5.206M  (5.21%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> 0xab...305f </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium"> 2.835M  (2.83%)</p>
                  </div>
                  <div className=" mb-5 flex justify-between">
                      <p className="font-montserrat text-white text-start p-0 text-[12px] font-medium"> 0x65...6b74 </p>
                      <p className="font-montserrat text-white text-start p-0 text-[14px] font-medium">2.666M  (2.67%)</p>
                  </div>

                </div>
                </div>
                </div>
                </div>




            </div>
            
              <div>
              <div className="col-span-2 bg-[#323233] rounded-[20px] p-[20px] lg:col-span-1">
                <h1 className="text-[24px] p-0 font-bold text-start text-[#fff]">
                Honeypot Risk
                </h1>
                <p className='font-montserrat text-[16px] text-[#7F8083] outline-none  text-start p-0 pt-3'>Buy Tax:  
5.00%
Sell Tax:  
5.00%
Above 10% may be considered a high tax rate. More than 50% tax rate means may not be tradable.</p>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>This does not appear to be a honeypot.</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>We are not aware of any malicious code.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No codes found to suspend trading.</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>If a suspendable code is included, the token maybe neither be bought nor sold (honeypot risk).</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>Holders can sell all of the token</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Holders can sell all of the token. Some token contracts will have a maximum sell ratio.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>The token can be bought</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Generally, these unbuyable tokens would be found in Reward Tokens. Such Tokens are issued as rewards for some on-chain applications and cannot be bought directly by users.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No trading cooldown function</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The token contract has no trading cooldown function. If there is a trading cooldown function, the user will not be able to sell the token within a certain time or block after buying.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No hidden owner</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No hidden owner address was found for the token. For contract with a hidden owner, developer can still manipulate the contract even if the ownership has been abandoned.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>This token can not self destruct</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No self-destruct function found. If this function exists and is triggered, the contract will be destroyed, all functions will be unavailable, and all related assets will be erased.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>No external call risk found</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>External calls would cause this token contract to be highly dependent on other contracts, which may be a potential risk.</p>
                </div>
                <div className='bg-[#19191A]   rounded-md p-4 my-3'>
                <span className='flex gap-4 text-lg text-white items-center mt-3'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
<h2 className='text-2xl'>This token is not a gas abuser</h2></span>
                <p  className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No gas abuse activity has been found.</p>
                </div>
              </div>
              </div>
            </div>
          </div>
      </section>
    );
  };
  
export default ApiData;