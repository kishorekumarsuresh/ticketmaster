import React, { useState ,Component,Suspense,lazy, useEffect} from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
//import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { setSearch } from "./redux/ticketAction";
import Display from "./Display";
import { TextField ,Button, FormControl, Select, MenuItem, Typography,Box, Grid} from "@mui/material";
import Header from "./Header";
import { searchEve, selectCountry, selectGenre, setGenre } from "./redux/ticketAction";
import { useDispatch } from "react-redux";
import Loader from "./Loader";
import { width } from "@mui/system";
const useStyles = makeStyles({
  div1:{
    marginBottom:'60px',
  },
  div2: {
    display: "flex",
   alignItems:'center',
   justifyContent:'space-between'
   
  },
  div3: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    whiteSpace: "nowrap",
  },

  card: {
    height:'150px',
    width:"270px",
    marginTop:'15px',
    boxShadow :'0.5px 0.5px 0.5px 0.5px black',
    "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
  },
  textField:{
    marginTop:'20px !important',
    boxShadow :'0.5px 0.5px 0.5px 0.5px grey'
  },
  textField3:{
    marginTop:'20px !important',
    boxShadow :'0.5px 0.5px 0.5px 0.5px grey',
    width:'450px',
    marginLeft:'0px !important'
  },
  button1:{
    marginTop:'25px !important',
    marginLeft:'9px !important',
    marginRight:'13px !important'
  },
  form:{
    marginTop:'21px !important',
  },
  filt1:{
    display:'flex',
    alignItems:'center',
    marginInlineStart:'124px',
    marginRight:'12px',
  },
  select:{
    height:'34px',
    width:'120px',
    marginLeft:'6px',
    marginRight:'140px',
    boxShadow :'0.5px 0.5px 0.5px 0.5px grey',
  },
  threecomp:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  datepick:{
    marginBottom:'2px',
    marginTop:'0px',
    height:'20px'
  },
  typo:{
    marginRight:'122px !important'
  },
  grid1:{
    paddingTop:'11px'
  },
  grid2:{
    paddingLeft:'19px'
  }
});

function Homepage() {
  const classes = useStyles();
  const [searchItem,setSearchItem] = useState("")
  const dispatch = useDispatch()
  const [country,setCountry] = useState('')
  const [date,setDate] = useState('')

  useEffect(() => {
    handleFilter()
  },[country])

  const handleFilter = () => {
    console.log(country,'country')
    dispatch(selectCountry(country))
  }

  return (
    <div>
      <Header />
      <div className={classes.threecomp}>
      <Grid className={classes.grid1}>
      <Typography className={classes.typo}>Select country</Typography>
    <FormControl >
      <Select className={classes.select}
        value={country}
        onChange={(e) => {
          setCountry(e.target.value)
          dispatch(setGenre(country))
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
    <Box>
    <TextField className={classes.textField3} placeholder='Search for artist, venues , events  '
    value={searchItem}
    onChange={(e) => {
      setSearchItem(e.target.value)
      dispatch(setSearch(searchItem))
    }
    }
    />
    <Button variant="contained" className={classes.button1} 
    onClick={() => dispatch(searchEve(searchItem))}>Search</Button>
    </Box>
    <Grid className={classes.grid2}>
    <Typography className={classes.typo}>Select Dates</Typography>
    <DatePicker className={classes.datepick} 
    selected={date}
    onChange={(val) =>{ setDate(val)
    console.log(val)}}
    dateFormat='dd/MM/yyyy' />
    </Grid>
      </div>
    <Display/>
    </div>
    
  );
}

export default Homepage;
