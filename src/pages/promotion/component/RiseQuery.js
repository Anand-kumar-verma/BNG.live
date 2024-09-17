import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const QueryForm = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        width: '400px',
        margin: 'auto',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Raise a Query
      </Typography>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: '16px' }}
      />
      <TextField
        label="Query"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        sx={{ marginBottom: '16px' }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: '#1976d2',
          color: '#fff',
          '&:hover': { backgroundColor: '#1565c0' },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default QueryForm;
