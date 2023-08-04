import React, { useState } from "react";
import BMICalculator, { getBMICategory } from "../../components/BMICalculator";
import BMIHealthChart from "../../components/BMIHealthChart";

export default function Home() {
    const [bmiResult, setBMIResult] = useState(null);

    const handleBMICalculated = (calculatedBMI) => {
        setBMIResult(calculatedBMI);
    };

    return(
        <div>
            <BMIHealthChart 
                BMIResult={bmiResult}
            />
            <BMICalculator
                BMIResult={bmiResult}
                onBMICalculated={handleBMICalculated}
            />
        </div>
    );  
}