import React, { useState } from "react";
import Label from "../Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "../Typography";

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
            <Typography variant="h2">
                Body Mass Index (BMI) Calculator
            </Typography>
            <div>
                <Label>
                    Height (cm):
                </Label>
                <Input 
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                />
            </div>
            <div>
                <Label>
                    Weight (kg):
                </Label>
                <Input 
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                />
            </div>
            <Button 
                onClick={calculateBMI}
                variant="primary"
            >
                Calculate BMI
            </Button>
            {bmiResult !== null && (
                <div className="BMI__result">
                    <Typography variant="h3">
                        Your BMI: <Typography variant="span">
                            <Typography>
                                {bmiResult}
                            </Typography>
                        </Typography>
                    </Typography>
                </div>
            )}
        </div>
    );
}