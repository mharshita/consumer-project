import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import CustomButton from "ui-library/dist/CustomButton.js";
import CustomModal from "ui-library/dist/CustomModal.js";

function App() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Cards />
        <CustomButton
          text="Click here to open Modal"
          color="secondary"
          onClick={handleClick}
        />
        <CustomModal
          open={open}
          handleClose={handleClose}
          header="Modal Header"
          content="This is a draggable modal. The content of Modal will appear here."
          buttonText="Close"
        />
      </header>
    </div>
  );
}

export default App;
