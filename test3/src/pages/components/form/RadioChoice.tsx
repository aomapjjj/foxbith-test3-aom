import { CheckCircle } from "@mui/icons-material"
import { FormControl, Radio } from "@mui/material"

const Choice = () => {
  return (
    <div>
      <FormControl>
        <Radio
          checkedIcon={<CheckCircle sx={{ color: "#00c62b" }} />}
          // checked={choice.correct}
          // onChange={() => handleSetCorrectChoice(question.id, choice.id)}
        />
      </FormControl>
    </div>
  )
}
export default Choice
