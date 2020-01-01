const drawerWidth = 400;

const styles = theme => ({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      height: "64px"
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    savePaletteButton: {
        marginTop: 'rem'
    },
    backButton: {
        marginLeft: "1rem",
        textDecoration: "none",
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    },    
    hide: {
      display: 'none',
    },
  })

export default styles;