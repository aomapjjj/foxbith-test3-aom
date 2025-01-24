import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              fontFamily={"Prompt"}
              sx={{ flexGrow: 1, color: "black" }}
            >
              🦊 Foxbith Questionnaire
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
