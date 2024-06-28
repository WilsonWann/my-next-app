import React, { FC } from "react";

type SwipeDotsProps = {
  maxSteps: number;
  activeStep: number;
};

const SwipeDots: FC<SwipeDotsProps> = ({ maxSteps, activeStep }) => {
  return (
    <ul className="item-center absolute bottom-3 !flex w-full justify-center gap-4 bg-transparent">
      {Array.from(Array(maxSteps), (_, index) => {
        let backgroundColor =
          index === activeStep ? "bg-primary" : "bg-primary-foreground";

        return (
          <li
            key={index}
            className={`h-2 w-2 cursor-pointer select-none rounded-full ${backgroundColor} hover:bg-primary`}
          />
        );
      })}
    </ul>
  );
};

export default SwipeDots;
