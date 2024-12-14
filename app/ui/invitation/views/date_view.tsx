import { InvitationConfig } from "@/app/lib/definitions";
import Label from "@/app/ui/invitation/label";
import moment from "moment";
import Timer from "@/app/ui/invitation/timer";

export default function DateView({ config }: { config: InvitationConfig }) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-4">
      <Label content={config.dateText} />
      {config.date && (
        <div className="text-md font-medium font-roboto">
          {moment(config.date).format("DD.MM.YYYY")}
        </div>
      )}
      {config.date && <Timer dt={config.date} />}
    </div>
  );
}
