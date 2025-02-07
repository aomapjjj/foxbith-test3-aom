import TextField from "@mui/material/TextField"
import { outlinedInputClasses } from "@mui/material/OutlinedInput"
import { Control, Controller,  FieldValues } from "react-hook-form"

import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme
} from "@mui/material/styles"

interface FormInputProps {
  name: string
  value?: string
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
  helperText?: string
  control?: any
  placeholder?:string,
  type?:string
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
  const { name, label, value, onChange, control, helperText ,placeholder , type} = props

  const outerTheme = useTheme()

  if (!control) {
    return null
  }

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
              type={type}
              value={value}
              helperText={
                !value ? renderProps.fieldState.error?.message : helperText
              }
              error={
                !value
                  ? !!renderProps.fieldState.error
                  : renderProps.fieldState.isValidating
              }
              placeholder={placeholder}
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