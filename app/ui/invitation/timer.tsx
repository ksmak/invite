import moment from "moment";
import { useEffect, useState } from "react";

export default function Timer({ dt }: { dt: Date | undefined }) {
  const [diffDate, setDiffDate] = useState<Date | undefined>();
  useEffect(() => {
    if (!dt) return;
    setDiffDate(dt - Date.now());
  });
  return <div>{moment(dt).format("DD.MM.YYYY HH.mm.ss")}</div>;
}
