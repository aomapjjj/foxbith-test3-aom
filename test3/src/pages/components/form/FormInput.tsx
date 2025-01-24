import { colors } from "@mui/material"
import TextField from "@mui/material/TextField"
import styled from "styled-components"
import { outlinedInputClasses } from "@mui/material/OutlinedInput"
import { Controller } from "react-hook-form"

import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme
} from "@mui/material/styles"
import { useState } from "react"

type FormInputProps = {
  name?: any
  value?: string
  label: string
  onChange?: any
  addDes?: any
  helperText?: any
  control?: any
  register?: any
  enableMsg?:any
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
  const { name, label, value, onChange, control , helperText , enableMsg } = props

  const outerTheme = useTheme()

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={(renderProps) => (
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              variant="outlined"
              label={label}
              onChange={onChange}
              value={value}
              helperText={value === "" ? renderProps.fieldState.error?.message : helperText}
              error={value === "" ? !!renderProps.fieldState.error : renderProps.fieldState.isValidating}
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
        )}
      />
    </>
  )
}
export default FormInput
