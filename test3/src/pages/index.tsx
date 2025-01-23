import { Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Box from "@mui/material"
import { useState } from "react"
const index = () => {

  const [valid , setValid ] = useState(false)

  const handleValidate = () => {
   return setValid(true)
  }

  return (
    <>
      <Navbar onClick={handleValidate} />
      <Stack gap={2} sx={{ p: 2 , bgcolor:"#F3F4F6"  }}>
        <Form valid={valid} />
      </Stack>
    </>
  )
}
export default index
