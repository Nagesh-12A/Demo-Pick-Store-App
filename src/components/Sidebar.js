import React, { Profiler } from 'react'
import { Box } from '@mui/material'
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import Switch from '@mui/material/Switch';
const Sidebar = ({mode, setMode}) => {
  return (
    <Box p={2} flex={1}
    sx={{display:{ xs:"none", sm: "block"}}}
   >
      <Box  position={'fixed'}>
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                < PersonOutlineIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <Person2OutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component="a" href="#href">
              <ListItemIcon>
                <ModeNightOutlinedIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode==="light" ? "dark":"light")}/>
            </ListItemButton>
            </ListItem>
            </List>
            </Box>
    </Box>
  )
}

export default Sidebar
