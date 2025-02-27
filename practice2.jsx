import { useEffect, useState } from 'react';

function Practice2() {
    const [currencyData, setCurrencyData] = useState(null);

    useEffect(() => {
        async function fetchCurrency() {
            try {
                const response = await fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_OrW81XKTDrZLVSREpDx5ik8HPI2MAoE4djruN6ct`);
                const data = await response.json();
                setCurrencyData(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching currency data:", error);
            }
        }

        fetchCurrency();
    }, []);

    return (
        <div>
            <h2>Hello, this is a simple HTML component</h2>
            {currencyData ? <pre>{JSON.stringify(currencyData, null, 2)}</pre> : <p>Loading currency data...</p>}
        </div>
    );
}

export default Practice2;
