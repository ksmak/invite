"use client";

import { InvitationConfig } from "@/app/lib/definitions";
import Image from "next/image";

export default function MainView({ config }: { config: InvitationConfig }) {
  return (
    <div className="relative h-96 w-full flex flex-col justify-center items-center">
      <Image
        className="-z-10 object-fill"
        src={config.background || "/default.png"}
        fill
        alt="background"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Image
        className="z-10"
        src={config.foreground || "/default.png"}
        height={250}
        width={250}
        alt="foreground"
      />
    </div>
  );
}
