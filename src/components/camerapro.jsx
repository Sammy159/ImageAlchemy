import React, { useRef } from "react";
import { Camera } from "react-camera-pro";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

/**
 * CameraCapture ist eine Komponente, die eine Benutzeroberfläche zur Fotoaufnahme bereitstellt.
 * Sie beinhaltet eine Kameraansicht und einen Button zum Aufnehmen von Fotos.
 * Credit: Purple Technology, „react-camera-pro“, npm. Zugegriffen: 17. Februar 2024. [Online]. Verfügbar unter: https://www.npmjs.com/package/react-camera-pro

 * 
 * @param {Function} setImage - Eine Funktion zum Setzen des aufgenommenen Bildes in einem übergeordneten Zustand.
 * @param {Function} nextStep - Eine Funktion, die nach der Fotoaufnahme aufgerufen wird, um zum nächsten Schritt zu navigieren.
 */
export default function CameraCapture({ setImage, nextStep }) {
  const camera = useRef(null); // Referenz auf die Kamerakomponente

  return (
    <>
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
    </>
  );
}
