import React, { createContext, useState } from 'react';

export const TechSupportContext = createContext();

export const TechSupportProvider = ({ children }) => {
  const [techSupportTickets, setTechSupportTickets] = useState([]);

  const value = {
    techSupportTickets,
    setTechSupportTickets
  };

  return (
    <TechSupportContext.Provider value={value}>
      {children}
    </TechSupportContext.Provider>
  );
};