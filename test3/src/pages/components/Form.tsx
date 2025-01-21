import { Box, Grid2, Typography } from "@mui/material"
import FormInput from "./form/FormInput"
import Question from "./form/Question"

const Form = () => {
  return (
    <div>
      <Box
        sx={{
          mb: -1,
          mx: 2,
          gap: 6,
          p: 2,
          boxShadow: 3,
          backgroundColor: "white",
          borderRadius: 3,
        }}
      >
        <Grid2
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          sx={{
            p: 2,
          }}
        >
          <Grid2 size={12}>
            <Typography
              variant="h6"
              fontFamily={"Prompt"}
              sx={{ flexGrow: 1, color: "black" }}
            >
              Questionnaire Detail
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <FormInput name="Name" label="Name*" />
          </Grid2>
          <Grid2 size={12}></Grid2>
        </Grid2>
      </Box>
      <Question />
      
    </div>
  )
}
export default Form
