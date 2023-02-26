import './App.css';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  const getInformation = () => {
    setData([...data, {task }]);
    setTask("");
  }

  const deleteInformation = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <div className='header'>TO-DO List</div>
      <div className='main'>
        <div className='container'>
          <TextField id="outlined-basic" label="Task" variant="outlined" color="secondary" value={task} onChange={(e) => { setTask(e.target.value) }} />
          <Fab color="secondary" aria-label="add" onClick={getInformation}>
            <AddIcon />
          </Fab>
        </div>
        {
          data.map((element,index) => {
            return(
              <div key={index} className='result' >
              <p>{element.task}</p>
              <IconButton aria-label="delete" onClick={() => deleteInformation(index)}>
                <DeleteIcon />
              </IconButton>
        
            </div>        
            )
          })
        }
      </div>
    </div>
  );

}

export default App;
