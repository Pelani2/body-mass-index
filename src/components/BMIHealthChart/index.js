import React from "react";
import Typography from "../../components/Typography";
import "./bmi-health-chart-styles.scss";

export default function BMIHealthChart() {
    return(
        <section className="BMIHealthChart">
            <div className="BMIHealthChart__category underweight">
                <Typography variant="h2">
                    Underweight
                </Typography>
                <Typography>
                    Less than 18.5
                </Typography>
            </div>
            <div className="BMIHealthChart__category normal-weight">
                <Typography variant="h2">
                    Normal Weight
                </Typography>
                <Typography>
                    18.5 - 24.9
                </Typography>
            </div>
            <div className="BMIHealthChart__category overweight">
                <Typography variant="h2">
                    Overweight
                </Typography>
                <Typography>
                    25 - 29.9
                </Typography>
            </div>
            <div className="BMIHealthChart__category obese">
                <Typography variant="h2">
                    Obese
                </Typography>
                <Typography>
                    30 or greater
                </Typography>
            </div>
        </section>
    );
}