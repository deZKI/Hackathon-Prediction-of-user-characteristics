import React from 'react';
import './exportbutton.css';
import {setModalIsActive} from "../../store/modalIsActive/modalIsActiveActions";
import ExportModal from "../ExportModal/ExportModal";
import {useDispatch, useSelector} from "react-redux";
import {TInitialState} from "../../store/reducer";
import DownloadIcon from "../Icons/DownloadIcon";

export default function ExportButton() {
  const modalIsActive = useSelector<TInitialState, boolean>(state => state.modalIsActive.modalIsActive);
  const dispatch = useDispatch();

  return (
    <>
      <button className="header__export-button" onClick={() => dispatch(setModalIsActive(true))}>
        <DownloadIcon width={28} height={28}/>
      </button>
      {modalIsActive && (
        <ExportModal />
      )}
    </>
  );
}