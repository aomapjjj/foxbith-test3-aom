import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { signOut } from "firebase/auth"
import { auth, provider } from "@/firebase"
import Cookies from "js-cookie"

interface User {
  email: string
  displayName: string
}

const USER_INIT = {
  email: "",
  displayName: ""
}

export default function App() {
  const router = useRouter()
  const [user, setUser] = useState<User>({ ...USER_INIT })
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")

  useEffect(() => {
    setEmail(localStorage.getItem("email") || "")
    setName(localStorage.getItem("displayName") || "")
  })

  const logout = () => {
    localStorage.clear()
    Cookies.remove("loggedin")
    signOut(auth)
    router.push("/login")
  }

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
            <Typography fontFamily={"Prompt"} sx={{ color: "black"  , mr: 3}}>
              {email}
            </Typography>
            <Button variant="outlined" color="warning" onClick={logout}>
              Log out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
