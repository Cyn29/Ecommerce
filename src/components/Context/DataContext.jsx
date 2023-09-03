import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios("http://localhost:3000/products")
            .then((res) => {
               
                setData(res.data);
                console.log(res.data);

            });
    }, []);

    return (
        <dataContext.Provider value={{ data }}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;

