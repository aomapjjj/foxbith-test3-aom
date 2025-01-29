import { Box, Button } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
const AddForm = () => {
  return (
    <div>
      <Box
        sx={{
          mx: 2,
          boxShadow: 3,
          p:"16px",
          backgroundColor: "white",
          borderEndEndRadius: 3
        }}
      >
        <Button
          color="warning"
          variant="outlined"
          sx={{
            width: "100%",
            gap: 2,
            borderRadius:"8px"
          }}
          type="submit"
        >
          <AddIcon />
          <p
            color="warning"
            style={{
              fontFamily: "Prompt"
            }}
          >
            Add Question
          </p>
        </Button>
      </Box>
    </div>
  )
}
export default AddForm
