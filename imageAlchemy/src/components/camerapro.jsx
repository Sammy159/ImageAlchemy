import React, { useState, useRef } from "react";
import { Camera } from "react-camera-pro";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00ea00",
    },
    secondary: {
      main: "#001aff",
    },
  },
});

export default function CameraCapture({ setImage, nextStep }) {
  const camera = useRef(null);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={4}
      >
        <Camera ref={camera} aspectRatio={16 / 9} />
        <Button
          variant="contained"
          sx={{ alignContent: "center", justifyContent: "center" }}
          onClick={() => {
            setImage(camera.current.takePhoto());
            nextStep(1);
          }}
        >
          Foto schießen
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
