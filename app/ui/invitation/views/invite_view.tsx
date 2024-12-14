import { InvitationConfig } from "@/app/lib/definitions";
import Label from "@/app/ui/invitation/label";

export default function InviteView({ config }: { config: InvitationConfig }) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <Label content={config.invitationText} />
    </div>
  );
}
