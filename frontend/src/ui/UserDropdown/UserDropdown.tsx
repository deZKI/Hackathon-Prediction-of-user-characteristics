import React, {useEffect, useRef} from 'react';
import './userdropdown.css';
import {setDropdownIsOpen} from "../../store/dropdownIsOpen/dropdownIsOpenActions";
import {generateRandomString} from "../../utils/generation/generateRandomString";
import {setChosenUser} from "../../store/chosenUser/chosenUserActions";
import {useDispatch, useSelector} from "react-redux";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import {TInitialState} from "../../store/reducer";
import ArrowUpIcon from "../Icons/ArrowUpIcon";
import UserIcon from "../Icons/UserIcon";

export default function UserDropdown() {
  const dropdownIsOpen = useSelector<TInitialState, boolean>(state => state.dropdownIsOpen.dropdownIsOpen);
  const chosenUser = useSelector<TInitialState, string>(state => state.chosenUser.chosenUser);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  function handleItemClick(event: React.MouseEvent<HTMLLIElement>) {
    const user = event.target as HTMLLIElement;
    const userName = user.textContent;

    dispatch(setChosenUser(userName));
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        dispatch(setDropdownIsOpen(false));
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="users-dropdown" ref={dropdownRef} onClick={() => dispatch(setDropdownIsOpen(!dropdownIsOpen))}>
      <button className="users-dropdown__button" type="button">
        <span className="users-dropdown__icon">
          <UserIcon width={16} height={20} />
        </span>
        <span className="users-dropdown__text">{chosenUser}</span>
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
        <ul className="users-dropdown__list" onClick={() => setDropdownIsOpen(false)}>
          {Array.from(Array(5).keys()).map(() =>
            <li
              className="users-dropdown__item"
              onClick={handleItemClick}
              key={generateRandomString()}
            >
              <span className="users-dropdown__item__text">{generateRandomString()}</span>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}