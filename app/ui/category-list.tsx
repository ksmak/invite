import { InvitationCategory } from "@prisma/client";
import CategoryCard from "./category-card";

export default function CategoryList({
    categories
}: {
    categories: InvitationCategory[]
}) {
    return (
        <div className="w-full mt-5 flex flex-col md:grid md:grid-cols-2 items-center gap-4 flex-wrap">
            {categories.map((item) => (
                <CategoryCard category={item} key={item.id} />
            ))}
        </div>
    );
};