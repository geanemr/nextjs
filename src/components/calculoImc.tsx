'use client'
import React from "react";
import Button from "./button";
import Input from "./input";

export default function CalculoImc() {
  const [weightvalue, setWeightValue] = React.useState(0);
  const [heightvalue, setHeightValue] = React.useState(0);
  const [imc, setImc] = React.useState(0);

  function handleWeightValue(event: any) {
    setWeightValue(event.target.value)
  }

  function handleHeightValue(event: any) {
    setHeightValue(event.target.value)
  }

  function handleImc() {
    setImc(weightvalue / (heightvalue * heightvalue))
  }
    return (
        <div>
        <Input label="peso" id="peso" name="peso" onChange={handleWeightValue} value={weightvalue}/>
        <Input label="altura" id="altura" name="altura" onChange={handleHeightValue} value={heightvalue}/>
        <Button onClick={handleImc}>Calcular IMC</Button>
        <div>IMC: {imc}</div>
        </div>
    )
}