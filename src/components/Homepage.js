import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { selectFromDate, setSearch } from "./redux/ticketAction";
import Display from "./Display";
import {
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@mui/material";
import Header from "./Header";
import { searchEve, selectCountry, setGenre } from "./redux/ticketAction";
import { useDispatch } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from "@mui/icons-material/Search";

const useStyles = makeStyles((theme) => ({
  div1: {
    marginBottom: "60px",
  },
  div2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  div3: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    whiteSpace: "nowrap",
  },

  card: {
    height: "150px",
    width: "270px",
    marginTop: "15px",
    boxShadow: "0.5px 0.5px 0.5px 0.5px black",
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  textField: {
    marginTop: "20px !important",
    boxShadow: "0.5px 0.5px 0.5px 0.5px grey",
  },
  textField3: {
    marginTop: "26px !important",
    width: "450px",
    marginLeft: "0px !important",
    "& .MuiInputBase-root": {
      height: "35px",
    },
  },
  button1: {
    marginTop: "25px !important",
    marginLeft: "9px !important",
    marginRight: "13px !important",
  },
  form: {
    marginTop: "21px !important",
  },
  filt1: {
    display: "flex",
    alignItems: "center",
    marginInlineStart: "124px",
    marginRight: "12px",
  },
  select: {
    height: "34px",
    width: "120px",
    [theme.breakpoints.down("md")]: {
      height: "24px",
      width: "80px",
      marginLeft: "7px",
    },
    marginLeft: "26px",
    marginRight: "140px",
    boxShadow: "0.5px 0.5px 0.5px 0.5px grey",
  },
  threecomp: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  datepick: {
    marginBottom: "2px",
    marginTop: "0px",
    height: "20px",
  },
  typo: {
    [theme.breakpoints.down("md")]: {},
    marginRight: "122px !important",
  },
  grid1: {
    paddingTop: "11px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "7px",
    },
  },
  grid2: {
    paddingLeft: "59px",
    paddingRight: "12px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  box1: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  searchIcon: {
    width: "40px",
    height: "30px",
    border: ".1px solid grey",
    borderRadius: "6px",
    cursor: "pointer",
  },
}));

function Homepage({load,setLoad}) {
  const classes = useStyles();
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const search = useMediaQuery((theme) => theme.breakpoints.down("md"));
  useEffect(() => {
    handleFilter();
  }, [country]);

  const handleFilter = () => {
    console.log(country, "country");
    dispatch(selectCountry(country));
  };

  return (
    <div>
      <Header />
      <div className={classes.threecomp}>
        <Grid className={classes.grid1}>
          <Typography className={classes.typo}>Select country</Typography>
          <FormControl>
            <Select
              className={classes.select}
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                dispatch(setGenre(country));
              }}
            >
              <MenuItem value="AT">Austria</MenuItem>
              <MenuItem value="US">US</MenuItem>
              <MenuItem value="CA">Canada</MenuItem>
              <MenuItem value="IE">Ireland</MenuItem>
              <MenuItem value="NZ">New Zealand</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {!search && (
          <div className={classes.box1}>
            <TextField
              className={classes.textField3}
              placeholder="Search for events "
              value={searchItem}
              onChange={(e) => {
                setSearchItem(e.target.value);
                dispatch(setSearch(searchItem));
              }}
            />
            <Button
              variant="contained"
              className={classes.button1}
              onClick={() => dispatch(searchEve(searchItem))}
            >
              Search
            </Button>
          </div>
        )}
        {search && (
          <div
            style={{
              paddingRight: "12px",
              paddingTop: "42px",
              display: "flex",
            }}
          >
            <TextField
              sx={{
                width: "170px",
                "& .MuiInputBase-root": {
                  height: 30,
                },
              }}
              placeholder="Search for events"
              onChange={(e) => {
                setSearchItem(e.target.value);
                dispatch(setSearch(searchItem));
              }}
            />
            <SearchIcon
              className={classes.searchIcon}
              onClick={() => dispatch(searchEve(searchItem))}
            />
          </div>
        )}

        <Grid className={classes.grid2}>
          <Typography className={classes.typo}>Select Date</Typography>
          <label style={{ display: "flex" }}>
            <input
              type="date"
              style={{ marginLeft: 2 }}
              name="fromDate"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button onClick={() => dispatch(selectFromDate(date))}>Go</button>
          </label>
        </Grid>
      </div>
      <Display load={load} setLoad={setLoad}/>
    </div>
  );
}

export default Homepage;
