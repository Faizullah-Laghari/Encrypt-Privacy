


// import Axios from "axios";
// import { useEffect, useState } from "react";
// import './chart-data.css';

// function Apis() {
//     const [search, setSearch] = useState("");
//     const [crypto, setCrypto] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
//         )
//         .then((res) => {
//             setCrypto(res.data.map((coin, index) => ({ id: index, ...coin })));
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching crypto data:", error);
//             setLoading(false);
//         });
//     }, []);

//     return (
//         <div className="App">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 onChange={(e) => {
//                     setSearch(e.target.value);
//                 }}
//             />
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <td>Rank</td>
//                             <td>Name</td>
//                             <td>Symbol</td>
//                             <td>Market Cap</td>
//                             <td>Price</td>
//                             <td>Available Supply</td>
//                             <td>Volume(24hrs)</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {crypto &&
//                             crypto
//                                 .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
//                                 .map((val) => (
//                                     <tr key={val.id}>
//                                         <td className="rank">{val.market_cap_rank}</td>
//                                         <td className="logo">
//                                             <img src={val.image} alt="logo" width="30px" />
//                                             <p>{val.name}</p>
//                                         </td>
//                                         <td className="symbol">{val.symbol}</td>
//                                         <td>₹{val.market_cap}</td>
//                                         <td>₹{val.current_price.toFixed(2)}</td>
//                                         <td>{val.total_supply}</td>
//                                         <td>{val.total_volume.toFixed(0)}</td>
//                                     </tr>
//                                 ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Apis;











// import Axios from "axios";
// import { useEffect, useState, useCallback } from "react";
// import './chart-data.css';

// function Apis() {
//     const [search, setSearch] = useState("");
//     const [crypto, setCrypto] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Handler for search input change, wrapped in useCallback to prevent unnecessary re-renders
//     const handleSearchChange = useCallback((e) => {
//         setSearch(e.target.value);
//     }, []);

//     // useEffect to fetch data from the API, runs only once when the component mounts
//     useEffect(() => {
//         Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
//         .then((res) => {
//             setCrypto(res.data.map((coin, index) => ({ id: index, ...coin })));
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.error("Error fetching crypto data:", error);
//             setLoading(false);
//         });
//     }, []); // Empty dependency array ensures this runs only once

//     return (
//         <div className="App">
//             <input
//                 type="text"
//                 placeholder="Search..."
//                 onChange={handleSearchChange}
//             />
//             {loading ? (
//                 <p>Loading...</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <td>Rank</td>
//                             <td>Name</td>
//                             <td>Symbol</td>
//                             <td>Market Cap</td>
//                             <td>Price</td>
//                             <td>Available Supply</td>
//                             <td>Volume(24hrs)</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {crypto &&
//                             crypto
//                                 .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
//                                 .map((val) => (
//                                     <tr key={val.id}>
//                                         <td className="rank">{val.market_cap_rank}</td>
//                                         <td className="logo">
//                                             <img src={val.image} alt="logo" width="30px" />
//                                             <p>{val.name}</p>
//                                         </td>
//                                         <td className="symbol">{val.symbol}</td>
//                                         <td>{val.market_cap}</td>
//                                         <td>{val.current_price.toFixed(2)}</td>
//                                         <td>{val.total_supply}</td>
//                                         <td>{val.total_volume.toFixed(0)}</td>
//                                     </tr>
//                                 ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// export default Apis;












import Axios from "axios";
import { useEffect, useState, useCallback } from "react";
import './chart-data.css';

function Apis() {
    const [search, setSearch] = useState("");
    const [crypto, setCrypto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [itemsCount, setItemsCount] = useState(20); // Number of items to display initially and on scroll

    // Handler for search input change, wrapped in useCallback to prevent unnecessary re-renders
    const handleSearchChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    // Handler for scroll event
    const handleScroll = useCallback(() => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        // Load more items when the bottom is reached
        setItemsCount((prevCount) => prevCount + 20);
    }, []);

    // useEffect to fetch data from the API, runs only once when the component mounts
    useEffect(() => {
        Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
        .then((res) => {
            setCrypto(res.data.map((coin, index) => ({ id: index, ...coin })));
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching crypto data:", error);
            setLoading(false);
        });
    }, []); // Empty dependency array ensures this runs only once

    // useEffect to add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleSearchChange}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <td>Rank</td>
                            <td>Name</td>
                            <td>Symbol</td>
                            <td>Market Cap</td>
                            <td>Price</td>
                            <td>Available Supply</td>
                            <td>Volume(24hrs)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {crypto &&
                            crypto
                                .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
                                .slice(0, itemsCount) // Display only the specified number of items
                                .map((val) => (
                                    <tr key={val.id}>
                                        {/* ... Rest of your table data */}
                                    </tr>
                                ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Apis;
