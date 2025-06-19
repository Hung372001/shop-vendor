'use client'


import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

interface Props {
    children: React.ReactNode;
}
export default function HomeLayout({children}: Props) {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar/>
            <div className="flex-1 bg-[#F4F4F0]">
                {children}
            </div>
            <Footer/>
        </div>);
}
