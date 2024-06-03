"use client";
import { useEffect, useState } from 'react';

export type ProgressBarProps = {
    low: number;
    high: number;
    value: number;
};

export default function LastUpdate(props: ProgressBarProps) {
    
    const [percent, setPercent] = useState<number>(0);

    useEffect(() => {
        setPercent((props.value - props.low) / (props.high - props.low) * 100);
    }, [props.value, props.low, props.high]);

    return (
        <div>
            <div style={{ width: '100%', height: '1em', backgroundColor: 'red' }}>
                <div style={{ width: `${percent}%`, height: '1em', backgroundColor: 'green' }}></div>
            </div>
            <p>{props.value}</p>
        </div>
    );
};
// 