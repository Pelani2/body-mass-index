import React, { useState } from "react";
import Label from "../Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Typography from "../Typography";
import "./bmicalculator-styles.scss";

const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBMIResult] = useState(null);
};