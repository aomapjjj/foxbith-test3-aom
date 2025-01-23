import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

interface validateFormProps {
  onClick?: any
}

export default function App(props: validateFormProps) {
  const { onClick } = props

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
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ gap: 1, justifyContent: "end" }}>
            <Button
              variant="outlined"
              sx={{
                width: "89px",
                height: "48px",
                borderRadius: 2,
                borderColor: "#FF5C00",
                fontFamily: "Prompt",
                color: "#FF5C00"
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "180px",
                height: "48px",
                borderRadius: 2,
                fontFamily: "Prompt"
              }}
             onClick={onClick}
            >
              Save
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
