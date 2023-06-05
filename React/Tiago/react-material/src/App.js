import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div>
     <Button variant="contained">Hello World</Button>
     <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
      />

      <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
      />
  </div>
  )
}

export default App;
