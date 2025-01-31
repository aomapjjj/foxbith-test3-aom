import {
  Box,
  Typography,
  Button,
  Grid2,
  Divider,
  Chip,
  Stack
} from "@mui/material"
import FormInput from "./components/form/FormInput"
import { useState } from "react"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import GoogleIcon from "@mui/icons-material/Google"
import Logo from "./components/Logo"

interface FormValues {
  email: string
}

const login = () => {
  const [questionNameTag, setQuestionNameTag] = useState("")

  const validationSchema = Yup.object({
    email: Yup.string().required("Please fill in this option")
  })

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: ""
    }
  })

  return (
    <>
      <Stack sx={{ p: "8px", bgcolor: "#F3F4F6", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Box
            sx={{
              my: 14,
              display: "flex",
              backgroundColor: "white",
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
                    Don't have an account? Sign up
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
                    value={questionNameTag}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuestionNameTag(e.target.value)
                    }
                    placeholder="Enter Email"
                  />
                </Box>
                <Box
                  sx={{
                    px: "24px",
                    pb: "12px"
                  }}
                >
                  <FormInput
                    name="Password"
                    label="Password*"
                    control={control}
                    value={questionNameTag}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setQuestionNameTag(e.target.value)
                    }
                    placeholder="Enter Password"
                  />
                </Box>
              </Grid2>
              <Grid2 size={12}>
                <Box
                  sx={{
                    px: "24px",
                    py: "12px"
                  }}
                >
                  <Button
                    variant="contained"
                    color="warning"
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
                    pb: "46px"
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      width: "100%",
                      height: "48px",
                      borderRadius: 2,
              
                    }}
                  >
                    <GoogleIcon />
                    <Typography fontFamily={"Prompt"} fontWeight={300} sx={{
                      pl:3
                    }}>
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
