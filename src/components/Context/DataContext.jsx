import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const DataContext = createContext();

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
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};
DataProvider.propTypes = {
    children: PropTypes.node
};
export default DataProvider;

