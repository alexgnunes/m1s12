import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [linguagem, setLinguagem] = React.useState('');

  const handleChange = (event) => {
    setLinguagem(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-helper-label">Escolha sua lingugem preferida</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={linguagem}
          label="Escolha sua lingugem preferida"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={0}>React</MenuItem>
          <MenuItem value={1}>Vue</MenuItem>
          <MenuItem value={2}>Angular</MenuItem>
          <MenuItem value={3}>Outra linguagem</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}