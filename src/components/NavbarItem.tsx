import {Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import {ScrollArea} from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem {
    href: string;
    label?: string;
    children?: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange?: (open: boolean) => void;
}

export const NavbarSidebar = ({
                                  items, open, onOpenChange,
                              }: Props) => {
    console.log(items);
    return (

        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader
                    className="p-4 border-b"
                >
                    <div className="flex items-center">
                        <SheetTitle>
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {
                        items.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"

                            >
                                {item.label || item.children}
                            </Link>))

                    }
                    <div className="border-t">
                        <Link
                        href='/login   '
                        className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Login
                        </Link>

                        <Link
                            href='/sign-in'
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                        >
                            Start Selling
                        </Link>
                    </div>
                </ScrollArea>
            </SheetContent>

        </Sheet>);
};