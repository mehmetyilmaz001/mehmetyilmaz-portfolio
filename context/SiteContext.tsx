import { createContext, useState } from "react";
import { navItems } from "../layouts/components/Nav";

export const SiteContext = createContext({
    selectedNav: '',
    setSelectedNav: (_: string) => {}
});

const SiteContextProvider = (props: any) => {
    const [val, setVal] = useState({
      selectedNav: '',
    })
  
    return (
      <SiteContext.Provider value={{
        selectedNav: val.selectedNav,
        setSelectedNav: (selectedNav: string) => {
          setVal({
            ...val,
            selectedNav
          })
        }
      }}>
        {props.children}
      </SiteContext.Provider>
    )
}

export default SiteContextProvider;