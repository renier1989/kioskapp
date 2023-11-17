import axios from "axios";

const { createContext, useState, useEffect } = require("react");

const KioskContext = createContext();
const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal ,setModal] = useState(false)

  const getCategories = async () => {
    const { data } = await axios(`/api/categories`);
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);


  const handleClickCategory = id =>{
    const category = categories.filter(cat=>cat.id === id);
    setCurrentCategory(category[0])
  }

  const handleSetProduct = product =>{
    setProduct(product);
  }
  const handleChangeModal = () =>{
    setModal(!modal);
  }

  return (
    <KioskContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
