import React, {useEffect, useRef} from "react";
import './exportmodal.css';
import {setModalIsActive} from "../../store/modalIsActive/modalIsActiveActions";
import ModalButton from "./ModalButton/ModalButton";
import CrossIcon from "../Icons/CrossIcon";
import ExcelIcon from "../Icons/ExcelIcon";
import {useDispatch} from "react-redux";
import PdfIcon from "../Icons/PdfIcon";

export default function ExportModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log("Mouse event:", event);
      console.log("Modal ref:", modalRef.current);
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        console.log("Click outside detected");
        dispatch(setModalIsActive(false));
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <div className="header__export-modal">
      <div className="header__export-modal__wrapper" ref={modalRef}>
        <div className="header__export-modal__header">
          <span className="header__export-modal__text">
            В какой формат экспортировать?
          </span>
          <button className="header__export-modal__icon" onClick={() => dispatch(setModalIsActive(false))}>
            <CrossIcon />
          </button>
        </div>
        <div className="header__export-modal__content">
          <ModalButton text="Excel" link="/" icon={<ExcelIcon />} />
          <ModalButton text="PDF" link="/" icon={<PdfIcon />} />
        </div>
      </div>
    </div>
  );
}