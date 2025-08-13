// // "use client";
// import React from "react";
// import "../../globals.css"; // Ensure to import your global styles
// const ResponsiveView = ({ children }: { children: React.ReactNode }) => {
//   return <div className="webScreen tabScreen mobileScreen">{children}</div>;
// };
// export default ResponsiveView;

// --------------------------------------------------------------
// components/ResponsiveView.tsx
"use client";

import { useMediaQuery } from "../../hooks/media-query/useMediaQuery";
import React from "react";

const ResponsiveView = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(min-width: 481px) and (max-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 769px)");

  const className = isMobile
    ? "mobileScreen"
    : isTablet
    ? "tabScreen"
    : "webScreen";
  return <div className={className}>{children}</div>;
};

export default ResponsiveView;
