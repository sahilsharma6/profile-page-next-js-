import { useState } from "react";

const COLORS = [
  "blue",
  "green",
  "red",
  "yellow",
  "purple",
  "pink",
  "indigo",
  "teal",
];

export const useRandomColor = () => {
  const [color] = useState(() => {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  });

  return color;
};
