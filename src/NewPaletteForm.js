import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DraggableColorBoxList from './DraggableColorBoxList';
import {arrayMove} from 'react-sortable-hoc';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from "./styles/NewPaletteForm";

class NewPaletteForm extends React.Component {
  state = {
    open: true,
    newColorName: "",
    newPaletteName: "",
    colors: [{ color: 'teal', name: 'sundae'}]
  };

    addNewColor = (color) => {
        const newColor = {
            color,
            name: this.state.newColorName
        };
        this.setState(st => ({ colors: [...st.colors, newColor], newColorName: ''}));
    }

    clearPalette = () => {
        window.confirm("Are you sure?") ? this.setState({colors: []}) : console.log('Cancelled');
    }

    addRandomColor = () => {
        const existingColors = this.state.colors;
        let foundIndex = 0;
        const allColors = this.props.palettes.map(p => p.colors).flat();
        let randomColor;
        while(foundIndex !== -1){
            randomColor = allColors[Math.floor(Math.random()*allColors.length)];
            // eslint-disable-next-line
            foundIndex = existingColors.findIndex(c => c.name === randomColor.name);
        }
        this.setState(st => ({ colors: [...st.colors, randomColor]}))
    }

    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handlePaletteSubmit = (newPaletteName, emoji) => {
        const newPalette = {
            paletteName: newPaletteName,
            colors: this.state.colors,
            emoji: emoji,
        }
        this.props.savePalette(newPalette);
        this.props.history.push('/');
    }

    deleteColor = (val) => {
        this.setState(st => ({ colors: st.colors.filter(({name}) => name !== val)}))
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(colors, oldIndex, newIndex),
        }));
    };
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

  render() {
    const { classes, theme, palettes } = this.props;
    const { open, newColorName, colors } = this.state;
    return (
        <div className={classes.root}>
          <PaletteFormNav 
            classes={classes}
            open={open} 
            palettes={palettes} 
            handleSubmit={this.handlePaletteSubmit} 
            handleDrawerOpen={this.handleDrawerOpen}
            handleDrawerClose={this.handleDrawerClose}
            />
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={this.state.open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </div>
            <Divider />
            <ColorPickerForm
                newColorName={newColorName}
                clearPalette={this.clearPalette}
                addRandomColor={this.addRandomColor}
                handleChange={this.handleChange}
                addNewColor={this.addNewColor}
            />
          </Drawer>
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            <DraggableColorBoxList 
                colors={colors} 
                axis='xy'
                deleteColor={this.deleteColor}
                onSortEnd={this.onSortEnd}
                distance={20}
                />
          </main>
        </div>
    );
  }
}

NewPaletteForm.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
