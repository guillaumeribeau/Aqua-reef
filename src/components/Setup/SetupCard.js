import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import exampleAqua from '../../images/aquariumsetup.png';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const SetupCard = ({title}) => {


    return (
        <div className='container-setup-card'>
            <div className='header-setup-card'>
                <span>{title}</span>
                <DeleteIcon/>
            </div>
            <img src={exampleAqua} alt='aquarium'/>
            <div className='header-setup-card'>
            <span>Ouvrir le Setup</span>
            <FolderOpenIcon/>

            </div>
        </div>
    );
};

export default SetupCard;