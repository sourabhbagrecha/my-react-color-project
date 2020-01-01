import React from 'react';
import './PaletteFooter.css';
import { Emoji } from "emoji-mart";

function PaletteFooter(props) {
    const { paletteName, emoji, emojiClass } = props;
        return (
            <footer className="Palette-footer">
                {paletteName}
                <span className="emoji"><Emoji className={emojiClass} emoji={{ id: emoji }} size={30} /></span>
            </footer>
        )
}

export default PaletteFooter;