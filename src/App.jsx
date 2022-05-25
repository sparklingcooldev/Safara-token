import { ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState, useCallback, useMemo } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Hidden, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useTheme from "./hooks/useTheme";
import { useAddress, useWeb3Context } from "./hooks/web3Context";
import useGoogleAnalytics from "./hooks/useGoogleAnalytics";
import useSegmentAnalytics from "./hooks/useSegmentAnalytics";
import { storeQueryParameters } from "./helpers/QueryParameterHelper";


import { Home } from "./views";
import TopBar from "./components/TopBar/TopBar.jsx";
import Messages from "./components/Messages/Messages";
import Footer from "./components/Footer";
import BuyModal from "src/components/BuyModal";
import { dark as darkTheme } from "./themes/dark.js";

import "./style.scss";
import {
  HttpLink,
  ApolloProvider
} from "@apollo/client";
import { client } from './apollo/client'

// 😬 Sorry for all the console logging
const DEBUG = false;

// 🛰 providers
if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");
// 🔭 block explorer URL
// const blockExplorer = targetNetwork.blockExplorer;

const drawerWidth = 0;
const transitionDuration = 969;

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: '40px',
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: transitionDuration,
    }),
    height: "100%",
    overflow: "auto",
    background: "#202020",
    backgroundSize: "cover",
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: transitionDuration,
    }),
    marginLeft: 0,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
}));




function App() {
  useGoogleAnalytics();
  useSegmentAnalytics();
  const dispatch = useDispatch();
  const [theme, toggleTheme, mounted] = useTheme();
  const location = useLocation();
  const classes = useStyles();
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmallerScreen = useMediaQuery("(max-width: 980px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const history = useHistory();
  const { connect, hasCachedProvider, provider, chainID, connected } = useWeb3Context();
  const address = useAddress();

  const [walletChecked, setWalletChecked] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasCachedProvider()) {
      // then user DOES have a wallet
      // connect().then(() => {
      //   setWalletChecked(true);
      // });
    } else {
      // then user DOES NOT have a wallet
      setWalletChecked(true);
    }

    // We want to ensure that we are storing the UTM parameters for later, even if the user follows links
    storeQueryParameters();
  }, []);



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarExpanded(false);
  };

  let themeMode = theme === "light" ? darkTheme : theme === "dark" ? darkTheme : darkTheme;

  useEffect(() => {
    themeMode = theme === "light" ? darkTheme : darkTheme;
  }, [theme]);

  useEffect(() => {
    if (isSidebarExpanded) handleSidebarClose();
  }, [location]);
  const path = useMemo(() => window.location.pathname, [window.location.pathname]);


  return (
    <ApolloProvider client={client}>
      <BuyModal open={open} setOpen={setOpen} />
      <Router>
        <ThemeProvider theme={darkTheme}>
          <TopBar setOpen={setOpen} />
          <Switch>
            <Route exact path="/">
              <Home setOpen={setOpen} />
            </Route>
          </Switch>
          {/* <Footer /> */}
        </ThemeProvider>
      </Router>
    </ApolloProvider >
  );
}

export default App;
