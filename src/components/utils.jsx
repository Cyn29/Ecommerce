import axios from "axios";
import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const dataContext = createContext();

export const DataProvider = ({ children }) => {
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

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DataProvider;
