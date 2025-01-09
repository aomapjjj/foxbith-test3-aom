import {
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import { orange } from "@mui/material/colors"
import Form from "./Form"

export default function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              🦊 Foxbith Questionnaire
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <AppBar position="static" sx={{ bgcolor: "white" }}>
          <Toolbar sx={{ gap: 1, justifyContent: "end" }}>
            <Button variant="outlined" color="warning">
              Cancel
            </Button>
            <Button variant="contained" color="warning" sx={{ width: "150px" }}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Stack gap={2} sx={{ p: 2 , bgcolor:"#F3F4F6"  }}>
        <Form />
      </Stack>
    </>
  )
}
