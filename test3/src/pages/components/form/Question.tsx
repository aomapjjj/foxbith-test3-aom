import { Box, Button, Grid2, Radio, Typography } from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import AddIcon from "@mui/icons-material/Add"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"
import { useActionState, useState } from "react"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import * as Yup from "yup"

interface validateFormProps {
  valid?: any
}

const QUESTION_INIT = {
  id: 1,
  question: "",
  description: [{ id: 0, description: "" }]
}

const Question = (props: validateFormProps) => {
  const { valid } = props
  const defaultQuestion = JSON.parse(JSON.stringify({ ...QUESTION_INIT }))
  const [questions, setQuestions] = useState<any>([{ ...defaultQuestion }])

  const validationSchema = Yup.object({
    question: Yup.string().required("Please fill in this option")
  })

  const handleSubmit = async () => {
   const validForm = await validationSchema.isValid(questions)
   console.log(validForm)
  }

  handleSubmit()


  const addDescription = (index: any) => {
    setQuestions((prevQuestion: any) => {
      prevQuestion[index].description.push({
        id: prevQuestion[index].description.length,
        description: ""
      })
      return [...prevQuestion]
    })
  }
  const handleChangeDescription = (e: any, indexQ: any, indexD: any) => {
    setQuestions((prev: any) => {
      prev[indexQ].description[indexD] = e.target.value
      return [...prev]
    })
  }
  const handleChangeQuestion = (e: any, indexQ: any) => {
    setQuestions((prev: any) => {
      prev[indexQ].question = e.target.value

      return [...prev]
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
    if (questions.length > 1) {
      setQuestions((prev: any) => {
        const updatedList = prev.filter((item: any) => prev[index] !== item)
        return [...updatedList]
      })
    }
  }
  const deleteDescription = (indexQ: any, indexD: any) => {
    if (questions[indexQ].description.length > 1) {
      setQuestions((prev: any) => {
        const updatedList = prev[indexQ].description.filter(
          (item: any) => prev[indexQ].description[indexD] !== item
        )
        console.log(updatedList)
        prev[indexQ].description = [...updatedList]
        console.log(prev[indexQ])
        return [...prev]
      })
    }
  }
  const duplicateQuestion = (index: any) => {
    setQuestions((prev: any) => {
      console.log("prev", prev)
      return [...prev, JSON.parse(JSON.stringify({ ...prev[index] }))]
    })
  }

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
              <FormInput
                name="Question"
                label="Question*"
                onChange={(e: any) => handleChangeQuestion(e, questionIndex)}
                value={question.question}
              />
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
                  <FormInput
                    name="Desciption"
                    label="Desciption*"
                    onChange={(e: any) =>
                      handleChangeDescription(e, questionIndex, index)
                    }
                    value={typeof description === "object" ? "" : description}
                  />
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
              <ManageForm
                onClickDelete={() => deleteQuestion(questionIndex)}
                onClicDuplicate={() => duplicateQuestion(questionIndex)}
              />
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
