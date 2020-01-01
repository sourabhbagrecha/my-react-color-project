import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import style from './styles/ColorBox';

class ColorBox extends Component{
    state = {
        copied: false
    }
    changeCopyState = () => {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1000)
        })
    }
    render(){
        const {name, background, paletteId, colorId, classes} = this.props;
        const { copied } = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background }} className={`${classes.colorBox} ${classes.isDarkColor}`}>
                    <div 
                        className={`${classes.copyOverlay} ${copied ? 'show': ''}`} 
                        style={{ background }}
                    />
                    <div className={`${classes.copyMsg} ${copied ? 'show': ''}`}>
                        <h1>Copied!</h1>
                        <p>{ background }</p>
                    </div>
                    <div className={`${classes.copyContainer}`}>
                        <div className={`${classes.boxContent}`}>
                            <span>{name}</span>
                        </div>
                        <button className={`${classes.copyButton} ${classes.isDarkColor} copy-button`}>Copy</button>
                    </div>
                    <Link to={`/palette/${paletteId}/${colorId}`} onClick={e => e.stopPropagation()}>
                        <span className={`${classes.seeMore} ${classes.isLightColor}`}>More</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}

export default withStyles(style)(ColorBox);