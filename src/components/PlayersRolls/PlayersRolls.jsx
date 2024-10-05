import classNames from "classnames";
import css from "./PlayersRolls.module.css";
import { OtherRolls } from "../../functions";

export default function PlayersRolls({ roll }) {
  const players = [0, 1, 2, 3, 4, 5, 6];
  const rolls = OtherRolls(roll);
  return (
    <>
      <h3>The other players rolled:</h3>

      <div className={classNames(css.rolls, "container")}>
        {players.map((n) => (
          <div key={n} style={{ position: "relative" }}>
            <img src="images/unknown.webp" />
            <div className="overlay">
              <span>{roll != null ? rolls[n] : " "}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
