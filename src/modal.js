// https://codesandbox.io/s/build-a-dialog-component-in-react-rj888

import React from "react";
import { useDialogPolyfill } from "./useDialogPolyfill";

function Modal({ closeOnOutsideClick, onRequestClose, open, className, children }) {
  const dialogRef = React.useRef(null);

  useDialogPolyfill(dialogRef);

  React.useEffect(() => {
      const dialogNode = dialogRef.current;
      if (open) {
        dialogNode.showModal();
      } else {
         dialogNode.hasAttribute('open') && dialogNode.close();
      }
  }, [open]);

  React.useEffect(() => {
    const dialogNode = dialogRef.current;
    const handleCancel = event => {
      event.preventDefault();
      onRequestClose();
    };
    dialogNode.addEventListener("cancel", handleCancel);
    return () => {
      dialogNode.removeEventListener("cancel", handleCancel);
    };
  }, [onRequestClose]);

  function handleOutsideClick(event) {
    const dialogNode = dialogRef.current;
    if (closeOnOutsideClick && event.target === dialogNode) {
      onRequestClose();
    }
  }

  return (
    <dialog ref={dialogRef} style={{padding: 0, border: 0}} onClick={handleOutsideClick}>
      <div  className={className}>
        {children}
      </div>
    </dialog>
  );
}

export default Modal;

