import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { PhotoCamera } from "@mui/icons-material";
import Input from "@mui/material/Input";
import Select from "@mui/material/Select";
import { TextareaAutosize } from "@mui/material";
import FormControl from "@mui/material/FormControl";



/**
 * @components
 * @returns forms for equipement card
 */
export default function FormsEquipementCard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [verifyNumberPrice, setVerifyNumberPrice] = useState(null);

  const verifyNumber = () => {
    const verifyIfPriceNumber = isNaN(price);
    if (verifyIfPriceNumber === false) {
      setVerifyNumberPrice(!verifyNumberPrice);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyNumber();
    const verifyIfPriceNumber = isNaN(price);
    if (verifyIfPriceNumber === false) {
     // pushcardEquipementInDb(name, price, category, description, picture);
    }
  };

  const changeImageWithEquipement = (category) => {
    console.log(category);
    switch (category) {
      case "Aquariums":
        setPicture("../images/aquarium.png");

        break;
      case "Pompes de brassage":
        setPicture("../images/brassage.png");

        break;
      case "Eclairages":
        setPicture("../images/eclairage.png");

        break;
      case "Pompes de remontée":
        setPicture("../images/remonte.png");

        break;
      case "Pompes doseuses":
        setPicture("../images/doseuse.png");

        break;
      case "Ecumeur":
        setPicture("../images/ecumeur.png");

        break;

      default:
        break;
    }
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
    const category = e.target.value;
    changeImageWithEquipement(category);
  };

  return (
    <form onSubmit={handleSubmit} className="setup_tanks_forms">
      <FormControl sx={{ m: 1, minWidth: 195 }}>
        <InputLabel id="label_categories">Categories</InputLabel>
        <Select
          autoWidth
          labelId="label_categories"
          id="demo-simple-select"
          onChange={changeCategory}
          defaultValue="Equipement"
          label="Categories"
        >
          <MenuItem value={"Aquariums"}>Aquariums</MenuItem>
          <MenuItem value={"Eclairages"}>Eclairages</MenuItem>
          <MenuItem value={"Ecumeur"}>Ecumeurs</MenuItem>
          <MenuItem value={"Hardscape"}>Hardscape</MenuItem>
          <MenuItem value={"Pompes de remontée"}>Pompes</MenuItem>
          <MenuItem value={"Pompes de brassage"}>Pompes de brassage</MenuItem>
          <MenuItem value={"Chauffage"}>Chauffages</MenuItem>
          <MenuItem value={"Pompes doseuses"}>Pompes doseuses</MenuItem>
          <MenuItem value={"Appareils de mesures"}>
            Appareils de mesures
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        required
        id="outlined-required"
        label="Nom de l'équipement"
        margin="dense"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Prix"
        margin="normal"
        onChange={(e) => setPrice(parseInt(e.target.value, 10))}
      />
      {!verifyNumberPrice && (
        <span className="error_message_number">
          Merci de saisir seulement un nombre
        </span>
      )}
      <TextareaAutosize
        placeholder="Description"
        style={{
          width: 190,
          height: 100,
          marginTop: 10,
          background: "#f5fbef",
        }}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera />
          </IconButton>
        </label> */}

      <button className="forms_equipement_btn">
        Creer un nouvel équipement
      </button>
    </form>
  );
}
