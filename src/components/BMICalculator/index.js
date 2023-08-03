import React, { useState } from "react";
import Label from "../Label";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBMIResult] = useState(null);

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = Math.round(bmi * 100) / 100;
        setBMIResult(roundedBMI);
    }

    return(
        <div>
            <h2>
                Body Mass Index (BMI) Calculator
            </h2>
            <div>

            </div>
        </div>
    );
}