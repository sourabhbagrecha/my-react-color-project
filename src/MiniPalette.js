import React, { PureComponent } from 'react';
import {withStyles} from '@material-ui/styles';
import { Emoji } from 'emoji-mart';
import style from './styles/MiniPalette';
import { Delete } from '@material-ui/icons';

class MiniPalette extends PureComponent{
    handleClick = () => {
        this.props.handleClick(this.props.id)        
    }
    render() {
    const { classes, paletteName, emoji, id, colors, } = this.props;
    const miniColorBoxes = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color}}
            key={color.name}
        />
    ));
    console.log("Rerender!!")
        return (
            <div className={classes.root} onClick={this.handleClick}>
                <div className={classes.colors}>{miniColorBoxes}</div>
                <h5 className={classes.title}>{paletteName} <span><Emoji emoji={{ id: emoji }} size={30} /></span></h5>
                <Delete className={classes.DeleteIcon} onClick={(evt) => {evt.stopPropagation(); this.props.handleClickDelete(id)}} />
            </div>
        )
    }
}

export default withStyles(style)(MiniPalette);