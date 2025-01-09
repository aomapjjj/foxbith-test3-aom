import { Box, Button } from "@mui/material"
import { Copy, Trash } from "lucide-react"

const ManageForm = () => {
  return (
    <div>
      <hr />
      <Box
        sx={{
          mt: 2,
          display: "flex",
        }}
      >
        <Button
          sx={{
            gap: 1,
            "&, &.Mui-checked": {
            color: "black",
          },
          }}
        >
          <Copy /> <p>Duplicate</p>
        </Button>
        <Button
          sx={{
            gap: 1,
            "&, &.Mui-checked": {
            color: "black",
          },
          }}
        >
          <Trash /> <p>Delete</p>
        </Button>
      </Box>
    </div>
  )
}
export default ManageForm
