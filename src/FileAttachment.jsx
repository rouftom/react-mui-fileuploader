import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import {Typography, Avatar, IconButton, Box} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'

function FileAttachment (props) {
  const {
    size,
    file,
    index,
    disabled,
    hanfleRemoveFile
  } = props
  const theme = useTheme()
  let icon = <InsertDriveFileOutlinedIcon color="primary" fontSize="large" />
  // Set icon for compressed files
  if (/\.(g?zip|tar|gz|rar)$/i.test(file?.name)) {
    icon = <ArchiveOutlinedIcon color="primary" fontSize="large" />
  }
  // Set icon for media files
  if (/\.(mp.|midi|mkv|avi)$/i.test(file?.name)) {
    icon = <PlayCircleOutlineIcon color="primary" fontSize="large" />
  }
  
  return (
    <Box
      sx={{
        mb: 0,
        display: 'flex',
        alignItems: 'center',
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.action.hover
        }
      }}
    >
      <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
        <Avatar
          alt=""
          src={file.path}
          variant="rounded"
          sx={{
            m: .5,
            width: 32,
            height: 32,
            display: 'flex',
            background: 'transparent'
          }}
        >
          {icon}
        </Avatar>
        <Typography
          component="div"
          sx={{ display: 'inline-grid', alignItems: 'center' }}
        >
          <Typography variant="body2" noWrap>
            {file?.name}
          </Typography>
          <Typography variant="caption" noWrap>
            <b>{size}</b> | <b>{file?.extension?.toLowerCase()}</b>
          </Typography>
        </Typography>
      </Box>
      <Typography component="div" sx={{ textAlign: 'right' }}>
        <IconButton 
          disabled={disabled} 
          onClick={() => hanfleRemoveFile(index)}
        >
          <CloseIcon />
        </IconButton>
      </Typography>
    </Box>
  )
}

FileAttachment.propTypes = {
  size: PropTypes.string.isRequired,
  file: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  hanfleRemoveFile: PropTypes.func.isRequired
}

export default FileAttachment