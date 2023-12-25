import { Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import React from "react";

export default function ErrorComponent({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <div>Something went Wrong</div>
      <Button variant="outlined" onClick={onClick} startIcon={<RefreshIcon />}>
        Try Again
      </Button>
    </>
  );
}
