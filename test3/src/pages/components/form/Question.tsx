import {
  AppBar,
  Box,
  Button,
  Grid2,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import { Add, DeleteOutline } from "@mui/icons-material"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"
import { useState } from "react"
import * as Yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { v4 as uuidv4 } from "uuid"

interface FormValues {
  questionName: string
  question: string
  description: string
}

const QUESTION_INIT = {
  id: uuidv4(),
  question: "",
  descriptions: [{ id: uuidv4(), description: "", checkChoice: false }]
}

interface QUESTION_INIT {
  id: string
  question: string
  descriptions: [{ id: string; description: string; checkChoice: boolean }]
}

const Question = () => {
  const defaultQuestion = JSON.parse(JSON.stringify({ ...QUESTION_INIT }))
  const [questions, setQuestions] = useState<QUESTION_INIT[]>([
    { ...defaultQuestion }
  ])
  const [questionNameTag, setQuestionNameTag] = useState("")
  const [msgchoice, setMsgChoice] = useState("")

  const validationSchema = Yup.object({
    questionName: Yup.string().required("Please fill in this option"),
    question: Yup.string().required("Please fill in this option"),
    description: Yup.string().required("Please fill in this option")
  })

  const { handleSubmit, control, reset } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      questionName: "",
      question: "",
      description: ""
    }
  })

  const handleChoice = (indexQ: number, indexD: number) => {
    setQuestions((prev: QUESTION_INIT[]) => {
      prev[indexQ].descriptions[indexD].checkChoice = true
      const uncheck = prev[indexQ].descriptions.filter(
        (item) => prev[indexQ].descriptions[indexD] !== item
      )
      uncheck.map((item) => (item.checkChoice = false))
      setMsgChoice("This answer is correct")
      return [...prev]
    })
  }

  const handleChangeDescription = (
    e: string,
    indexQ: number,
    indexD: number
  ) => {
    setQuestions((prev: QUESTION_INIT[]) => {
      prev[indexQ].descriptions[indexD].description = e
      return [...prev]
    })
  }
  const handleChangeQuestion = (e: string, indexQ: number) => {
    setQuestions((prev: QUESTION_INIT[]) => {
      prev[indexQ].question = e
      return [...prev]
    })
  }

  const addQuestion = () => {
    const id: string = uuidv4()
    setQuestions((prev: QUESTION_INIT[]) => {
      return [...prev, JSON.parse(JSON.stringify({ ...QUESTION_INIT, id: id }))]
    })
  }

  const deleteQuestion = (index: number) => {
    if (questions.length > 1) {
      setQuestions((prev: QUESTION_INIT[]) => {
        const updatedList = prev.filter((item) => prev[index] !== item)
        return [...updatedList]
      })
    }
  }

  const deleteDescription = (indexQ: number, indexD: number) => {
    if (questions[indexQ].descriptions.length > 1) {
      setQuestions((prev: any) => {
        const updatedList = prev[indexQ].descriptions.filter(
          (item: any) => prev[indexQ].descriptions[indexD] !== item
        )
        prev[indexQ].descriptions = [...updatedList]
        return [...prev]
      })
    }
  }
  const duplicateQuestion = (index: number) => {
    setQuestions((prev: QUESTION_INIT[]) => {
      return [...prev, JSON.parse(JSON.stringify({ ...prev[index] }))]
    })
  }

  const resetForm = () => {
    reset()
  }

  const onSubmit = () => {}

  const addDescription = (index: number) => {
    const id: string = uuidv4()
    setQuestions((prevQuestion: QUESTION_INIT[]) => {
      prevQuestion[index].descriptions.push({
        id: id,
        description: "",
        checkChoice: false
      })
      return [...prevQuestion]
    })
  }

  return (
    <div>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ p: "12px", justifyContent: "end" }}>
          <Button
            variant="outlined"
            onClick={() => resetForm()}
            sx={{
              width: "89px",
              height: "48px",
              borderRadius: 2,
              borderColor: "#FF5C00",
              fontFamily: "Prompt",
              color: "#FF5C00"
            }}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={handleSubmit(onSubmit)}
            sx={{
              width: "180px",
              height: "48px",
              borderRadius: 2,
              fontFamily: "Prompt",
              ml: "12px"
            }}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>

      <Stack sx={{ p: "8px", pt: "16px", bgcolor: "#F3F4F6" }}>
        <Box
          sx={{
            mb: -1,
            mx: 2,
            gap: 6,
            p: 2,
            boxShadow: 3,
            backgroundColor: "white",
            borderRadius: 3
          }}
        >
          <Grid2
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 1, md: 1 }}
            sx={{
              p: 2
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
              <FormInput
                name="questionName"
                label="Name*"
                control={control}
                value={questionNameTag}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setQuestionNameTag(e.target.value)
                }
              />
            </Grid2>
            <Grid2 size={12}></Grid2>
          </Grid2>
        </Box>

        {questions?.map((question, questionIndex) => (
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
                  Question {questionIndex + 1}
                </Typography>
              </Grid2>
              <Grid2 size={12}>
                <FormInput
                  name="question"
                  label="Question*"
                  control={control}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeQuestion(e.target.value, questionIndex)
                  }
                  value={question.question}
                />
              </Grid2>

              {question?.descriptions?.map((description, index) => (
                <Grid2 size={12} key={index}>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex"
                    }}
                  >
                    <Choice
                      checked={description.checkChoice}
                      onChange={() => {
                        handleChoice(questionIndex, index)
                      }}
                    />

                    <FormInput
                      name="description"
                      label="Desciption*"
                      control={control}
                      value={
                        typeof description.description === "object"
                          ? ""
                          : description.description
                      }
                      helperText={description.checkChoice ? msgchoice : ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChangeDescription(
                          e.target.value,
                          questionIndex,
                          index
                        )
                      }
                    />
                    <Button
                      onClick={() => {
                        deleteDescription(questionIndex, index)
                      }}
                      sx={{
                        color: "black",
                        p: 1
                      }}
                    >
                      <DeleteOutline />
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
                    <Add />
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

        <AddForm onClick={addQuestion} />
      </Stack>
    </div>
  )
}
export default Question
