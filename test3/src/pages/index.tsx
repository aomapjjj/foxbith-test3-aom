import { Stack } from "@mui/material"
import Navbar from "./components/Navbar"
import Box from "@mui/material"
import { useState } from "react"
import Question from "./components/form/Question"
const index = () => {

  const [valid , setValid ] = useState(false)

  const handleValidate = () => {
   return setValid(true)
  }

  return (
    <>
      <Navbar  />
     
        <Question  />
      
    </>
  )
}
export default index
