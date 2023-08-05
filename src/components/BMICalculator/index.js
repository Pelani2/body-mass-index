import React, { useState, useRef } from "react";
import Label from "../Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "../Typography";
import "./bmicalculator-styles.scss";

const BMICalculator = () => {
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
        const roundedBMI = Math.floor(bmi * 100) / 100;
        setBMIResult(roundedBMI);
    };

    const getBMICategory = (bmiResult) => {
        if (bmiResult === null) return null
        if (bmiResult < 18.5) {
            return "Underweight";
        } else if (bmiResult >= 18.5 && bmiResult <= 24.9) {
            return "Normal Weight"
        } else if (bmiResult >= 24.9 && bmiResult <= 29.9) {
            return "Overweight";
        } else {
            return "Obese";
        }
    };

    const bmiCategory = getBMICategory(bmiResult);

    return(
        <form 
            className="BMI__container"
        >
            <Typography variant="h2">
                BMI Calculator
            </Typography>
            <div className="BMI__input-box">
                <Label className="secondary">
                    Height (cm):
                </Label>
                <Input 
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                />
            </div>
            <div className="BMI__input-box">
                <Label className="secondary">
                    Weight (kg):
                </Label>
                <Input 
                    type="number"
                    value={weight}
                    onChange={handleWeightChange}
                />
            </div>
            <Button 
                type="submit"
                variant="primary"
                onClick={calculateBMI}
            >
                Calculate BMI
            </Button>
            <div className="BMI__flex">
                {bmiResult !== null && (
                    <div className="BMI__result">
                        <Typography variant="h3">
                            Your BMI:
                        </Typography>
                        <Typography variant="span" className="BMI__number">
                            {bmiResult}
                        </Typography>
                    </div>
                )}
                {bmiCategory && (
                    <div className="BMI__health-range">
                        <Typography variant="h3">
                            BMI Category: 
                        </Typography>
                        <Typography 
                            className={`BMI__category-${bmiCategory.toLowerCase()}`}
                            variant="span"
                        >
                            {bmiCategory}
                        </Typography>
                    </div>
                )}
            </div>
        </form>        
    );
};

export default BMICalculator;