import React, { useState } from 'react';
import './SearchBar.css';
import { IconButton, TextField } from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar() {
    const [checkInDate, setCheckInDate] = useState(moment());
    const [checkOutDate, setCheckOutDate] = useState(moment());
    const [location, setLocation] = useState('');

    const onCheckInDateChange = (date)=>{
        setCheckInDate(date);
    };

    const onCheckOutDateChange = (date)=>{
        setCheckOutDate(date);
    }

    const onLocationChange = (event)=>{
        setLocation(event.target.value);
    };

    return (
        <div className="searchbar">
            <TextField label="Location"
             placeholder="Where to go"
             onChange={onLocationChange} 
             variant="filled" fullWidth/>
             <MuiPickersUtilsProvider utils={MomentUtils}>
                <DatePicker 
                    label="Check In"
                    variant="inline"
                    value={checkInDate}
                    onChange={onCheckInDateChange}
                    inputVariant="filled"
                    autoOk
                    disableToolbar
                />
                <DatePicker 
                    label="Check Out"
                    variant="inline"
                    value={checkOutDate}
                    inputVariant="filled"
                    onChange={onCheckOutDateChange}
                    autoOk
                    disableToolbar
                />
             </MuiPickersUtilsProvider>
            <IconButton>
                <SearchIcon />
            </IconButton>
        </div>
    )
}

export default SearchBar;
