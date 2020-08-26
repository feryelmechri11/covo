import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DateField from "./DateField";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function InputWithIcon(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const [selectedDatearrival, setSelectedDatearrival] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChangedeparture = (date) => {
    setSelectedDate(date);
  };
  const handleDateChangearrival = (date) => {
    setSelectedDatearrival(date);
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
            <TextField
              id="input-with-icon-grid"
              label=" Adresse de départ"
              onChange={(event) =>
                props.handleChangestarting_address(event.target.value)
              }
            />
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <RoomOutlinedIcon />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label=" Adresse d'arrivé"
              onChange={(event) =>
                props.handleChangearrival_address(event.target.value)
              }
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date de départ "
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={() => {
                handleDateChangedeparture();
                props.handleChangedate_departure(
                  selectedDate.toString().substring(4, 15)
                );
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Date d'arrivée "
              format="MM/dd/yyyy"
              value={selectedDatearrival}
              onChange={() => {
                handleDateChangearrival();
                props.handleChangearrival_date(
                  selectedDatearrival.toString().substring(4, 15)
                );
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
      </div>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AddPhotoAlternateIcon />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label=" photos,documents"
            type="file"
            onChange={(event) => props.handleChangepicture(event.target.value)}
          />
        </Grid>
      </Grid>
      <div>
        <Button className={classes.button} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            {" "}
            Dimensions
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={(event) => props.handleChangeprice(event.target.value)}
          >
            <MenuItem value={5}>Petit </MenuItem>
            <MenuItem value={10}>Moyen</MenuItem>
            <MenuItem value={15}>Grand</MenuItem>
          </Select>
        </FormControl>
      </div>
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={3}
        placeholder="Description"
        onChange={(event) => props.handleChangedescription(event.target.value)}
      />
      ;
    </div>
  );
}
