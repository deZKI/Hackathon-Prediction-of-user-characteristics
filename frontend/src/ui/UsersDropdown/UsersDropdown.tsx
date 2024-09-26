import React from 'react';
import './usersdropdown.css';
import {setDropdownIsOpen} from "../../store/dropdownIsOpen/dropdownIsOpenActions";
import {generateRandomString} from "../../utils/generateRandomString";
import {useDispatch, useSelector} from "react-redux";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import {TInitialState} from "../../store/reducer";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import UserIcon from "../Icons/UserIcon";

export default function UsersDropdown() {
  const dropdownIsOpen = useSelector<TInitialState, boolean>(state => state.dropdownIsOpen.dropdownIsOpen);
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setDropdownIsOpen(!dropdownIsOpen))}>
      <button className="users-dropdown__button" type="button">
        <span className="users-dropdown__icon">
          <UserIcon width={16} height={20} />
        </span>
        <span className="users-dropdown__text">id14679</span>
        {dropdownIsOpen
          ? <span className="users-dropdown__icon">
              <ArrowDownIcon width={12} height={12} />
            </span>
          : <span className="users-dropdown__icon">
              <ArrowUpIcon width={12} height={12} />
            </span>
        }
      </button>
      {dropdownIsOpen && (
        <div className="dropdwon__wrapper" onClick={() => setDropdownIsOpen(false)}>
          <ul className="dropdown__list">
            {Array.from(Array(10).keys()).map(() =>
              <li className="dropdown__item" key={generateRandomString()}></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}