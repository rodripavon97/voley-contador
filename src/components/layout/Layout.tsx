import { useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Topbar } from "../Topbar/Topbar";

export const Layout = () => {

    const [title, setTitle] = useState<string>("Título por defecto");
    const [showBackButton, setShowBackButton] = useState<boolean>(true);
    return (
        <>
        <Topbar title={title} showBackButton={showBackButton} />
        <Outlet context={{ title, setTitle, setShowBackButton }}/>
        <Navbar />
        </>

    )
}