import React from 'react';
import './modalbutton.css';
import {useDispatch} from 'react-redux';
import {setModalIsActive} from "../../../store/modalIsActive/modalIsActiveActions";

type TProps = {
  text: string;
  link: string;
  icon: React.ReactNode;
}

export default function ModalButton({ text, link, icon }: TProps) {
  const dispatch = useDispatch();

  return (
    <a className="modal-button" href={link} download onClick={() => dispatch(setModalIsActive(false))}>
      <span className="modal-button__icon">{icon}</span>
      <span className="modal__button__text">{text}</span>
    </a>
  );
}