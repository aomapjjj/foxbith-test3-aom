import { Box, Button, Divider, Typography } from "@mui/material"
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
    <>
      <Divider />
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
          <Typography
            style={{
              fontFamily: "Prompt"
            }}
          >
            Duplicate
          </Typography>
        </Button>
        <Button
        onClick={onClickDelete}
          sx={{
            gap: 1,
            "&, &.Mui-checked": {
              color: "black"
            }
          }}
        >
          <DeleteOutlineIcon />
          <Typography
            style={{
              fontFamily: "Prompt"
            }}
          >
            Delete
          </Typography>
        </Button>
      </Box>
    </>
  )
}
export default ManageForm
