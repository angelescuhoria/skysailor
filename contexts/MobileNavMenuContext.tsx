"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type NavMenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const NavMenuContext = createContext<NavMenuContextType | undefined>(undefined);

export function useNavMenu() {
  const context = useContext(NavMenuContext);
  if (!context)
    throw new Error("useNavMenu must be used within a NavMenuProvider");
  return context;
}

export function NavMenuProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <NavMenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </NavMenuContext.Provider>
  );
}