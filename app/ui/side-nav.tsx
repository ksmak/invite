import Image from "next/image";
import { IoMdMenu } from "react-icons/io";

export default function SideNav() {
    return (
        <div className="h-28 w-full bg-primary bg-gradient-to-br from-primary to-secondary flex justify-between px-10 border-b-4 border-b-gold text-gold">
            <div className="flex items-center gap-4">
                <Image
                    className=""
                    alt="logo"
                    src='/logo.png'
                    width={100}
                    height={100}
                />
                <div className="font-mono font-bold text-lg uppercase tracking-wider">invite.kz</div>
            </div>
            <IoMdMenu className="h-8 w-8 self-center" />

        </div>
    );
};