import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const { createContext, useState, useEffect } = require("react");

const KioskContext = createContext();
const KioskProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [orderName, setOrderName] = useState("");

  const router = useRouter();

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

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };
  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddToOrder = ({ categoryId, ...productQ }) => {
    if (order.some((orderP) => orderP.id === productQ.id)) {
      // if already exists the product in the order, I Update the product id the quantity changed
      const productQUpdated = order.map((orderP) =>
        orderP.id === productQ.id ? productQ : orderP
      );
      setOrder(productQUpdated);
      toast.success("Order Updated! 😉");
    } else {
      // I add the product with the quantity to the order
      setOrder([...order, productQ]);
      toast.success("Added to your order! 😁");
    }
    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const productUpdate = order.filter((orderState) => orderState.id === id);
    setProduct(productUpdate[0]);
    setModal(!modal);
  };
  const handleDeletePoduct = (id) => {
    const productUpdated = order.filter((orderState) => orderState.id !== id);
    setOrder(productUpdated);
  };

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
        handleAddToOrder,
        order,
        handleEditQuantity,
        handleDeletePoduct,
        orderName,
        setOrderName
      }}
    >
      {children}
    </KioskContext.Provider>
  );
};

export { KioskProvider };

export default KioskContext;
