'use client'

import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { Drawer, Sidebar } from "flowbite-react";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { InvitationCategory } from "@prisma/client";
import { IoBookmarkOutline } from "react-icons/io5";

export default function SideNav({
    categories
}: {
    categories: InvitationCategory[]
}) {
    const locale = useLocale();
    const t = useTranslations();
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);

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
            <IoMdMenu className="h-8 w-8 self-center hover:cursor-pointer" onClick={() => setIsOpen(true)} />
            <Drawer open={isOpen} onClose={handleClose}>
                <Drawer.Header title="" titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <Sidebar.Items>
                                <Sidebar.ItemGroup>
                                    <div className="text-lg text-gray-700 font-medium">Добавить новый шаблон:</div>
                                    {categories.map(item => {
                                        const item_text = t(`invitationCategory.name.${item.category}`);
                                        return <Sidebar.Item key={item.id} href={`/${locale}/invitation-categories/${item.id}/edit`} icon={IoBookmarkOutline}>
                                            {`${item_text}`}
                                        </Sidebar.Item>
                                    })}
                                </Sidebar.ItemGroup>
                            </Sidebar.Items>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>

        </div>
    );
};