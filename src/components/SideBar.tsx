import { ReactNode } from "react";

import '../styles/sidebar.scss';

interface ISideBarProps {
  children: ReactNode;
}

export function SideBar({ children } : ISideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        { children }
      </div>

    </nav>
  );
}