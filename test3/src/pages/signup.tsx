import { Box, Typography, Button, Grid2, Stack } from "@mui/material"
import FormInput from "../components/form/FormInput"
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import Logo from "../components/Logo"
import { auth, provider, db } from "@/firebase"
import { useRouter } from "next/router"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import Cookies from "js-cookie"

interface FormValues {
  email: string
  password: string
}

const signup = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")

  const handleRegister = async (e: any) => {
   
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const user = auth.currentUser
      console.log(user)
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          password: password,
          firstName: fname,
          lastName: lname
        })
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        Cookies.set("loggedin", "true")
        router.push("/question")
      }
      console.log("User Registered Successfully!!")
    } catch (error: any) {
      console.log(error.message)
    }
  }

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
        <form onSubmit={handleRegister}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                my: 6,
                display: "flex",
                backgroundColor: "#F3F4F6",
                width: "450px",
                boxShadow: 3,
                borderRadius: "8px"
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
                      Please fill in this form to create an account
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
                      name="firstname"
                      label="First Name*"
                      control={control}
                      value={fname}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFname(e.target.value)
                      }
                      placeholder="Enter First Name"
                    />
                  </Box>
                  <Box
                    sx={{
                      px: "24px",
                      py: "16px"
                    }}
                  >
                    <FormInput
                      name="lastname"
                      label="Last Name*"
                      control={control}
                      value={lname}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLname(e.target.value)
                      }
                      placeholder="Enter Last Name"
                    />
                  </Box>

                  <Box
                    sx={{
                      px: "24px",
                      py: "16px"
                    }}
                  >
                    <FormInput
                      name="email"
                      label="Email*"
                      type="email"
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
                      py: "16px"
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
                <Grid2 size={12}>
                  <Box
                    sx={{
                      px: "24px",
                      py: "24px",
                      pb: 8
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
                      Sign up
                    </Button>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        </form>
      </Stack>
    </>
  )
}
export default signup
