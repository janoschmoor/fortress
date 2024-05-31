import NumberDisplay, { NumberDisplayProps } from "./NumberDisplay";
import ProgressDisplay from "./ProgressDisplay";



type UnitDisplayProps = {
    unit: string;
};

export default function UnitDisplay({ unit }: UnitDisplayProps) {

    const p: NumberDisplayProps = {
        title: "Number Display",
        value: 0.6,
        lastUpdated: new Date(),
    }


    return (
        <div>
            {/* <h1>Unit Display</h1>
            <p>Unit: {unit}</p> */}
            <NumberDisplay {...p} />
            <ProgressDisplay title="Progress Display" low={0} high={1} value={0.6} lastUpdated={new Date()} />
        </div>
    );
};