'use client'

import { InvitationCategory } from "@prisma/client";
import StringField from "./string-field";
import Image from "next/image";
import { useState } from "react";
import { WeddingConfig } from "@/app/lib/definitions";
import { Carousel } from "flowbite-react";
import { useTranslations } from "next-intl";

export default function WeddingForm({
    category
}: {
    category: InvitationCategory
}) {
    const t = useTranslations();
    const [config, setConfig] = useState<WeddingConfig>({
        groom: '#жігіттің есімі|#имя жениха|#the groom\'s name',
        bride: '#қыздың есімі|#имя невесты|#the bride\'s name',
        owners: '#той иелері|#организаторы торжества|#the organizers of the celebration',
        date: '#басталу күні|#дата проведения|#date of the event',
        place: '#өткізу орны|#место проведения|#place of the event',
    })
    const [showModal, setShowModal] = useState<boolean>(false);
    const [field, setField] = useState<string>('');

    return (
        <div className="mt-5 w-full flex flex-col gap-4 items-center">
            <div className="relative mt-1 w-full border h-96 flex justify-center items-center">
                <Carousel slide={false}>
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                </Carousel>
            </div>
            <div className="mt-5 text-center text-md font-medium antialiased tracking-wide leading-7">
                <div className="text-xl font-bold uppercase text-center">
                    Құрметті қонақтар!
                </div>
                <div>
                    Сіз(дер)ді ұлымыз {' '}
                    <StringField
                        fieldVal={config.groom}
                        handleClick={() => { setField('groom'); setShowModal(true) }}
                    />
                    мен келініміз{' '}
                    <StringField
                        fieldVal={config.bride}
                        handleClick={() => { setField('bride'); setShowModal(true) }}
                    />
                    шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз.
                </div>
                <div className="mt-5 text-lg font-medium text-center text-gold">
                    Той иелері:
                </div>
                <div className="text-lg font-medium text-center">
                    <StringField
                        fieldVal={config.owners}
                        handleClick={() => { setField('owners'); setShowModal(true) }}
                    />
                </div>
                <div className="mt-5 text-lg font-medium text-center text-gold">
                    Тойдың басталу уақыты:
                </div>
                <div className="text-lg font-medium text-center">
                    <StringField
                        fieldVal={config.date}
                        handleClick={() => { setField('date'); setShowModal(true) }}
                    />
                </div>
                <div className="mt-5 text-lg font-medium text-center text-gold">
                    Тойдың мекен-жайы:
                </div>
                <div className="text-lg font-medium text-center">
                    <StringField
                        fieldVal={config.place}
                        handleClick={() => { setField('place'); setShowModal(true) }}
                    />
                </div>
            </div>
        </div>
    );
};