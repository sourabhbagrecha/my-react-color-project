import sizes from "./sizes";
const styles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh"
    },      
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black",
            fontFamily: "sans-serif",
        },
        [sizes.down("xs")]: {
            display: "none"
        }
    },    
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
    },
    slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        [sizes.down("xs")]: {
            width: "150px"
        }
    }
}

export default styles;