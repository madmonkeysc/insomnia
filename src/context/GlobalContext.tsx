import React, { createContext, useContext, useState, ReactNode } from "react";

type Segment = "empresas" | "emprendedores";

interface GlobalContextType {
  segment: "empresas" | "emprendedores";
  setSegment: (segment: "empresas" | "emprendedores") => void;
  isAudioEnabled: boolean;
  setIsAudioEnabled: (enabled: boolean) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
  isBookingModalOpen: boolean;
  setIsBookingModalOpen: (open: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [segment, setSegment] = useState<"empresas" | "emprendedores">("empresas");
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <GlobalContext.Provider 
      value={{ 
        segment, 
        setSegment, 
        isAudioEnabled, 
        setIsAudioEnabled,
        isChatOpen,
        setIsChatOpen,
        isBookingModalOpen,
        setIsBookingModalOpen
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
