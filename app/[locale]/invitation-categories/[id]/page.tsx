import { getInvitationCategoryById } from "@/app/lib/data";
import WeddingForm from "@/app/ui/invitation-categories/wedding-form";

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const invitationCategory = await getInvitationCategoryById(id);

    return (
        <div className="flex flex-col items-center px-5">
            {invitationCategory?.category === 'wedding'
                ? <WeddingForm category={invitationCategory} />
                : null}
        </div>
    );
};