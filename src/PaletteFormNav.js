import React, { Component } from 'react';
import { CssBaseline, AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { ValidatorForm } from 'react-material-ui-form-validator';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles'
import SavePaletteDialog from './SavePaletteDialog';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteFormNav';

class PaletteFormNav extends Component{
    componentDidMount = () => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
            this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
        })
    }
    handleChange = e => this.setState({[e.target.name]: e.target.value});
    handleSubmit = (newPaletteName, emoji) => {
        this.props.handleSubmit(newPaletteName, emoji);
    }
    handleDrawerOpen = () => {
        this.props.handleDrawerOpen();
    };
    handleDrawerClose = () => {
        this.props.handleDrawerClose();
    };

    render() {
        const { classes, open } = this.props;
        return (
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={classNames(classes.menuButton, open && classes.hide)}
                            >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.container}>
                            <Typography variant="h6" noWrap>
                                Color Palette Creator
                            </Typography>
                        </div>
                    </Toolbar>
                    <Toolbar>
                        <SavePaletteDialog className={classes.savePaletteButton} handleSubmit={this.handleSubmit}/>
                        <Button className={classes.backButton} variant="contained">
                            <Link to="/">
                                Go Back
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);