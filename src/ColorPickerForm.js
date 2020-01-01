import React, { PureComponent } from 'react'
import { Typography, Button } from '@material-ui/core'
import { ChromePicker } from 'react-color'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {withStyles} from '@material-ui/core/styles'
import style from './styles/ColorPickerForm';

class ColorPickerForm extends PureComponent {
    state = {
        currentColor: 'teal'
    }
    
    componentDidMount = () => {
        ValidatorForm.addValidationRule('isColorNameUnique', value => {
            this.state.colors.every(({name}) => {console.log(name, value); return name.toLowerCase() === value.toLowerCase()})
        })
    }
    
    updateCurrentColor = (newColor) => {
        this.setState({ currentColor: newColor.hex});
    }
    render() {
        const {newColorName, classes} = this.props;
        const {currentColor} = this.state;
        return (
            <div className={classes.container}>
                <Typography variant='h4'>
                    Design Your Palette
                </Typography>
                <div className={classes.buttons}>
                    <Button 
                        variant='contained' 
                        color='secondary'
                        onClick={() => this.props.clearPalette()}
                        >Clear Palette
                    </Button>
                    <Button 
                        variant='contained' 
                        color='primary'
                        onClick={() => this.props.addRandomColor()}
                        > Random Color
                    </Button>
                </div>
                <ChromePicker 
                    classname={classes.picker}
                    color={currentColor} 
                    onChangeComplete={this.updateCurrentColor}/>
                <ValidatorForm
                    onSubmit={() => this.props.addNewColor(currentColor)}>
                    <TextValidator
                        value={newColorName}
                        name='newColorName'
                        variant="filled"
                        onChange={(e) => this.props.handleChange(e)}
                        validators={['required']}
                        errorMessages={['This field is requied!']}
                        className={classes.colorNameInput}
                        placeholder="Enter a name for this color"
                    />
                    <Button 
                        className={classes.addColorButton}
                        variant='contained'
                        type='submit'
                        style={{background: currentColor}}>Add Color</Button>
                </ValidatorForm>
            </div>    
        )
    }
}

export default withStyles(style, {withTheme: true})(ColorPickerForm)