import { Radio } from "@mui/material"
import { Check } from "lucide-react"

const Choice = () => {
  return (
    <div>
      <Radio
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
        sx={{
          "&, &.Mui-checked": {
            color: "black"
          }
        }}
      />
    </div>
  )
}
export default Choice
