import React from "react";
import BMICalculator from "../../components/BMICalculator";
import BMIHealthChart from "../../components/BMIHealthChart";

export default function Home() {
    return(
        <div>
            <BMIHealthChart />
            <BMICalculator />
        </div>
    );  
}