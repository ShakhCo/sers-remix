import { Navbar, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarMenuToggle, NavbarItem, Link, Button } from "@heroui/react";
import React from "react";

import { IoLogoTwitter } from "react-icons/io5";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export const ChevronDown = ({ fill, size, height, width, ...props }: {
    fill: string, size: string, height: string, width: string,
}) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems: { label: string, path: string }[] = [
        { label: 'Sellers', path: '/sellers/' },
        { label: 'Buyers', path: '/buyers/' },
        { label: 'Pricing', path: '/pricing/' },
        { label: 'Pricing', path: '/pricing/' },
    ];

    return (
        <Navbar position="static" className="max-w-[96rem] 2xl:rounded-xl mx-auto bg-customDarkBlue dark:bg-gray-950 py-0 md:py-4 dark:border-b-gray-800" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>

            <NavbarContent className="lg:hidden" justify="start">
                <NavbarMenuToggle className="text-white" aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>


            <NavbarContent className="lg:hidden pr-3" justify="center">
                <NavbarBrand>
                    <IoLogoTwitter className="text-white text-2xl" />
                    <p className="font-bold text-inherit text-white text-lg xl:text-xl">SERS</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarBrand className="hidden lg:flex gap-2">
                <IoLogoTwitter className="text-white text-2xl" />
                <p className="font-bold text-inherit text-white text-lg xl:text-xl">SERS</p>
            </NavbarBrand>

            <NavbarContent className="hidden lg:flex gap-8" justify="center">
                {menuItems.map((item, index) => {
                    return (
                        <NavbarItem key={item.label + '-' + index}>
                            <Link className="text-white text-lg xl:text-xl" href="#">
                                {item.label}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem className="">
                    <Link className="text-white" href="#">Login</Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="bg-customDarkBlue">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full text-white"
                            href="#"
                            size="lg"
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

        </Navbar>
    );
}
