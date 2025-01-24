import {
  AppBar,
  Box,
  Button,
  Grid2,
  Radio,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import FormInput from "./FormInput"
import Choice from "./RadioChoice"
import AddIcon from "@mui/icons-material/Add"
import ManageForm from "./ManageForm"
import AddForm from "./AddForm"
import { useActionState, useState } from "react"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
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

const Question = () => {
  const defaultQuestion = JSON.parse(JSON.stringify({ ...QUESTION_INIT }))
  const [questions, setQuestions] = useState<any>([{ ...defaultQuestion }])
  const [questionNameTag, setQuestionNameTag] = useState("")
  const [msgchoice, setMsgChoice] = useState("")

  const validationSchema = Yup.object({
    questionName: Yup.string().required("Please fill in this option"),
    question: Yup.string().required("Please fill in this option"),
    description: Yup.string().required("Please fill in this option")
  })

  const { handleSubmit, control, reset, register } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      questionName: "",
      question: "",
      description: ""
    }
  })

  const [resetManual, setResetManual] = useState(false)

  const resetForm = () => {
    reset()
  }

  const onSubmit = () => {}

  const addDescription = (index: any) => {
    const id: any = uuidv4()
    setQuestions((prevQuestion: any) => {
      prevQuestion[index].descriptions.push({
        id: id,
        description: "",
        checkChoice: false
      })
      return [...prevQuestion]
    })
  }

  const handleChangeDescription = (e: any, indexQ: any, indexD: any) => {
    setQuestions((prev: any) => {
      prev[indexQ].descriptions[indexD].description = e.target.value
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
    const id: any = uuidv4()
    setQuestions((prev: any) => {
      return [...prev, JSON.parse(JSON.stringify({ ...QUESTION_INIT, id: id }))]
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
  const duplicateQuestion = (index: any) => {
    setQuestions((prev: any) => {
      return [...prev, JSON.parse(JSON.stringify({ ...prev[index] }))]
    })
  }

  const handleChoice = (e: any, indexQ: any, indexD: any) => {
    setQuestions((prev: any) => {
      if (prev[indexQ].descriptions[indexD].description) {
        prev[indexQ].descriptions[indexD].checkChoice = true
        setMsgChoice("This answer is correct")
      }
      return [...prev]
    })
  }

  const [messageQues, formActionsQues] = useActionState(addQuestion, null)

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
                onChange={(e: any) => setQuestionNameTag(e.target.value)}
              />
            </Grid2>
            <Grid2 size={12}></Grid2>
          </Grid2>
        </Box>

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
                  Question {questionIndex + 1}
                </Typography>
              </Grid2>
              <Grid2 size={12}>
                <FormInput
                  name="question"
                  label="Question*"
                  control={control}
                  onChange={(e: any) => handleChangeQuestion(e, questionIndex)}
                  value={question.question}
                />
              </Grid2>

              {question?.descriptions?.map((description: any, index: any) => (
                <Grid2 size={12} key={index}>
                  <Box
                    sx={{
                      p: 1,
                      display: "flex"
                    }}
                  >
                    <Choice
                      checked={description.checkChoice}
                      onChange={(e: any) => {
                        handleChoice(e, questionIndex, index)
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
                      onChange={(e: any) =>
                        handleChangeDescription(e, questionIndex, index)
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
                      <DeleteOutlineIcon />
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
      </Stack>
    </div>
  )
}
export default Question
