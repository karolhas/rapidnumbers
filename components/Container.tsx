import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center shadow-lightModeShadow bg-[#fbfbfb] dark:bg-[#121212] dark:shadow-darkModeShadow sm:w-[60vw]">
      {children}
    </div>
  );
};

export default Container;
