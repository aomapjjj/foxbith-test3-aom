import { Box, Button, Grid2, Radio, Typography } from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import AddIcon from "@mui/icons-material/Add"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"
import { useActionState, useState } from "react"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import { Description } from "@mui/icons-material"

interface Btn {
  href?: string
}

let id = 1

const QUESTION_INIT = {
  id: 1,
  question: "",
  description: [{ id: 0, description: "" }]
}

const Question = (props: Btn) => {
  const { href } = props
  const defaultQuestion = JSON.parse(JSON.stringify({ ...QUESTION_INIT }))
  const [questions, setQuestions] = useState<any>([{ ...defaultQuestion }])

  const addDescription = (index: any) => {
    setQuestions((prevQuestion: any) => {
      prevQuestion[index].description.push({
        id: prevQuestion[index].description.length,
        description: ""
      })
      return [...prevQuestion]
    })
  }

  const addQuestion = () => {
    setQuestions((prev: any) => {
      return [
        ...prev,
        JSON.parse(
          JSON.stringify({ ...QUESTION_INIT, id: questions.length + 1 })
        )
      ]
    })
  }

  const deleteQuestion = (index: any) => {
    console.log("hello")
    // console.log(index)
    // setQuestions1((prev: any) => {
    //   const updatedList = prev.filter((item: any) => prev[index] !== item)
    //   return [...updatedList]
    // })
  }

  const deleteDescription = (indexQ: any, indexD: any) => {
    if (questions[indexQ].description.length > 1) {
      setQuestions((prev: any) => {
        const updatedList = prev[indexQ].description.filter(
          (item: any) => prev[indexQ].description[indexD] !== item
        )
        // const newDesciption = {
        //   ...prev[indexQ],
        //   description: { ...updatedList }
        // }
        
        return [...prev]
      })
    }
  }
  // const handleChange = (event: any, field: string) => {
  //   setValue((prev: any) => {
  //     prev[field] = event.target.value
  //     return { ...prev }
  //   })
  // }

  // const [messageDes, formActionsDes] = useActionState(addDescription, null)
  const [messageQues, formActionsQues] = useActionState(addQuestion, null)

  return (
    <div>
      {questions?.map((question: any, questionIndex: any) => (
        <Box
          key={questionIndex}
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
                Question {QUESTION_INIT.id + questionIndex}
              </Typography>
            </Grid2>
            <Grid2 size={12}>
              <FormInput name="Question" label="Question*" />
            </Grid2>

            {question.description?.map((description: any, index: any) => (
              <Grid2 size={12} key={index}>
                <Box
                  sx={{
                    p: 1,
                    display: "flex"
                  }}
                >
                  <Choice />
                  <FormInput name="Desciption" label="Desciption*" />
                  <Button
                    onClick={() => {
                      deleteDescription(questionIndex, index)
                    }}
                    sx={{
                      color: "black"
                    }}
                  >
                    <DeleteOutlineIcon
                      sx={{
                        p: 1
                      }}
                    />
                  </Button>
                </Box>
              </Grid2>
            ))}
            <form>
              <Grid2 size={12}>
                <Button
                  href={href}
                  color="warning"
                  sx={{ display: "flex", gap: 1 }}
                  onClick={() => addDescription(questionIndex)}
                >
                  <AddIcon />
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
