import React from "react";
import Header from "../header/Header";

export const Loyaut: React.FC<{children: React.ReactNode}> = ({children}) => {
    return <>
        <Header/>
        {children}

    </>
}
