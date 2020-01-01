import React from 'react';
import { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/Palette';
import { withStyles } from "@material-ui/core/styles";

class Palette extends Component{
    state = {
        level: 500,
        format: 'hex'
    }
    changeLevel = (level) => {
        this.setState({ level })
    }
    changeFormat = (val) => {
        this.setState({ format: val })
    }
    render(){
        const {colors, paletteName, emoji, id, classes} = this.props;
        const {level, format} = this.state;
        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name} colorId={color.id} key={color.id} paletteId={id}/>
        });
        return(
            <div className={classes.Palette}>
                <Navbar
                    level={level}
                    format={format}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                    noSlider={false}
                />
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                </div>
                <PaletteFooter 
                    className={classes.PaletteFooter} 
                    paletteName={paletteName} 
                    emoji={emoji}
                    emojiClass={classes.emoji}
                    />
            </div>
        )
    }
};

export default withStyles(styles)(Palette);