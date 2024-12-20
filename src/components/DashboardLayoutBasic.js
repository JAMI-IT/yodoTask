import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import inboxplease from "../images/inbox.png";

const NAVIGATION = [
  {
    kind: "header",
    title: "MENU",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "mailbox",
    title: "Mail Box",
    icon: <DashboardIcon />,
  },
  {
    segment: "schedulejob",
    title: "Schedual Jobs",
    icon: <DashboardIcon />,
  },
  {
    segment: "api",
    title: "Api Integeration",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "transparent",
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  return <Stack width="100%"></Stack>;
}

function CustomAppTitle() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <img src={inboxplease} alt="Left" style={{ height: "40px" }} />
      <TextField
        fullWidth
        placeholder="Search"
        variant="outlined"
        size="small"
        sx={{ display: { xs: "none", md: "inline-block" } }}
      />
    </Stack>
  );
}

function DashboardLayoutSlots(props) {
  const { window } = props;

  const router = useDemoRouter("/dashboard");

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        maxWidth: "1800px",
        mx: "auto",
        my: 0,
        overflow: "hidden",
        boxShadow: 3,
        borderRadius: 0,
        bgcolor: "white",
      }}
    >
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
            toolbarActions: ToolbarActionsSearch,
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </Box>
  );
}

DashboardLayoutSlots.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutSlots;
