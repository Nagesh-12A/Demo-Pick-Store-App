import { createTheme, Stack, ThemeProvider } from "@mui/material";
import Feedbar from "./components/Feedbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import Add from "./components/Add";
import { useState } from "react";
function App() {
  const [mode, setMode]= useState("dark");

  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Feedbar></Feedbar>
        <Rightbar></Rightbar>
      </Stack>
      <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
