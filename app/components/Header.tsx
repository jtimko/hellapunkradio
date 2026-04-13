"use client";

import Link from "next/link";
import { FiMessageSquare, FiInfo, FiMail } from "react-icons/fi"
import { usePathname } from "next/navigation";

const Header = () => {
    const pathNane = usePathname();
    const activeStyle = 'text-blue-500';
    const inactiveStyle = 'text-white';

    const getToggleHref = (path: string) => (path === pathNane ? '/' : path);

    const style = "mx-4 h-8 w-8 hover:shadow hover:text-gray-500"
    return (
        <header className="flex text-white absolute top-4 right-16">
            <Link href={getToggleHref("/chat")}><FiMessageSquare className={`${style} ${pathNane === "/chat" ? activeStyle : inactiveStyle}`} /></Link>
            <Link href={getToggleHref("/info")}><FiInfo className={`${style} ${pathNane === "/info" ? activeStyle : inactiveStyle}`} /></Link>
            <Link href={getToggleHref("/contact")}><FiMail className={`${style} ${pathNane === "/contact" ? activeStyle : inactiveStyle}`}  /></Link>
        </header>
    )
}

export default Header