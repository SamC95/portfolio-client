import React from "react";
import "./header.sass";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className={"header"}>
            <div className={"logo"}>
                <Link href="/">
                    <span className={"html"}>&lt;</span>
                    <span className={"name"}> Sam Clark </span>
                    <span className={"html"}>/&gt;</span>
                </Link>
            </div>
            <nav className={"nav"}>
                <ul>
                    <li><a href={"/"}>Home</a></li>
                    <li><a href={"/about"}>About</a></li>
                    <li><a href={"/qualifications"}>Qualifications</a></li>
                    <li><a href={"/projects"}>Projects</a></li>
                    <li><a href={"/opensource"}>Open Source</a></li>
                    <li><a href={"/contact"}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
