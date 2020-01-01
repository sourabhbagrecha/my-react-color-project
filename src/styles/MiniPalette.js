const style = {
    root:{
        backgroundColor: "white",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.5rem",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        "&:hover svg": {
            opacity: 1
        }
    },
    colors: {
        backgroundColor: "#dae1e4",
        height: '150px',
        width: '100%',
        borderRadius: '5px',
        overflow: 'hidden'
    },
    title: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "0",
        color: "black",
        paddingTop: "0.5rem",
        fontSize: "1rem",
        position: "relative"
    },
    emoji: {
        marginLeft: "0.5rem",
        fontSize: "1.5rem"
    },
    miniColor: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        marginBottom: '-4px',
        display: 'inline-block',
    },
    DeleteIcon: {
        position: "absolute",
        backgroundColor: "red",
        padding: "2px",
        width: "20px",
        height: "20px",
        right: "0",
        top: "0",
        zIndex: "10",
        color: "white",
        opacity: "0"
    }
}

export default style;