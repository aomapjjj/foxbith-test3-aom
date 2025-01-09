import { Radio } from "@mui/material"
import { Check } from 'lucide-react';


const Choice = () => {
  return (
    <div>
      <Radio
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
        sx={{
          "&, &.Mui-checked": {
            color: "#00C62B",
          },
        }}
      />
    </div>
  )
}
export default Choice
