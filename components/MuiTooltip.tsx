
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/delete"
export const MuiTooltip = () => {
    return (
      <Tooltip title='Delete' placement="right">
      <IconButton>
          <DeleteIcon />
            </IconButton>
        </Tooltip>
  )
}
