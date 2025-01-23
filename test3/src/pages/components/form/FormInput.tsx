import { colors } from "@mui/material"
import TextField from "@mui/material/TextField"
import styled from "styled-components"
import { outlinedInputClasses } from "@mui/material/OutlinedInput"

import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme
} from "@mui/material/styles"
import { useState } from "react"

type FormInputProps = {
  name: string
  value?: string
  label: string
  onChange?: any
  addDes?: any
  helperText?: any
}
const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#616569",
            "--TextField-brandBorderHoverColor": "#616569",
            "--TextField-brandBorderFocusedColor": "#616569",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)"
            }
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)"
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)"
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)"
            }
          }
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&::before, &::after": {
              borderBottom: "8px  var(--TextField-brandBorderColor)"
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "8px  var(--TextField-brandBorderHoverColor)"
            },
            "&.Mui-focused:after": {
              borderBottom: "8px  var(--TextField-brandBorderFocusedColor)"
            }
          }
        }
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&::before": {
              borderBottom: "8px  var(--TextField-brandBorderColor)"
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "8px  var(--TextField-brandBorderHoverColor)"
            },
            "&.Mui-focused:after": {
              borderBottom: "8px  var(--TextField-brandBorderFocusedColor)"
            }
          }
        }
      }
    }
  })

const FormInput = (props: FormInputProps) => {
  const { name, label, value, onChange, helperText } = props

  const outerTheme = useTheme()

  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)}>
        
        <TextField
          name={name}
          label={label}
          value={value}
          variant="outlined"
          onChange={onChange}
          helperText={helperText}
          sx={{
            width: "100%",
            [`& label`]: {
              fontFamily: "Prompt"
            },
            "& .MuiOutlinedInput-root": {
              fontFamily: "Prompt",
              height: "48px",
              borderRadius: "8px"
            }
          }}
        />
      </ThemeProvider>
    </>
  )
}
export default FormInput
