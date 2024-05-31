import LastUpdate from "./LastUpdate";
import ProgressBar from "./ProgressBar";

export type ProgressDisplayProps = {
    title: string;
    low: number;
    high: number;
    value: number;
    lastUpdated: Date;
};

export default function NumberDisplay(props: ProgressDisplayProps) {

    return (
        <div>
            <p>{props.title}</p>
            <ProgressBar low={props.low} high={props.high} value={props.value} />
            <LastUpdate time={props.lastUpdated} />
        </div>
    );
};