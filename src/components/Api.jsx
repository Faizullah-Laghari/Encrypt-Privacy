import React, { useState } from 'react';
import axios from 'axios';
import SimpleModal from './modal';

const MyForm = () => {
  const [address, setAddress] = useState('');
  const [responseData, setResponseData] = useState({
    holders: [],
    total_supply: 0,
    dex: []
  });
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isDataFetched, setIsDataFetched] = useState(false); // Will be true when data is successfully fetched

  const handleSubmit = async () => {
    setError('');
    setIsDataFetched(false); // Reset data fetched state on new submission
    try {
      const response = await axios.get(`https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${address}`);
      const data = response.data.result;
      if (Object.keys(data).length === 0 || Object.values(data)[0].holders.length === 0) {
        setModalMessage('This is a new token');
        setIsModalOpen(true);
      } else {
        setResponseData(Object.values(data)[0] || { holders: [], total_supply: 0, dex: [] });
        setIsDataFetched(true); // Only set to true if there's meaningful data
      }
    } catch (error) {
      setError('An error occurred while fetching the data.');
    }
  };

  // Now responseData is guaranteed to be an object with the keys you need
  const { holders, total_supply, dex } = responseData;

  // Calculating the top 10 holders ratio
  const top10HoldersRatio = holders.slice(0, 10).reduce((acc, holder) => acc + parseFloat(holder.percent), 0).toFixed(2);

  const formatNumber = (num) => {
    return num > 999999 ? `${(num / 1000000).toFixed(2)}M` : num.toString();
  };

  
  // Helper function to truncate token addresses
  const truncateAddress = (address) => `${address.substring(0, 5)}...${address.substring(address.length - 4)}`;


  return (
    <div>
      <SimpleModal isOpen={isModalOpen} message={modalMessage} onClose={() => setIsModalOpen(false)} />
    <div className="p-[25px] bg-[#323233] py-2 rounded-[10px] mt-[15px] h-[100%] flex flex-col gap-2">
        <div className="input-area flex items-center sm:block gap-2 text-white">
        <select id="token_id" className="form-select py-3 form-select-lg bg-[#323233] border rounded-lg">
           <option value="1">Ethereum</option><option value="56">BSC</option><option value="42161">Arbitrum</option><option value="137">Polygon</option><option value="204">opBNB</option><option value="324">zkSync Era</option><option value="59144">Linea Mainnet</option><option value="8453">Base</option><option value="5000">Mantle</option><option value="534352">Scroll</option><option value="10">Optimism</option><option value="43114">Avalanche</option><option value="250">Fantom</option><option value="25">Cronos</option><option value="128">HECO</option><option value="100">Gnosis</option><option value="tron">Tron</option><option value="321">KCC</option><option value="201022">FON</option>
            </select>
            <input 
              id="token_addr" 
              className="form-input flex-grow my-2 h-[50px] w-[90%]" 
              type="text" 
              placeholder="Enter Token Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        <button
          className="text-[16px] font-montserrat font-normal w-[100px] h-[40px] rounded-[10px] text-[#fff] ml-auto btn-gradient"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

 {isDataFetched &&  (
<div className="response-data mt-3 text-white">
  {/* First Column for Top Holders */}
 
  <div>
  <div className='token-info bg-[#323233] p-3 rounded-lg my-5'>
    <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Additional Details</h1>

  {/* Anti Whale */}
  {responseData.is_anti_whale === "1" ?  (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-whiteoutline-none'> Anti Whale</p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Measures are in place to prevent large holders from manipulating the token's price or liquidity, including transaction limits or holding caps.</p>
    </div>
  ) : (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-whiteoutline-none'>No Anti Whale</p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>No specific restrictions are in place to prevent large holders from potentially manipulating the market, possibly leading to higher volatility.
      </p>
    </div>
  )}

  {/* Blacklisted */}
  {responseData.is_blacklisted === "1" ?  (
    <div className="  mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white outline-none'> Blacklisted</p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>An address has been identified for engaging in suspicious or malicious activities and is restricted from performing actions like trading or transferring tokens.</p>
    </div>
  ) : (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'>No Blacklisted</p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>An address has not been identified for engaging in harmful activities and can interact with the token or platform without restrictions.</p>
    </div>
  )}

  {/* Honeypot */}
  {responseData.is_honeypot === "1" ?  (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'> Honeypot </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The project is designed to attract investors with appealing features but prevents them from exiting profitably, essentially trapping their investment.
</p>
    </div>
  ) : (
    <div className="  mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'>No Honeypot </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The project allows for both buying and selling without deceptive practices, ensuring investors can enter and exit positions according to market conditions.</p>
    </div>
  )}


  {/* Index */}
  {responseData.is_in_dex === "1" ?  (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'> Index </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The performance of a basket of assets or tokens is tracked, providing a benchmark for assessing performance and risk in the cryptocurrency market.</p>
    </div>
  ) : (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white outline-none'>No Index </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>There is no benchmark or calculation tracking the performance of a group of cryptocurrencies, leaving investors without a standardized performance measure.</p>
    </div>
  )}

  {/* Mintable */}
  {responseData.is_mintable === "1" ? (
    <div className="  mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white outline-none'> Mintable </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>New tokens can be created or "minted" after initial creation, allowing for supply flexibility for rewards, staking, or ecosystem needs.</p>
    </div>
  ) : (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'>No Mintable </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>The token supply is fixed, and no new tokens can be created post-launch, limiting supply flexibility.</p>
    </div>
  )}

  {/* Open Source */}
  {responseData.is_open_source === "1" ?  (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'> Open Source </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>The project's codebase is publicly available for review, audit, or contribution, enhancing transparency, trust, and security within the crypto community.</p>
    </div>
  ) : (
    <div className="  mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'>No Open Source </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>The project's codebase is not publicly accessible, limiting external review and potential community contributions to security and development.</p>
  </div>
  )}

  {/* Proxy */}

  {responseData.is_proxy === "1" ?  (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white outline-none'> Proxy </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>A mechanism is in place to facilitate interactions or transactions, allowing for upgradeability and more complex blockchain ecosystem interactions.</p>
    </div>
  ) : (
    <div className=" mb-5 flex flex-col bg-[#19191a] p-3 rounded-md">
      <p className='text-start p-0 pt-3 font-montserrat text-[20px] text-white  outline-none'>No Proxy </p>
      <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]  outline-none'>There is no intermediary mechanism to enhance smart contract functionalities or facilitate complex interactions, potentially limiting flexibility and upgradeability.</p>
    </div>
  )}
</div>


<div className="block-4 p-4 bg-[#323233] text-white rounded-md">
      <div className="title font-bold text-2xl mb-3">Top 10 Holders</div>
      <div className='p-4 bg-[#19191A] rounded-md'>
      <div className="mt-3 text-sm font-bold">Token Holders: {holders.length}</div>
      <div className="mt-2 text-sm font-bold">Total Supply: {formatNumber(total_supply)}</div>
      <div className="mt-3 flex flex-col text-sm">
        <div className="flex-grow font-bold">Top10 Holders Ratio</div>
        <div className="bg-gray-900 w-full rounded mt-2">
          <div className="progress bg-blue-500 rounded overflow-hidden p-2 text-white" style={{width: `${top10HoldersRatio}%`}}>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#19191A] rounded-md my-4 p-4">
      {holders?.slice(0, 10).map((holder, index) => (
        <div key={index} className="rank-item  relative mt-2 flex justify-between items-center text-xs">
          <div className="font-light flex items-center">
            <div className="rank-addr">
              <a className="text-[#7F8083] hover:text-blue-300" target="_blank" href={`https://etherscan.io/address/${holder.address}`}>
                {truncateAddress(holder.address)}
              </a>
            </div>
          </div>
          <div className="rank-percent font-bold">{formatNumber(holder.balance)} ({holder.percent}%)</div>
        </div>
      ))}
      </div>

      <div className="text-sm font-bold">
        <div className="owners-holding ">
          {/* Additional info like Owner's Holdings can be added here similar to the holders list */}
           
        </div>
        <div className=" bg-[#19191a] p-4 rounded-md">
          <div className="font-bold mb-2">DEX Info:</div>
          {dex?.map((exchange, index) => (
            <div key={index} className="flex justify-between mt-1.5">
              <div className="color-blue text-[#7F8083]">{truncateAddress(exchange.pair)}</div>
              <div>{exchange.name}</div>
              <div>${formatNumber(exchange.liquidity)}</div>
            </div>
          ))}
        </div>
      </div>
</div>




    {/* Dex Information Section */}
    <div className='token-info bg-[#323233] p-3 rounded-lg my-5'>
         <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Dex Information:</h1>
           {responseData.dex?.map((dex, index) => (
          <div className='border-b-2 border-[#323233] bg-[#19191A] my-3 rounded-md p-4' key={index}>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Name: </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{dex.name}</p>
           </div>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Liquidity Type:</p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{dex.liquidity_type}</p>
           </div>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Liquidity:</p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'> {dex.liquidity}</p>
           </div>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Pair: </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'> {dex.pair}</p>
           </div>
             </div>
           ))}
         </div>
 </div>
<div>


<div className='token-info bg-[#323233] p-3 rounded-lg my-5'>
           <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Basic Info</h1>
           <div className='bg-[#19191A] p-3 rounded-lg '>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Token Name: </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{responseData.token_name}</p>
           </div>
           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Token Symbol: </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{responseData.token_symbol}</p>
           </div>

           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Contract Creator: </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{responseData.creator_address}</p>
           </div>

           <div className=" mb-5 flex justify-between">
           <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083] outline-none'>Owner Address:  </p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none overflow-hidden'>{responseData.owner_address}</p>
           </div>
      </div>
      </div>


      <div className='token-info bg-[#323233] p-3 rounded-lg my-5'>
  <h1 className="text-[24px] p-0 mb-3 text-start font-bold text-[#fff]">Top Holders:</h1>
    {responseData.holders?.map((holder, index) => (
      <div key={index} className=" p-5 rounded-md mb-5 border-[#323233] bg-[#19191A]">
        <div className="flex justify-between">
          <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]'>Address:</p>
          <p className='text-end p-0 pt-3 font-montserrat text-[16px] overflow-hidden text-white'>{holder.address}</p>
        </div>
        <div className="flex justify-between">
          <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]'>Balance:</p>
          <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white'>{holder.balance}</p>
        </div>
        <div className="flex justify-between">
          <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]'>Percent:</p>
          <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white'>{holder.percent}%</p>
        </div>
        <div className="flex justify-between">
        <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]'>Is Contract:</p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{holder.is_contract ? 'Yes' : 'No'}</p>
           </div>
        <div className="flex justify-between">
        <p className='text-start p-0 pt-3 font-montserrat text-[16px] text-[#7F8083]'>Is Locked:</p>
           <p className='text-end p-0 pt-3 font-montserrat text-[16px] text-white outline-none'>{holder.is_locked ? 'Yes' : 'No'}</p>
           </div>
      </div>
    ))}
  </div>
</div>
  

  </div>

      )}
      {error && (
        <div className="error-message mt-3 bg-red-500 p-3 rounded-lg text-white">
          {error}
        </div>
      )}
    </div>
  );
};

export default MyForm;

