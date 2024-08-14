
"use client";

import MapDisplay from '@/components/MapDisplay';
import UnitDisplay from '../../components/UnitDisplay';
import { fetchData } from '../lib/actions';
import WeatherDisplay from '@/components/WeatherDisplay';

export default function DashboardPage() {


    return (
        <div className="dashboard">
            <div className="grid grid-cols-3 gap-4">
                {/* Add your UnitDisplay components here */}
                <UnitDisplay unit="exampleUnit1" />
                <UnitDisplay unit="exampleUnit2" />
                <UnitDisplay unit="exampleUnit3" />
                <UnitDisplay unit="exampleUnit2" />
                <MapDisplay />
                <WeatherDisplay />
                {/* Add more UnitDisplay components as needed */}
            </div>
        </div>
    );
};