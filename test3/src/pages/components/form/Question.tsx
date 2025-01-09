import { Box, Button, Grid2, Radio, Typography } from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import { Plus } from "lucide-react"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"

const Question = () => {
  const QUESTION_INIT = {
    id: "1",
    question: "",
    description: "",
  }

  return (
    <div>
      <Box
        sx={{
          mx: 2,
          p: 2,
          boxShadow: 3,
          backgroundColor: "white",
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
              component="div"
              sx={{ flexGrow: 1, color: "black" }}
            >
              Question {QUESTION_INIT.id}
            </Typography>
          </Grid2>
          <Grid2 size={12}>
            <FormInput name="Question" label="Question*" />
          </Grid2>
          <Grid2 size={12}>
            <Box
              sx={{
                p: 1,
                display: "flex",
              }}
            >
              <Choice />
              <FormInput name="Desciption" label="Desciption*" />
            </Box>
          </Grid2>
          <Grid2 size={12}>
            <Button color="warning" sx={{ display: "flex", gap: 1 }} >
              <Plus /> <p color="warning">Add Choice</p>
            </Button>
          </Grid2>
          <Grid2 size={12}>
            <ManageForm />
          </Grid2>
          <Grid2 size={12}>
            <AddForm />
          </Grid2>
        </Grid2>
      </Box>
    </div>
  )
}
export default Question
