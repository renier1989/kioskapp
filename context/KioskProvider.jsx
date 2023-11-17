
import axios from "axios";


const { createContext, useState, useEffect } = require("react");

const KioskContext = createContext();
const KioskProvider = ({ children }) => {
  
  const [categories, setCategories] = useState([]);
  const [algo, setAlgo] = useState('hola');

  const getCategories = async () => {
    const { data } = await axios(`/api/categories`);
    // console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <KioskContext.Provider value={{ categories, algo }}>{children}</KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
