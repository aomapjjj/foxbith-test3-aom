import { Box, Button } from "@mui/material"
import {ContentCopy , DeleteOutline}from "@mui/icons-material"

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
          <ContentCopy />
          <p
            style={{
              fontFamily: "Prompt"
            }}
          >
            Duplicate
          </p>
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
