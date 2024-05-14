

type UnitDisplayProps = {
    unit: string;
};

export default function UnitDisplay({ unit }: UnitDisplayProps) {
    return (
        <div>
            <h1>Unit Display</h1>
            <p>Unit: {unit}</p>
        </div>
    );
};