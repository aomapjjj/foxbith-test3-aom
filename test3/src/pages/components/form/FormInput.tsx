import TextField from "@mui/material/TextField"

type FormInputProps = {
  name: string
  value?: string
  label: string
  onChange?: any
}

const FormInput = (props: FormInputProps) => {
  const { name, label, value, onChange } = props
  return (
    <>
      <TextField
        name={name}
        id="outlined-basic"
        label={label}
        value={value}
        variant="outlined"
        onChange={onChange}
        sx={{ width: "100%" 
          ,  [`& fieldset`]:{
                borderRadius:3
              }
         }}
        
      />
    </>
  )
}
export default FormInput
