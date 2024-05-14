import UnitDisplay from '../../components/UnitDisplay';

export default function DashboardPage() {
    return (
        <div className="dashboard">
            <div className="grid grid-cols-3 gap-4">
                {/* Add your UnitDisplay components here */}
                <UnitDisplay unit="exampleUnit1" />
                <UnitDisplay unit="exampleUnit2" />
                <UnitDisplay unit="exampleUnit3" />
                {/* Add more UnitDisplay components as needed */}
            </div>
        </div>
    );
};