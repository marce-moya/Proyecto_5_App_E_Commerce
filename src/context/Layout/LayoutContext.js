import { createContext } from 'react';

const LayoutContext = createContext(null);

export const LayoutProvider = ({ children }) => {
    const layoutValue = { };
  
    return (
      <LayoutContext.Provider value={layoutValue}>
        {children}
      </LayoutContext.Provider>
    );
  };

export default LayoutContext;