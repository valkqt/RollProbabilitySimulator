import classNames from "classnames";
import css from "./UserControls.module.css";
import {
  StandardRoll,
  CalculateWinProbability,
} from "../../functions/index.js";
import { useState } from "react";

export default function UserControls({
  userRoll,
  setUserRoll,
  setWinProbability,
}) {
  const random = Math.ceil(Math.random() * 99);

  return (
    <div className={classNames(css.controlsContainer, "container")}>
      <div style={{ position: "relative" }}>
        <img src="images/coffer.png" />
        <div className="overlay">
          <span>{userRoll}</span>
        </div>
      </div>
      <div className={css.userControls}>
        <button
          onClick={() => {
            setUserRoll(random);
            setWinProbability(CalculateWinProbability(random));
          }}
        >
          Roll
        </button>
        <button
          onClick={() => {
            setUserRoll(null);
            setWinProbability(0);
          }}
        >
          Reset
        </button>
        <input
          type="number"
          min={1}
          max={99}
          onChange={(e) => {
            let pepe = parseInt(e.target.value);

            if (e.target.value < 1) {
              pepe = 1;
            }

            if (e.target.value > 99) {
              pepe = 99;
            }
            setUserRoll(pepe);
            setWinProbability(CalculateWinProbability(pepe));
          }}
          placeholder="Input"
        />
      </div>
    </div>
  );
}
