'use client'
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Poppins} from "next/font/google";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {NavbarSidebar} from "@/components/NavbarItem";
import {useState} from "react";
import {MenuIcon} from "lucide-react";

const poppins = Poppins(
    {
        subsets: ["latin"],
        weight:[ "700"],
    }
)
interface NavbarItemsProps {
    href: string;
    children: string;
    active?: boolean;
}

const navbarItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    {href: "/features", label: "Features"},
    {href: "/pricing", label: "Pricing"},

];

export const NavbarItems = ({href, children, active}: NavbarItemsProps) => {
    return (
     <Button
         asChild
         variant="outline"
         className={cn(
            "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent" +
            "px-3.5 text-lg",
            active ? "bg-gray-200" : "hover:bg-gray-100",
            poppins.className
        )}
     >

         <Link href={href}>
             {children}
         </Link>
     </Button>
    );
};

export const Navbar = () => {
    const pathname = usePathname()
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
    <nav className="h-20 flex border-b justify-between  font-medium bg-white">
        <Link href="/public" className="pl-6 flex items-center">
            <span className={cn('text-5xl font-semibold',poppins.className)}>Home</span>
        </Link>
        <NavbarSidebar items={navbarItems} open={openSidebar} onOpenChange={setOpenSidebar}/>
        <div className="items-center hidden gap-4 lg:flex pr-6">
            {navbarItems.map((item) => (
                <NavbarItems
                    key={item.href}
                    href={item.href}
                    active={pathname === item.href}
                >
                    {item.label}
                </NavbarItems>
            ))}

        </div>
        <div className="hidden lg:flex">
            <Button
                    variant="secondary"
                    className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none text-lg bg-white hover:bg-pink-400 transition-colors text-lg"
            >
                <Link href="/login">Login</Link>
            </Button>
            <Button
                variant="secondary"
                className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none text-lg bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
            >
                <Link href="/login">
                    Start selling
                </Link>
            </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
            <Button
                variant="ghost"
                className="size-12 border-transparent bg-white"
                onClick={() => setOpenSidebar(!openSidebar)}
            >
                <MenuIcon />
            </Button>
        </div>
    </nav>
        )
}