"use client";

import { InvitationConfig } from "@/app/lib/definitions";
import DateView from "@/app/ui/invitation/views/date_view";
import InviteView from "@/app/ui/invitation/views/invite_view";
import MainView from "@/app/ui/invitation/views/main_view";
import PlaceView from "@/app/ui/invitation/views/place_view";
import WishView from "@/app/ui/invitation/views/wish_view";
import { useState } from "react";

export default function Container() {
  const [config, setConfig] = useState<InvitationConfig>({
    invitationText: `<div style={display: 'flex'}>
      <div className=''>Құрметті қонақтар!</div>
      <div>Сіз(дер)ді ұлымыз Ерген мен келініміз Мединаның шаңырақ көтеру тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы болуға шақырамыз</div>
      </div>`,
    dateText: `<div>Тойдың басталу уақыты:</div>`,
    date: "2024-12-14 18:13",
  });

  return (
    <div className="mt-4 flex flex-col items-center gap-2">
      <MainView config={config} />
      <InviteView config={config} />
      <DateView config={config} />
      <PlaceView />
      <WishView />
    </div>
  );
}
