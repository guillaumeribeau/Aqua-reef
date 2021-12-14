import React, { useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

/** 
 * display card equipement (ecumeurs/aquarium/eclairage...)
 * @components  
 * @param {string} name - name of equipements 
 * @param {string} category - name of category 
 * @param {number} price - price of equipement 
 * @param {string} description - description of equipement
 * @param {number} cardSize - size of card equipment
 * @param {boolean} IconDelete- display or not a delete icon
 * 
 */
export default function EquipementCard({
  name,
  category,
  price,
  description,
  picture,
  removeCard,
  cardSize,
  removeCardInSetupRegister,
  IconDelete,
}) {
  const [deleteIconVisible, setDeleteIconVisible] = useState(IconDelete);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // // delete card
  // const deleteCard = () => {
  //   let card = firebase
  //     .database()
  //     .ref("create-card-equipement")
  //     .child(removeCard.id);
  //   card.remove();


  // };

  return (
    <>
      {deleteIconVisible ? (
        <Card sx={{ maxWidth: { cardSize }, marginBottom: 10, marginRight: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                {/* <DeleteIcon onClick={deleteCard} /> */}
              </IconButton>
            }
            title={name}
            subheader={category}
          />
          <Typography variant="h5" color="text.primary" align="center">
            {price}Euros
          </Typography>

          <CardMedia
            component="img"
            height="194"
            image={picture}
            alt="exemple de photo de l'équipement"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ) : (
        <Card sx={{ maxWidth: { cardSize }, marginBottom: 10, marginRight: 5 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title={name}
            subheader={category}
          />
          <Typography variant="h5" color="text.primary" align="center">
            {price}Euros
          </Typography>

          <CardMedia
            component="img"
            height="194"
            image={picture}
            alt="exemple de photo de l'équipement"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </>
  );
}
