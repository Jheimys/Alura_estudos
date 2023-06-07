import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// import {makeStyles} from '@mui/material/styles';

// const useStyle = makeStyles (() => ({
//     title: {
//         flexGrow: 1,
//     }
// }))


const Header = () => {

    // const classes = useStyle()

    return(
        <AppBar position="static">
            <Toolbar>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >

                 <MenuIcon /> 

                </IconButton>
                
                {/* className={classes.title}  */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>  
                  My App
                </Typography>

                <Button color="inherit">Login</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header