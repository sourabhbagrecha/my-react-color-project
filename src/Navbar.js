import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import Slider from 'rc-slider';
import {Select, MenuItem, Snackbar, IconButton} from '@material-ui/core';
import {Link} from 'react-router-dom';
import styles from './styles/Navbar';
import { withStyles } from "@material-ui/core/styles";

class Navbar extends Component{
    state = {
        format: 'hex',
        open: false
    }
    handleFormatChange = (e) => {
        this.setState({ format: e.target.value, open: true }, () => this.props.handleChange(this.state.format));
    }
    closeSnackbar = () => {
        this.setState({open: false})
    }
    render() {
        const {level, changeLevel, classes} = this.props;
        const {format} = this.state;
        return (
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">React Color Picker</Link>
                </div>
                {!this.props.noSlider && <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}  />
                    </div>
                </div>}
                <div className={classes.selectContainer}>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.3)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    open={this.state.open}
                    autoHideDuration={1000}
                    message={<span className="message-id">Format Changed!</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color="inherit"
                            key='close'
                            aria-label='close'
                        >x
                        </IconButton>
                    ]}
                    onClose={this.closeSnackbar}
                >

                </Snackbar>
            </header>
        )
    }
}

export default withStyles(styles)(Navbar);