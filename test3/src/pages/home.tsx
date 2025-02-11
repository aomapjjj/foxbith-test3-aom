import Logo from "@/components/Logo"
import Navbar from "@/components/Navbar"
import { Box, Button, Grid2, Grow, Typography } from "@mui/material"
import { useRouter } from "next/router"

const home = () => {
  const router = useRouter()

  const handleLotto = async () => {
    router.push("/lottory")
  }
  const handleQuestion = async () => {
    router.push("/question")
  }

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", pt: "20px" }}>
        <Grow
          in={true}
          style={{ transformOrigin: "0 0 0" }}
          {...(true ? { timeout: 1000 } : {})}
        >
          <div>
            <Logo />
          </div>
        </Grow>
      </Box>

      <Grid2
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          py: "50px",
          px: "100px",
          gap: 4
        }}
      >
        <Grid2 size={12}>
          <Button
            onClick={handleLotto}
            variant="text"
            color="warning"
            sx={{
              boxShadow: 3,
              width: "100%",
              height: "300px",
              alignContent: "center",
              justifyItems: "center",
              borderRadius: "10px"
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                fontFamily: "Prompt"
              }}
            >
              🦊 Foxbith Lottory
            </Typography>
          </Button>
        </Grid2>

        <Grid2 size={12}>
          <Button
            onClick={handleQuestion}
            variant="contained"
            color="warning"
            sx={{
              boxShadow: 3,
              width: "100%",
              height: "300px",
              alignContent: "center",
              justifyItems: "center",
              borderRadius: "10px"
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                fontFamily: "Prompt"
              }}
            >
              🦊 Foxbith Questionnaire
            </Typography>
          </Button>
        </Grid2>
      </Grid2>
    </>
  )
}
export default home
