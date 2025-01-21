import { Box, Button, Grid2, Radio, Typography } from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import { Plus } from "lucide-react"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"
import { useActionState, useState } from "react"

interface Btn {
  href?: string
}

const QUESTION_INIT = {
  id: 1,
  question: "",
  description: ""
}

const DESCRIPTION_INIT = {
  id: "",
  describe: ""
}

const Question = (props: Btn) => {
  const { href } = props

  const [questions, setQuestions] = useState<any>([{ ...QUESTION_INIT }])
  const [questions1, setQuestions1] = useState<any>([{ ...QUESTION_INIT }])
  const [descriptions, setDescriptions] = useState<any>([
    { ...DESCRIPTION_INIT }
  ])

  const addDescription = () => {
    const data = [...descriptions, { ...DESCRIPTION_INIT }]
    setDescriptions(data)
  }
  const addQuestion = () => {
    const data = [...questions, { ...QUESTION_INIT }]
    setQuestions(data)
  }

  const deleteQuestion = (index: any) => {
    console.log("hello")
    // console.log(index)
    // setQuestions1((prev: any) => {
    //   const updatedList = prev.filter((item: any) => prev[index] !== item)
    //   return [...updatedList]
    // })

  }
  // const handleChange = (event: any, field: string) => {
  //   setValue((prev: any) => {
  //     prev[field] = event.target.value
  //     return { ...prev }
  //   })
  // }

  const [messageDelete, formActionsDelete] = useActionState(deleteQuestion, null)
  const [messageDes, formActionsDes] = useActionState(addDescription, null)
  const [messageQues, formActionsQues] = useActionState(addQuestion, null)

  return (
    <div>
      {questions?.map((question: any, index: any) => (
        <Box
          sx={{
            mx: 2,
            p: 2,
            boxShadow: 3,
            backgroundColor: "white"
          }}
        >
          <Grid2
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              p: 2,
              pb: 2
            }}
          >
            {/* formation */}

            <Grid2 size={12}>
              <Typography
                variant="h6"
                fontFamily={"Prompt"}
                sx={{ flexGrow: 1, color: "black" }}
              >
                Question {QUESTION_INIT.id + index}
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <FormInput name="Question" label="Question*" />
            </Grid2>

            {descriptions?.map((description: any, index: any) => (
              <Grid2 size={12}>
                <Box
                  sx={{
                    p: 1,
                    display: "flex"
                  }}
                >
                  <Choice />
                  <FormInput
                    key={1 + index}
                    name="Desciption"
                    label="Desciption*"
                    value={description.describe}
                  />
                </Box>
              </Grid2>
            ))}
            <form action={formActionsDes}>
              <Grid2 size={12}>
                <Button
                  href={href}
                  color="warning"
                  sx={{ display: "flex", gap: 1 }}
                  onClick={addDescription}
                >
                  <Plus />
                  <p
                    color="warning"
                    style={{
                      fontFamily: "Prompt"
                    }}
                  >
                    Add Choice
                  </p>
                </Button>
              </Grid2>
            </form>
            
            <Grid2 size={12}>
              <ManageForm />
            </Grid2>
           
            {/* formation */}
          </Grid2>
        </Box>
      ))}
      <form action={formActionsQues}>
        <AddForm />
      </form>
    </div>
  )
}
export default Question
