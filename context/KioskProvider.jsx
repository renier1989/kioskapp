import axios from "axios";

const { createContext, useState, useEffect } = require("react");

const KioskContext = createContext();
const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({})
  const [product, setProduct] = useState({})
  const [modal ,setModal] = useState(false)
  const [order, setOrder] = useState([])

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

  const handleAddToOrder = ({categoryId, image,...productQ}) =>{

    if(order.some(orderP => orderP.id === productQ.id)){
      // if already exists the product in the order, I Update the product id the quantity changed
      const productQUpdated = order.map(orderP => orderP.id === productQ.id ? productQ : orderP)
      setOrder(productQUpdated);
    }else{
      // I add the product with the quantity to the order
      setOrder([...order, productQ])
    }


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
        handleChangeModal,
        handleAddToOrder
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
