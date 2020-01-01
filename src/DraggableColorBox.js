import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Delete } from '@material-ui/icons';
import { SortableElement } from 'react-sortable-hoc';
import style from './styles/DraggableColorBox';

function DraggableColorBox(props) {
    const {classes, color, handleClick} = props;
    return (
        <div className={classes.root} style={{backgroundColor: color.color}}>
            <div className={classes.boxContent}>
                <span>{color.name}</span>
                <Delete 
                    className={classes.deleteIcon} 
                    onClick={() => handleClick(color.name)} />
            </div>
        </div>
    )
}

export default SortableElement(withStyles(style)(DraggableColorBox));
