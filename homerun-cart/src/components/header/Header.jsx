import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={2}>
          <img
            src="https://via.placeholder.com/96x36?text=HomeRun"
            alt="logo"
            style={{ height: 36, display: "block" }}
          />
          <Typography variant="h6" color="text.primary">
            HomeRun — Demo
          </Typography>
        </Box>

        <Box>
          <IconButton aria-label="cart" size="large">
            <Badge badgeContent={totalItems} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}