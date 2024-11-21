// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <Button onClick={handleBackClick} type="button" variant="outlined" startIcon={<ArrowBackIcon />} color="primary">
      Back
    </Button>
  );
};

export default BackButton;
