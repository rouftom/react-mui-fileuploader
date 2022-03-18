import React, {useState, useRef, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import {styled, ThemeProvider} from "@mui/system"
import { Button, Grid, Typography, Paper, useTheme, Box, Hidden, Alert
} from '@mui/material'
import FileAttachment from "./FileAttachment.jsx"
import uploadImage from '../public/Files_And_Folder_Two_Color_2.svg'

const StyledContainer = styled(Typography)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: 7,
    height: 6
  },
  "&::-webkit-scrollbar-track": {
    WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)"
  },
  "&::-webkit-scrollbar-thumb": {
    WebkitBorderRadius: 4,
    borderRadius: 4,
    background: "rgba(0, 172, 193, .5)",
    WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)"
  },
  "&::-webkit-scrollbar-thumb:window-inactive": {
    background: "rgba(125, 161, 196, 0.5)"
  }
}))

/**
 * @name FileUpload
 * @description
 * @param props
 * @returns
 */
function FileUpload(props) {
  const theme = useTheme()
  const {
    disabled,
    multiFile,
    title,
    header,
    leftLabel,
    rightLabel,
    buttonLabel,
    defaultFiles,
    onError,
    errorSizeMessage,
    onFilesChange,
    maxUploadFiles,
    maxFileSize,
    filesContainerHeight,
    maxFilesContainerHeight,
    allowedExtensions,
    containerProps,
    bannerProps,
    imageSrc,
    imageDimension
  } = props
  
  const [error, setError] = useState()
  const [animate, setAnimate] = useState()
  const [files, setFiles] = useState([])
  
  const oneMega = 1024 * 1024
  const filesCardRef = useRef()
  
  /**
   * @name renderPreview
   * @description
   * @param event
   * @param filesTab
   * @returns void
   */
  const renderPreview = (event, filesTab) => {
    setAnimate(false)
    setError(null)
    if (!filesTab && event?.target?.files) {
      filesTab = event?.target?.files
    }
    if (!filesTab) {
      return onError(`Empty file input`)
    }
    if (maxUploadFiles) {
      if (maxUploadFiles - (files.length + filesTab?.length) <= 0) {
        setError(`You cannot attach more than ${maxUploadFiles} files`)
        return onError(`You cannot attach more than ${maxUploadFiles} files`)
      }
    }
    
    //
    if (window.File && window.FileReader && window.FileList && window.Blob) {
      for (let i = 0; i < filesTab?.length; i++) {
        let file = filesTab[i]
        let extension = file?.type?.split('/')[1]
        //
        if (maxFileSize && maxFileSize > 0) {
          if (file.size > (1024 * 1024 * maxFileSize)) {
            let message = errorSizeMessage || `The size of files cannot exceed ${maxFileSize}Mb`
            setError(message)
            onError(message)
            break
          }
        }
        //
        if (allowedExtensions?.length > 0) {
          let isAllowed = allowedExtensions
            .findIndex(
              ext => ext?.toLowerCase() === extension.toLowerCase()
            ) !== -1
          if (!isAllowed) {
            let message = `Extension .${extension} has been excluded`
            setError(message)
            onError(message)
            break
          }
        }
        //
        let reader = new FileReader()
        reader.addEventListener("load", function () {
          let obj = {
            lastModified: file.lastModified,
            name: file.name,
            size: file.size,
            path: this.result,
            extension: extension?.toLowerCase(),
            contentType: file.type,
          }
          files.push(obj)
          setFiles([...files])
        }, false)
        reader.readAsDataURL(file)
      }
      event?.dataTransfer?.clearData()
    }
  }
  
  /**
   * @name handleRemoveFile
   * @description
   * @param index
   * @returns void
   */
  const handleRemoveFile = (index) => {
    setError(null)
    document.getElementById('input-files').value = ''
    if (typeof index !== 'number') {
      setFiles([])
      return onFilesChange([])
    }
    if (index < 0 || index > files.length-1) return
    files?.splice(index, 1)
    setFiles([...files])
  }
  
  /**
   * @name handleDragEnter
   * @description
   * @returns void
   */
  const handleDragEnter = useCallback((event) => {
    event.preventDefault()
    setAnimate(true)
  }, [])
  
  /**
   * @name handleDragOver
   * @description
   * @returns void
   */
  const handleDragOver = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
    setAnimate(true)
  }, [])
  
  /**
   * @name handleDrop
   * @description
   * @returns void
   */
  const handleDrop = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
    let dt = event.dataTransfer
    if (dt.files) renderPreview(event, dt.files)
  }, [])
  
  /**
   * @name handleDragLeave
   * @description
   * @returns void
   */
  const handleDragLeave = useCallback((event) => {
    setAnimate(false)
  }, [])
  
  useEffect(() => {
    let dragDiv = filesCardRef.current
    if (dragDiv && !disabled) {
      dragDiv.ondragenter = handleDragEnter
      dragDiv.ondragover = handleDragOver
      dragDiv.ondrop = handleDrop
      dragDiv.ondragleave = handleDragLeave
    }
    // eslint-disable-next-line
  }, [filesCardRef.current])
  
  useEffect(() => {
    if (defaultFiles?.length > 0) {
      setFiles(defaultFiles)
    }
    // eslint-disable-next-line
  }, [defaultFiles])
  
  useEffect(() => {
    if (files && onFilesChange) { onFilesChange([...files]) }
    // eslint-disable-next-line
  }, [files])
  
  //
  let background = animate ? theme.palette.secondary.light : theme.palette.primary.light
  
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{p: 1}}
        elevation={0}
        ref={filesCardRef}
        variant="outlined"
        {...containerProps}
      >
        <Typography
          gutterBottom
          component="div"
          color="textSecondary"
          sx={{ display: 'flex' }}
        >
          <Box sx={{ flexGrow: 1, fontSize: 12 }}>{title}</Box>
          {files?.length > 0 &&
          <Box sx={{fontSize: 12}}>
            {files.length}
            {maxUploadFiles > 0 && `/${maxUploadFiles}`} file{files?.length > 0 && 's'} joined
          </Box>}
        </Typography>
        <Paper
          elevation={0}
          sx={{ p: 1, transition: 500, background: background }}
          {...bannerProps}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={3} md={4} sx={{textAlign: 'center'}}>
              <Hidden smDown>
                <img
                  alt="loading image..."
                  width={imageDimension[0] || 120}
                  height={imageDimension[1] || 120}
                  src={imageSrc || uploadImage}
                />
              </Hidden>
              <Hidden smUp>
                <img
                  alt="loading image..."
                  width={imageDimension[2] || 128}
                  height={imageDimension[3] || 128}
                  src={imageSrc || uploadImage}
                />
              </Hidden>
            </Grid>
            <Grid
              item
              xs={12} sm={9} md={8}
              sx={{color: "#fff", textAlign: 'center'}}
            >
              <Hidden smDown>
                <Typography variant="h5"><b>{header}</b></Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant="h6"><b>{header}</b></Typography>
              </Hidden>
              <Typography variant="caption">
                {leftLabel}
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  disabled={disabled}
                  sx={{
                    m: .5,
                    color: theme.palette.grey["50"],
                    borderColor: theme.palette.grey["50"],
                    '&:hover': { borderColor: theme.palette.grey["50"] }
                  }}
                  onClick={() => document.getElementById('input-files').click()}
                >
                  {buttonLabel}
                </Button>
                {rightLabel}
              </Typography>
              <input
                type="file"
                accept={`*/*`}
                id="input-files"
                multiple={multiFile}
                onChange={renderPreview}
                style={{display: "none"}}
              />
            </Grid>
          </Grid>
        </Paper>
        {error &&
        <Alert color="error" severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>}
        {files?.length > 0 &&
        <>
          <StyledContainer
            component="div"
            sx={{
              overflowY: "auto",
              mt: 2, mr: -1, pr: 1,
              height: filesContainerHeight,
              maxHeight: maxFilesContainerHeight
            }}
          >
            {
              files?.map((file, index) => {
                let size = file.size
                if (size > oneMega) {
                  size = (file.size/oneMega).toFixed(2) + ' Mb'
                } else {
                  size = (file.size/1024).toFixed(2) + ' Kb'
                }
                return (
                  <FileAttachment
                    file={file}
                    size={size}
                    index={index}
                    disabled={disabled}
                    key={`upload-file--${index}`}
                    hanfleRemoveFile={handleRemoveFile}
                  />
                )
              })
            }
          </StyledContainer>
          <Typography component="div" align="right" sx={{mt: 1}}>
            <Button
              size="small"
              disabled={disabled}
              onClick={handleRemoveFile}
            >
              Remove all
            </Button>
          </Typography>
        </>}
      </Paper>
    </ThemeProvider>
  )
}

FileUpload.propTypes = {
  maxUploadFiles: PropTypes.number,
  title: PropTypes.string,
  header: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
  multiFile: PropTypes.bool,
  disabled: PropTypes.bool,
  maxFileSize: PropTypes.number,
  maxFilesContainerHeight: PropTypes.number,
  errorSizeMessage: PropTypes.string,
  allowedExtensions: PropTypes.array,
  onError: PropTypes.func,
  onFilesChange: PropTypes.func,
  imageSrc: PropTypes.string,
  imageDimension: PropTypes.array
}

FileUpload.defaultProps = {
  multiFile: true,
  allowedExtensions: [],
  title: "My awesome file uploader",
  header: ">[Drag to drop]<",
  leftLabel: "or",
  rightLabel: "to select files",
  buttonLabel: "click here",
  maxFilesContainerHeight: 300,
  imageDimension: [120, 120, 128, 128]
}

export default FileUpload