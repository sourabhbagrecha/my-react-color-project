import sizes from './sizes';

const style = {
    root: {
        width: "20%",
        height: "25%",
        position: "relative",
        marginBottom: "-5px",
        display: "inline-block",
        cursor: "move",
        textTransform: "uppercase",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.2)"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "10%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "5%"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        fontSize: "12px",
        letterSpacing: "1px"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out",
        color: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
        right: "0px",
        bottom: "7px",
        cursor: "pointer"
    },
}

export default style;