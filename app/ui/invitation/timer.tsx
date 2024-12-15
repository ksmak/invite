import { useEffect, useState } from "react";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Timer({ dt }: { dt: string | undefined }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = (dt: string) => {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let time = Date.parse(dt) - Date.now();

    if (time > 0) {
      days = Math.floor(time / DAY);
      time = time % DAY;
      hours = Math.floor(time / HOUR);
      time = time % HOUR;
      minutes = Math.floor(time / MINUTE);
      time = time % MINUTE;
      seconds = Math.floor(time / SECOND);
    }

    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    if (!dt) return;

    const interval = setInterval(() => getTime(dt), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {days > 0 || hours > 0 || minutes > 0 || seconds > 0 ? <div>
        {`Тойдың басталуына ${days} күн ${String(hours).padStart(2, '0')} сағат ${String(minutes).padStart(2, '0')} минут ${String(seconds).padStart(2, '0')} секунд қалды`}
      </div> : null}
    </div>
  )
}
