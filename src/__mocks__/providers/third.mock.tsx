import React, { createContext, useState, useContext } from 'react'

const ProviderMockContext = createContext(null)
const MockContextProvider = ({ children }) => {
  const [state, setState] = useState({});
  return (
    <ProviderMockContext.Provider value={{state, setState}}>
      {children}
    </ProviderMockContext.Provider>
  )
}

export const useThirdProviderMock = () => useContext(ProviderMockContext)
export default MockContextProvider