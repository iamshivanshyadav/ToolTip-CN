
import { Tooltip, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
export const MuiTooltip = () => {
    return (
      <Tooltip title='Delete' placement="right">
      <IconButton>
          <DeleteIcon />
            </IconButton>
        </Tooltip>
  )
}
