import React from "react";
import { getBMICategory } from "../BMICalculator";
import Typography from "../../components/Typography";
import "./bmi-health-chart-styles.scss";


export default function BMIHealthChart({ BMIResult }) {
    const bmiCategory = getBMICategory(BMIResult);
    return(
        <section className="BMIHealthChart">
            <div 
                className={`BMIHealthChart__ category ${bmiCategory} ${bmiCategory ? "glow" : ""}`}
            >
                <Typography variant="h2">
                    {bmiCategory?.replace("-", " ")}
                </Typography>
                <Typography>
                    {bmiCategory === "underweight" && "Less than 18.5"}
                    {bmiCategory === "normal-weight" && "18.5 - 24.9"}
                    {bmiCategory === "overweight" && "25 - 29.9"}
                    {bmiCategory === "obese" && "30 or greater"}
                </Typography>
            </div>
        </section>
    );
}