import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateField from "./DateField"
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function InputWithIcon() {
  const classes = useStyles();
 
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <RoomOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label=" Adresse de départ" />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <RoomOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label=" Adresse d'arrivé" />
          </Grid>
        </Grid>
      </div>
      <DateField />
      <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AddPhotoAlternateIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label=" photos,documents" type="file" />
          </Grid>
        </Grid>
        <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label"> Dimensions</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            
          </MenuItem>
          <MenuItem value={10}>Petit </MenuItem>
          <MenuItem value={20}>Moyen</MenuItem>
          <MenuItem value={30}>Grand</MenuItem>
        </Select>
      </FormControl>
    </div>
    <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Description" />;
    </div>
  );
}

