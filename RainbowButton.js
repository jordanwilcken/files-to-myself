import React from "react";
import { useState } from "react";

const RainbowButton = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
  ];

  const [buttonColor, setButtonColor] = useState('red');

  const getNextColor = currentColor => {
    const index = colors.indexOf(currentColor);
    return index === -1
      ? "red"
      : colors[index + 1] !== undefined
      ? colors[index + 1]
      : colors[0];
  };

  const changeColor = () =>
    setButtonColor(getNextColor (buttonColor));

  return <button style={{background: buttonColor}} onClick={changeColor}>I am the rainbow button</button>;
};

export default RainbowButton;
