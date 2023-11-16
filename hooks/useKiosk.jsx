const { KioskContext } = require("@/context/KioskProvider");
const { useContext } = require("react");

const useKiosk = () => {
  return useContext(KioskContext);
};

export default useKiosk;
