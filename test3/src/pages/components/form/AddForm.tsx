import { Box, Button } from "@mui/material"
import { Plus } from "lucide-react"
const AddForm = () => {
  return (
    <div>
      <Box
        sx={{
          gap: 6,
          backgroundColor: "white",
          borderRadius: 3,
        }}
      >
        <Button
          color="warning"
          variant="outlined"
          sx={{
            width: "100%",
            gap: 2,
          }}
        >
          <Plus /> <p color="warning">Add Question</p>
        </Button>
      </Box>
    </div>
  )
}
export default AddForm
