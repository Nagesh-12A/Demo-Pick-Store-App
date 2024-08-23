import React from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/originals/04/5c/ce/045cce088588be33454e514c472108a9.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.notsoporangi.com/upload/media/entries/2018-06/11/746-0-12fad64ea66aa5787fbfcce858e32cb7.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://wallpapercave.com/wp/wp7140990.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.wallpapertip.com/wmimgs/50-509413_telugu-heroine-photos-hd.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wallpaperaccess.com/full/2425790.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://wallpapercave.com/wp/wp7140990.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://www.wallpapertip.com/wmimgs/50-509413_telugu-heroine-photos-hd.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://wallpaperaccess.com/full/2425790.jpg"
          />
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
              alt="Breakfast"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
              alt="Burger"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45"
              alt="Camera"
            />
          </ImageListItem>
          {/* <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c"
              alt="Coffee"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1533827432537-70133748f5c8"
              alt="Hats"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt="Honey"
            />
          </ImageListItem> */}
          </ImageList>

          <Typography variant="h6" fontWeight={100} mt={2} mb={1}>
           Latest Conversation
          </Typography>

           <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://i.ytimg.com/vi/ewhHg3GT8fw/hq2.jpg?sqp=-oaymwEoCOADEOgC8quKqQMcGADwAQH4Ac4FgAKACooCDAgAEAEYciBOKDowDw==&rs=AOn4CLA-HsZSBuoAn0aIBldDbTfieeGm9g" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="http://1.bp.blogspot.com/-UL9dAb0DuYc/U94byh7kugI/AAAAAAAAPaE/LBcqKzdw1Ig/s1600/Adah+Sharma+Latest+Pics+(26).jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://i.pinimg.com/736x/ee/18/b5/ee18b5ac085fe135ca0891d2f0cb224d.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {" — Do you have Paris recommendations? Have you ever…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List> 

      </Box>
    </Box>
  );
};
export default Rightbar;
