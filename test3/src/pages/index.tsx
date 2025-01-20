import { Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Box from "@mui/material"
const index = () => {
  return (
    <>
      <Navbar />
      <Stack gap={2} sx={{ p: 2 , bgcolor:"#F3F4F6"  }}>
        <Form />
      </Stack>
    </>
  )
}
export default index
