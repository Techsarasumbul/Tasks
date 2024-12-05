import React, { useState } from 'react';
import AddTaskModal from './components/AddTaskModal'; // Ensure the file path is correct

import { Button } from '@mui/material';

function App() {
  // State to control the modal's visibility
  const [open, setOpen] = useState(false);

  // Functions to open and close the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
       {/* Existing content */}

      {/* Button to open the AddTaskModal */}
      <Button onClick={handleOpen} variant="contained" color="primary">
        Add Task
      </Button>

      {/* AddTaskModal component */}
      <AddTaskModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default App;
