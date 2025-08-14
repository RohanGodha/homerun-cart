import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";

export default function QuantityControls({
  qty,
  onInc,
  onDec,
  onIncBy5,
  onDecBy5,
  maxReached
}) {
  return (
    <ButtonGroup variant="outlined" fullWidth>
      <Button onClick={onDecBy5} disabled={qty === 0} aria-label="decrease by 5">
        ≪
      </Button>
      <Button onClick={onDec} disabled={qty === 0} aria-label="decrease by 1">
        −
      </Button>

      <Button disabled sx={{ minWidth: 64 }}>
        <Typography fontWeight={600}>{qty}</Typography>
      </Button>

      <Button onClick={onInc} disabled={maxReached} aria-label="increase by 1">
        +
      </Button>
      <Button onClick={onIncBy5} disabled={maxReached} aria-label="increase by 5">
        ≫
      </Button>
    </ButtonGroup>
  );
}