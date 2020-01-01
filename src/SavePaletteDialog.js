import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart';

class SavePaletteDialog extends Component {
    state = {
        emojiDialog: false,
        nameDialog: false,
        newPaletteName: '',
        emoji: null,
        stage: 'name'
    }

  handleClickOpen = () => {
    this.setState({ nameDialog: true });
  }
  handleEmojiOpen = () => {
    this.setState({ nameDialog: false, emojiDialog: true })
  }

  handleClose = () => {
    this.setState({ emojiDialog: false, nameDialog: false });
  }
  
  handleSubmit = () => {
    this.props.handleSubmit(this.state.newPaletteName, this.state.emoji)
    this.setState({ stage: "" });
  }
  handleChange = e => this.setState({[e.target.name]: e.target.value});
  handleEmoji = (emoji, evt) => {
    this.setState({ emoji: emoji.id}, () => this.handleSubmit());
  }

  render() {
    const { newPaletteName, nameDialog, emojiDialog } = this.state;
    return (
        <div>
          <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
            Save Palette
          </Button>
          <Dialog open={nameDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Save Palette</DialogTitle>
            <DialogContent>
                <ValidatorForm onSubmit={this.handleEmojiOpen}>
                    <TextValidator
                        value={newPaletteName}
                        name='newPaletteName'
                        onChange={this.handleChange}
                        validators={['required']}
                        errorMessages={['This field is requied!']}
                        placeholder={'Palette Name'}
                        variant="filled"
                        color="secondary"
                        style={{width: "100%"}}
                    />
                    <DialogActions>
                        <Button
                            variant="contained"
                            type="submit"
                            color="secondary">
                                Next
                        </Button>
                        <Button onClick={this.handleClose}>Cancel</Button>
                    </DialogActions>
                </ValidatorForm>
            </DialogContent>
          </Dialog>
          <Dialog open={emojiDialog} onClose={this.handleClose} aria-labelledby="form-dialog-emoji">
            <Picker
                showPreview={false}
                onSelect={this.handleEmoji}/>
          </Dialog>
        </div>
      );
  }
}

export default SavePaletteDialog;