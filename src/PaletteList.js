import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from './styles/PaletteList';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Delete, Cancel } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { red, blue } from '@material-ui/core/colors';

class PaletteList extends Component {
    state= {
        openDialog: false,
        deletePalette: null
    }
    goToPalette = (id) => {
        this.props.history.push(`/palette/${id}`);
    }
    handleDelete = (id) => {
        this.setState({ openDialog: true, deletePalette: id });
    }
    deletePalette = () => {
        this.props.handleDelete(this.state.deletePalette);
        this.setState({ deletePalette: null }, this.handleDialogClose);
    }
    handleDialogClose = () => {
        this.setState({ openDialog: false})
    }
    render() {
        const { palettes, classes } = this.props;
        const { openDialog } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                        <Link to="/palette/new">Create Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(p => (
                            <CSSTransition
                                key={p.id}
                                classNames={'fade'}
                                timeout={500}>
                                <MiniPalette 
                                    {...p} 
                                    handleClick={this.goToPalette} 
                                    handleClickDelete={this.handleDelete} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>
                <Dialog onClose={this.handleDialogClose} aria-labelledby="delete-dialog-title" open={openDialog}>
                    <DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.deletePalette}>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[800]}}>
                                <Delete />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'Delete'} />
                        </ListItem>
                        <ListItem button onClick={this.handleDialogClose}>
                            <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[800]}}>
                                <Cancel />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={'Cancel'} />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)