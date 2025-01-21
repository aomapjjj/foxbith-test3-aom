import { Box, Button } from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"

interface ManageProps {
  href?: string
  onClickDelete?: any
  onClicDuplicate?: any
}

const ManageForm = (props: ManageProps) => {
  const { href, onClicDuplicate, onClickDelete } = props
  return (
    <div>
      <hr />
      <Box
        sx={{
          mt: 2,
          display: "flex"
        }}
      >
        <Button
          onClick={onClicDuplicate}
          sx={{
            gap: 1,
            "&, &.Mui-checked": {
              color: "black"
            }
          }}
        >
          <ContentCopyIcon />
          <p
            style={{
              fontFamily: "Prompt"
            }}
          >
            Duplicate
          </p>
        </Button>
        <Button
        onClick={() => {
          onClickDelete
        }}
          sx={{
            gap: 1,
            "&, &.Mui-checked": {
              color: "black"
            }
          }}
        >
          <DeleteOutlineIcon />
          <p
            style={{
              fontFamily: "Prompt"
            }}
          >
            Delete
          </p>
        </Button>
      </Box>
    </div>
  )
}
export default ManageForm
