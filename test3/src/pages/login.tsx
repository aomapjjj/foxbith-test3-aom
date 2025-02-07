import {
  Box,
  Typography,
  Button,
  Grid2,
  Divider,
  Chip,
  Stack
} from "@mui/material"
import FormInput from "../components/form/FormInput"
import { useEffect, useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import GoogleIcon from "@mui/icons-material/Google"
import Logo from "../components/Logo"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { auth, provider } from "@/firebase"
import { useRouter } from "next/router"
import Link from "next/link"
import Cookies from "js-cookie"

interface FormValues {
  email: string
  password: string
}

const login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [value, setValue] = useState<any>("")

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      Cookies.set("loggedin", "true")
      router.push("/question")
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const handleClick = async () => {
    try {
      signInWithPopup(auth, provider).then((data: any) => {
        if (data) {
          localStorage.setItem("email", data.user.email)
          localStorage.setItem("accessToken", data.user.accessToken)
          localStorage.setItem("displayName", data.user.displayName)
          Cookies.set("loggedin", "true")

          router.push("/question")
        } else {
          router.push("/login")
        }
      })
    } catch {
      console.log("error")
    }
  }

  useEffect(() => {
    setValue(localStorage.getItem("email"))
    setValue(localStorage.getItem("accessToken"))
    setValue(localStorage.getItem("displayName"))
  })

  const validationSchema = Yup.object({
    email: Yup.string().required("Please fill in this option"),
    password: Yup.string().required("Please fill in this option")
  })

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = () => {}

  return (
    <>
      <Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F3F4F6",
              width: "450px",
              boxShadow: 3,
              borderRadius: "8px",
              mt: 10
            }}
          >
            <Grid2
              container
              sx={{
                mt: 8,
                justifyContent: "center"
              }}
            >
              <Box>
                <Grid2 size={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <Logo />
                  </Box>
                </Grid2>
                <Grid2 size={12}>
                  <Typography fontFamily={"Prompt"} sx={{ color: "black" }}>
                    Don't have an account? <Link href="/signup"> Sign up </Link>
                  </Typography>
                </Grid2>
              </Box>

              <Grid2 size={12}>
                <Box
                  sx={{
                    px: "24px",
                    py: "16px"
                  }}
                >
                  <FormInput
                    name="email"
                    label="Email*"
                    control={control}
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    placeholder="Enter Email"
                  />
                </Box>
                <Box
                  sx={{
                    px: "24px",
                    mb: "12px"
                  }}
                >
                  <FormInput
                    name="password"
                    label="Password*"
                    type="password"
                    control={control}
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(e.target.value)
                    }
                    placeholder="Enter Password"
                  />
                </Box>
              </Grid2>
              <form onSubmit={handleLogin}>
                <Grid2 size={12}>
                  <Box
                    sx={{
                      width: "400px",
                      py: "12px"
                    }}
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      type="submit"
                      sx={{
                        width: "100%",
                        height: "48px",
                        borderRadius: 2,
                        fontFamily: "Prompt"
                      }}
                    >
                      Login
                    </Button>
                  </Box>
                </Grid2>
              </form>
              <Grid2 size={12}>
                <Box
                  sx={{
                    px: "24px",
                    py: "12px"
                  }}
                >
                  <Divider flexItem>
                    <Chip
                      label="or"
                      size="medium"
                      sx={{
                        fontFamily: "Prompt",
                        fontSize: "16px"
                      }}
                    />
                  </Divider>
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Box
                  sx={{
                    px: "24px",
                    py: "12px",
                    pb: "30px"
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    onClick={handleClick}
                    sx={{
                      width: "100%",
                      height: "48px",
                      borderRadius: 2
                    }}
                  >
                    <GoogleIcon />
                    <Typography
                      fontFamily={"Prompt"}
                      fontWeight={300}
                      sx={{
                        pl: 3
                      }}
                    >
                      Continue with Google
                    </Typography>
                  </Button>
                </Box>
              </Grid2>
            </Grid2>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default login
