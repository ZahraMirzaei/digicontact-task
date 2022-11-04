import { createContext, ReactNode, useContext, useState } from "react";
import { IShowCard } from "./contactCardInterface";

const showCardContext = createContext<IShowCard>({
  isVisible: false,
  setVisibleHandler: (value: boolean) => {},
});

function useShowCard() {
  const isVisible = useContext(showCardContext);
  if (isVisible === undefined) {
    throw new Error("useContact must be used within a ContactsProvider");
  }
  return isVisible;
}

const ShowCardContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function setVisibleHandler(value: boolean) {
    setIsVisible((prev) => {
      if (prev !== value) {
        return value;
      }
      return prev;
    });
  }

  const value: IShowCard = {
    isVisible,
    setVisibleHandler,
  };

  return (
    <showCardContext.Provider value={value}>
      {children}
    </showCardContext.Provider>
  );
};

export { useShowCard, ShowCardContextProvider };
