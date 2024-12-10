import { getInvitationCategories } from "@/app/lib/data";
import CategoryList from "@/app/ui/category-list";

export default async function Home() {

  const invitationCategories = await getInvitationCategories();

  return (
    <div className="flex flex-col items-center px-5">
      <CategoryList categories={invitationCategories} />
    </div>
  );
}
