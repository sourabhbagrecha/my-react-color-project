import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import Shade from './Shade';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const style = {
    root: {
        height: '96vh'
    },
    shades: {
        height: '90%',
        display: 'flex',
        flexWrap: 'wrap'
    }
}

class Shades extends Component {
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.colors, this.props.match.params.colorId)
    }
    state={
        format: 'hex'
    }
    gatherShades = (colors, colorId) => {
        const { paletteId } = this.props.match.params;
        let colorsArray = [];
        for(let level in colors){
            colorsArray.push(colors[level].find(l => l.id === colorId))
        }
        colorsArray = colorsArray.filter((c, i) => i !== 0);
        colorsArray.push({msg: 'Go back', link: `/palette/${paletteId}`, id: 'back'});
        return colorsArray;
    }
    changeFormat = (val) => {
        this.setState({ format: val })
    }
    render() {
        const { classes, paletteName, emoji } = this.props;
        const { format } = this.state;
        return (
            <div className={classes.root}>
                <Navbar
                    handleChange={this.changeFormat}
                    noSlider={true}
                />
                    <div className={classes.shades}>
                        {this._shades.map(c => <Shade format={format} {...c} key={c.name}/>)}
                    </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default withStyles(style)(Shades);