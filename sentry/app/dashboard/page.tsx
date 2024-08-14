
"use client"

import MapDisplay from '@/components/MapDisplay';
import UnitDisplay from '../../components/UnitDisplay';
import { fetchData } from '../lib/actions';

export default function DashboardPage() {


    // test fetch data
    var handler = () => {
        fetchData().then((data) => {
            console.log(data);
        });
    }


    return (
        <div className="dashboard">
            <div className="grid grid-cols-3 gap-4">
                {/* Add your UnitDisplay components here */}
                <UnitDisplay unit="exampleUnit1" />
                <UnitDisplay unit="exampleUnit2" />
                <UnitDisplay unit="exampleUnit3" />
                <UnitDisplay unit="exampleUnit2" />
                <MapDisplay />
                {/* Add more UnitDisplay components as needed */}
            </div>
            <button onClick={handler} className="btn btn-primary">Refresh</button>
        </div>
    );
};