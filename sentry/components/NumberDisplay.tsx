import LastUpdate from "./LastUpdate";

export type NumberDisplayProps = {
    title: string;
    value: number;
    lastUpdated: Date;
};

export default function NumberDisplay(props: NumberDisplayProps) {

    return (
        <div>
            <p>{props.title}</p>
            <p className='text-3xl'>{props.value}</p>
            {/* <p>Last Updated: {props.lastUpdated.toLocaleString()}</p> */}
            <LastUpdate time={props.lastUpdated} />
        </div>
    );
};