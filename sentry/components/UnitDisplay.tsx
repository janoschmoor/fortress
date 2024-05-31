import NumberDisplay, { NumberDisplayProps } from "./NumberDisplay";



type UnitDisplayProps = {
    unit: string;
};

export default function UnitDisplay({ unit }: UnitDisplayProps) {

    const p: NumberDisplayProps = {
        title: "Unit Display",
        value: 0.6,
        lastUpdated: new Date(),
    }


    return (
        <div>
            {/* <h1>Unit Display</h1>
            <p>Unit: {unit}</p> */}
            <NumberDisplay {...p} />
        </div>
    );
};