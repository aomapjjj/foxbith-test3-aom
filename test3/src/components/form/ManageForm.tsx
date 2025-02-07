import { Box, Button, Divider, Typography } from "@mui/material"
import { ContentCopy, DeleteOutline } from "@mui/icons-material"

interface ManageProps {
  onClickDelete?: React.MouseEventHandler<HTMLButtonElement>
  onClicDuplicate?: React.MouseEventHandler<HTMLButtonElement>
}

const ManageForm = (props: ManageProps) => {
  const { onClicDuplicate, onClickDelete } = props
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
          <ContentCopy />
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
          <DeleteOutline />
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
