import React, {  useRef } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import { Typography, Avatar, IconButton, Box } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined'
import { FileAttachmentProps } from "./index.types"

function FileAttachment(props: FileAttachmentProps) {
  const {
    size,
    file,
    index,
    disabled,
    handleRemoveFile
  } = props

  const theme = useTheme()

  const avatarRef = useRef<HTMLDivElement | null>(null)

  let icon: React.ReactNode =
    <InsertDriveFileOutlinedIcon color="primary" fontSize="large" />

  // Set icon for compressed files
  if (/\.(g?zip|tar|gz|rar)$/i.test(file.name)) {
    icon = <ArchiveOutlinedIcon color="primary" fontSize="large" />
  }

  // Set icon for media files
  if (/\.(mp.|midi|mkv|avi)$/i.test(file.name)) {
    icon = <PlayCircleOutlineIcon color="primary" fontSize="large" />
  }

  return (
    <>
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
            ref={avatarRef}
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
              {file.name}
            </Typography>
            <Typography variant="caption" noWrap>
              <React.Fragment>
                <b
                  // eslint-disable-next-line
                  // @ts-ignore
                >{size}</b> | <b>{file?.extension ? file.extension.toLowerCase() : ''}</b>
              </React.Fragment>
            </Typography>
          </Typography>
        </Box>

        <Typography component="div" sx={{ mr: -.5, textAlign: 'right' }}>
          <IconButton
            disabled={disabled}
            onClick={(event): void => handleRemoveFile(event, index)}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
      </Box>
    </>
  )
}

FileAttachment.propTypes = {
  size: PropTypes.string,
  file: PropTypes.object,
  disabled: PropTypes.bool,
  index: PropTypes.number.isRequired,
  handleRemoveFile: PropTypes.func.isRequired
}

export default FileAttachment