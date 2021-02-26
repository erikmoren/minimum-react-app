import React, { useState } from 'react';
import { Modal } from "./Modal";
import './app.css';

function App()
{
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div>Hello</div>
      <button onClick={(e) => setOpen(!open)}>Click to toggle</button>
      <Modal open={open} onRequestClose={() => setOpen(false)} closeOnOutsideClick>
        I dialogen
      </Modal>
    </div>
  );
}

export default App;
