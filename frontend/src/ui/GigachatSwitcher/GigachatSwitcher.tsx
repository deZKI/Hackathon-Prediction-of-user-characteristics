import React from 'react';
import './gigachatswitcher.css';
import {setGigachatIsActive} from "../../store/gigachatIsActive/gigachatIsActiveActions";
import {useDispatch, useSelector} from "react-redux";
import {TInitialState} from "../../store/reducer";
import classnames from 'classnames';

export default function GigachatSwitcher() {
  const gigachatIsActive = useSelector<TInitialState, boolean>(state => state.gigachatIsActive.gigachatIsActive);
  const dispatch = useDispatch();

  return (
    <div className="header__gigachat-switcher">
      <span className="header__gigachat-switcher__text">GigaChat</span>
      <button
        className={classnames("header__gigachat-switcher__button", {
          ["header__gigachat-switcher__button--active"]: gigachatIsActive
        })}
        onClick={() => dispatch(setGigachatIsActive(!gigachatIsActive))}
      >
        <div
          className={classnames("header__gigachat-switcher__circle", {
            ["header__gigachat-switcher__circle--active"]: gigachatIsActive
          })}
        >
        </div>
      </button>
    </div>
  );
}