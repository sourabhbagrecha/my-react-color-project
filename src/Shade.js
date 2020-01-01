import React, { Component } from 'react'
import {withStyles} from '@material-ui/styles';
import CopyToClipboard from 'react-copy-to-clipboard';
import style from './styles/Shade';
import chroma from 'chroma-js';
import { Link } from 'react-router-dom';

class Shade extends Component {
    state = {
        copied: false
    }
    changeCopyState = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1000)
        })
    }
    render() {
        const {classes, format, name, id, msg, link, rgba} = this.props;
        const { copied } = this.state;
        let template;
        if(id !== 'back'){
            console.log(rgba)
            template = 
            <CopyToClipboard text={this.props[format]} onCopy={this.changeCopyState}>
                <div style={{backgroundColor: this.props[format]}} className={`${classes.root} ${(chroma(rgba).luminance() < 0.10) && classes.DarkColor}`}>
                    <div className={classes.title}>{name}</div>
                    <div className={`${classes.copyOverlay} ${copied ? classes.copyOverlayShow : null}`} style={{ backgroundColor: this.props[format] }} />
                    <div className={`${classes.copyMsg} ${copied ? classes.copyMsgShow: null}`}>
                        <h1>Copied!</h1>
                        <p>{ this.props[format] }</p>
                    </div>
                    <div className='copy-container'>
                        <button className={`${classes.copyButton} copy-button`}>Copy</button>
                    </div>
                </div>
            </CopyToClipboard>
        } else {
            template = 
            <div style={{backgroundColor: "black"}} className={classes.root}>
                <div className={classes.title}>{name}</div>
                <Link to={link}><button className={`${classes.copyButton} copy-button`}>{msg}</button></Link>
            </div>
        }
        return (
            template
        )
    }
}

export default withStyles(style)(Shade)