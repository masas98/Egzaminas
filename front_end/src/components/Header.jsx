import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ListItem, TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link } from "react-router-dom";

const StyledSearch = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[500], 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[500], 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
  color: "white",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledCircleIcon = styled(AccountCircleIcon)({
  width: "45px",
  height: "45px",
});

const StyledMenuBox = styled(Box)({
  display: "flex",
  align: "center",
  justifyContent: "center",
  alignItems: "center",
});

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0),
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: "0",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(0),
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  padding: "0",
  margin: "0",
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "0",
    border: "none",
    color: "white",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-root": {
    padding: "0",
  },
}));

const StyledListItem = styled(ListItem)({
  width: "30xp",
});

export default function Header() {
  const [open, setState] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [textValue, setTextValue] = useState("");

  const handleButtonClick = () => {
    setOpenSearch(false);
    setTextValue("");
  };

  const search = (
    <StyledSearch>
      <IconButton color="inherit">
        <SearchIcon />
      </IconButton>
      <StyledTextField
        id="filled-basic"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <IconButton onClick={() => setOpenSearch(handleButtonClick)}>
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
    </StyledSearch>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: "linear-gradient(to right, black, transparent)",
        backgroundColor: "grey",
      }}
    >
      <StyledContainer maxWidth="false">
        <StyledToolbar>
          <StyledMenuBox
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <IconButton
              href="/"
              color="inherit"
              sx={{ borderRadius: 0, textAlign: "center" }}
            >
              <Typography variant="button" sx={{ ml: 1 }}>
                Login
              </Typography>
            </IconButton>

            <IconButton
              href="/register"
              color="inherit"
              sx={{ borderRadius: 0 }}
            >
              <Typography variant="button" sx={{ ml: 1 }}>
                Register
              </Typography>
            </IconButton>
            <IconButton
              href="/services"
              color="inherit"
              sx={{ borderRadius: 0 }}
            >
              <Typography variant="button" sx={{ ml: 1 }}>
                services
              </Typography>
            </IconButton>
            {!openSearch ? (
              <IconButton color="inherit" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
              </IconButton>
            ) : (
              search
            )}
            <IconButton color="inherit">
              <StyledCircleIcon />
            </IconButton>
          </StyledMenuBox>

          <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundImage:
                  "linear-gradient(to bottom, black, transparent)",
                backgroundColor: "grey",
              }}
            >
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon
                  onClick={toggleDrawer(false)}
                  sx={{ color: "white" }}
                />
              </IconButton>

              <Divider sx={{ mb: 2 }} />
              <ListItemButton href="/">
                <ListItemIcon>
                  <HomeIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="HOME" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton href="/incomes">
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="INCOMES" sx={{ color: "white" }} />
              </ListItemButton>
              <ListItemButton href="/expenses">
                <ListItemIcon>
                  <CreditCardIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="EXPENSES" sx={{ color: "white" }} />
              </ListItemButton>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Account" sx={{ color: "white" }} />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Notifications"
                    sx={{ color: "white" }}
                  />
                </ListItemButton>
                <StyledListItem>{search}</StyledListItem>
              </Box>
            </Box>
          </Drawer>
        </StyledToolbar>
      </StyledContainer>
    </AppBar>
  );
}
