import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles, withStyles  } from '@mui/styles';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const ListItems = [
    {
        id: 0,
        name: "Oda1",
        label: "Oda 1",
    },
    {
        id: 1,
        name: "Oda2",
        label: "Oda 2"
    },
    {
        id: 2,
        name: "Oda3",
        label: "Oda 3"
    },
    {
        id: 3,
        name: "Oda4",
        label: "Oda 4"
    },
    {
        id: 4,
        name: "Oda5",
        label: "Oda 5"
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 360
    }
  }));

const ListItem = withStyles({
    root: {
      "&$selected": {
        backgroundColor: "red",
        color: "white"
      }
    },
    selected: {}
  })(MuiListItem);
  
    const Sidebar = () => {
    
    const navigate = useNavigate()
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const HandleClick = (id) => {
        setSelectedIndex(id)
        navigate(`/${ListItems[id].name}`)
    }
    useEffect(() => {
        console.log(selectedIndex)
      return () => {
        
      }
    }, [selectedIndex])
    
    return (
        <>
            <Box sx={{ width: '100%', height:'100%', borderRight: '1px dashed grey' }} className={classes.root}>
                <List>
                    {
                        ListItems.map(item => (
                            <ListItem key={item.id}>
                                <ListItemButton onClick={() => HandleClick(item.id)} selected={selectedIndex === item.id}>
                                    <ListItemText primary={item.label} />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>

        </>
    )
}

export default Sidebar