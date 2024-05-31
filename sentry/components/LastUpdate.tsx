"use client";
import { useEffect, useState } from 'react';

export type LastUpdateProps = {
    time: Date;
};

export default function LastUpdate(props: LastUpdateProps) {

    const [timeElapsed, setTimeElapsed] = useState<string>('');
    const [isOld, setIsOld] = useState<boolean>(false);

    useEffect(() => {
        
        const interval = setInterval(() => {
            const now = new Date();
            const diff = Math.floor((now.getTime() - props.time.getTime()) / 1000);

            if (diff < 60) {
                setTimeElapsed(`${diff}s`);
                setIsOld(false);
            } else if (diff < 3600) {
                const minutes = Math.floor(diff / 60);
                setTimeElapsed(`${minutes}m`);
                setIsOld(minutes > 1);
            } else if (diff < 86400) {
                const hours = Math.floor(diff / 3600);
                setTimeElapsed(`${hours}h`);
                setIsOld(true);
            } else {
                const days = Math.floor(diff / 86400);
                setTimeElapsed(`${days}d`);
                setIsOld(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [props.time]);

    return <p>Time Elapsed: <span style={{ color: isOld ? 'red' : 'green' }}>{timeElapsed}</span></p>;
}