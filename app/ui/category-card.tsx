import { InvitationCategory } from "@prisma/client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from '@/i18n/routing';

export default function CategoryCard({
    category
}: {
    category: InvitationCategory
}) {
    const t = useTranslations();

    return (
        <Link
            className="relative w-full h-28 bg-gradient-to-r from-secondary to-white"
            href={`/invitation-categories/${category.id}`}
        >
            <Image
                src="/media/default.png"
                fill
                alt="invitation category image"
                className="object-contain object-right"
            />
            <div className="w-full h-full flex items-center">
                <div className="p-5 text-lg md:text-2xl font-bold tracking-tight text-gold">
                    {t(`invitationCategory.name.${category.category}`)}
                </div>
            </div>
        </Link>
    );
};