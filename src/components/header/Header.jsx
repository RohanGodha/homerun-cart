import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();
  const [language, setLanguage] = React.useState("English");

  return (
    <AppBar position="sticky" color="inherit" elevation={2}>
      <Toolbar sx={{ position: "relative" }} style={{paddingTop:"0.5rem", paddingBottom:"1rem"}}>
        {/* Centered logo + text */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={1}
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <img
            src="/homerun-cart/homerun.png"
            alt="logo"
            style={{ height: 45, display: "block",paddingTop:"0.5rem"}}
          />
          <Typography variant="h7" sx={{ fontWeight: 300 }}>
            Home
            <Box component="span" sx={{ color: "#f7c500", fontWeight: 500 }}>
              Run
            </Box>
          </Typography>
        </Box>


        {/* Right side icons */}
        <Box sx={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 1 }}>
          {/* Language Selector */}

          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            variant="standard"
            disableUnderline
            sx={{
              fontSize: 14,
              fontWeight: 400,
              minWidth: 60,
              "& .MuiSelect-select": {
                paddingRight: "20px !important", // space for caret
                paddingLeft: "0 !important",
                paddingTop: "0 !important",
                paddingBottom: "0 !important",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "1rem",
                right: 0,
              },
            }}
            MenuProps={{
              disablePortal: true, // ✅ important to fix positioning issue
              PaperProps: {
                sx: {
                  mt: 1,
                  boxShadow: 3,
                  "& .MuiMenuItem-root": {
                    fontSize: 14,
                    fontWeight: 400,
                    paddingY: 0.5,
                    paddingX: 1.5,
                  },
                  "& .Mui-selected": {
                    backgroundColor: "#d7e8cb !important",
                  },
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "right",
              },
            }}
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Hindi">हिंदी</MenuItem>
            <MenuItem value="Tamil">தமிழ்</MenuItem>
          </Select>

          {/* Search */}
          <IconButton size="large">
            <SearchIcon />
          </IconButton>

          {/* Profile */}
          <IconButton size="large">
            <PersonOutlineIcon />
          </IconButton>

          {/* Cart */}
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