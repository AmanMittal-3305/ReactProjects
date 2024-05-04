import { useEffect, useState } from "react";


function useCurrencyInfo(currency){
    const [data, setData] = useState("")
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currency]);
    console.log(data);
    return data
}

export default useCurrencyInfo