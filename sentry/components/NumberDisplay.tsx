export type NumberDisplayProps = {
    title: string;
    value: number;
    lastUpdated: Date;
};

export default function NumberDisplay(props: NumberDisplayProps) {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.value}</p>
            <p>Last Updated: {props.lastUpdated.toLocaleString()}</p>
        </div>
    );
};