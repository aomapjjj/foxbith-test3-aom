import { CheckCircle } from "@mui/icons-material"
import { FormControl, Radio } from "@mui/material"

interface ChoiceProps {
  checked?:any
  onChange?:any
}


const Choice = (props:ChoiceProps) => {
  const {checked  , onChange} = props
  return (
    <div>
      <FormControl>
        <Radio
          checkedIcon={<CheckCircle sx={{ color: "#00c62b" }} />}
          checked={checked}
          onChange={onChange}
        />
      </FormControl>
    </div>
  )
}
export default Choice
