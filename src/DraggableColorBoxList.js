import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import {SortableContainer} from 'react-sortable-hoc';

function DraggableColorBoxList({colors, deleteColor}) {
    return (
        <div style={{height: '100%'}}>
            {colors.map( (color, i) => 
                <DraggableColorBox 
                    index={i} 
                    color={color} 
                    handleClick={deleteColor} />
            )}
        </div>
    )
}

export default SortableContainer(DraggableColorBoxList);
