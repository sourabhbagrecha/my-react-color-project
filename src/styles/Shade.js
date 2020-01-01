import sizes from './sizes';

const style = {
    root: {
        width: "20%",
        height: "50%",
        position: 'relative',
        textTransform: "uppercase",
        "&:hover .copy-button": {
                opacity: '1',
                transition: '0.5s'
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "20%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        border: "none",
        opacity: "0",
        cursor: "pointer",
    },
    title: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        fontSize: "12px",
        letterSpacing: "1px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
    },
    copyOverlayShow: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        top: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        "& h1": {
            textAlign: "center",
            marginBottom: "0px",
            padding: "1rem",
            fontWeight: "400",
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
        },
        "& p": {    
            fontSize: "2rem",
            fontWeight: "100",
        }
    },
    copyMsgShow: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.3s",
    },
    DarkColor: {
        color: "white"
    }
};

export default style;