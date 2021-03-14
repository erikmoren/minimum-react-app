import React, { useState } from 'react';
import Modal from "./modal";
import styled from 'styled-components';
// import './app.css';

const StyledModal = styled(Modal)`
  border: 1px solid var(--sky);  
  border-radius: 6px;
  padding: 1rem;
`;

function App()
{
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div>Hello</div>
      <button onClick={(e) => setOpen(!open)}>Click to toggle</button>
      <StyledModal open={open} onRequestClose={() => setOpen(false)} closeOnOutsideClick>
        I dialogen
      </StyledModal>
    </div>
  );
}

export default App;
