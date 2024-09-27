import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  ChangeEvent,
} from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Grid,
  Alert,
  Paper,
  Box,
  Hidden,
  Typography,
  useMediaQuery,
  TypographyProps, PaperProps,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
// eslint-disable-next-line
// @ts-ignore
import uploadImage from '../public/Files And Folder_Two Color_2.svg'
import FileAttachment from './FileAttachment'
import {
  ExtendedFileProps,
  FileActionProps,
  PlaceholderImageDimensionProps,
  ImageDimensionProps,
  ContextProps,
  FileUploadProps,
} from "./index.types"

const StyledContainer: React.FC<TypographyProps> = styled(Typography)(() => ({
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

const oneMega: number = 1024 * 1024

/**
 * @name FileUpload
 * @description Upload file component wrapper
 * @param props FileUploadProps
 * @returns React.Component
 */
function FileUpload({
  getBase64 = false,
  multiFile = true,
  maxFileSize = 0,
  maxUploadFiles = 0,
  acceptedType = '*/*',
  defaultFiles = [],
  allowedExtensions = [],
  title = 'My awesome file uploader',
  header = '>[Drag to drop]<',
  leftLabel = 'or',
  rightLabel = 'to select files',
  buttonLabel = 'click here',
  imageSrcAlt = 'Placeholder image',
  maxFilesContainerHeight = 300,
  showPlaceholderImage = true,
  placeholderImageDimension = {},
  PlaceholderImageDimension = {},
  bannerProps = {},
  BannerProps = {},
  containerProps = {},
  ContainerProps = {},
  LabelsGridProps = {},
  PlaceholderGridProps = {},
  onError,
  disabled,
  imageSrc,
  onFilesChange,
  onContextReady,
  errorSizeMessage,
  buttonRemoveLabel,
  filesContainerHeight,
}: FileUploadProps) {
  const theme = useTheme()

  // noinspection JSDeprecatedSymbols
  const bannerCompatibilityProps: object = { ...bannerProps, ...BannerProps }
  // noinspection JSDeprecatedSymbols
  const containerCompatibilityProps: object = { ...containerProps, ...ContainerProps }
  // noinspection JSDeprecatedSymbols
  const { lg, md, sm, xs }: PlaceholderImageDimensionProps  = {
    ...placeholderImageDimension,
    ...PlaceholderImageDimension
  }

  const [error, setError] = useState<string | null>()
  const [action, setAction] = useState<FileActionProps | null>()
  const [animate, setAnimate] = useState<boolean>()
  const [files, setFiles] = useState<ExtendedFileProps[]>([])
  const [originalFiles, setOriginalFiles] = useState<ExtendedFileProps[]>([])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const buttonDeleteRef = useRef<HTMLButtonElement | null>(null)
  const filesCardRef = useRef<HTMLDivElement | null>(null)
  let imageDimension: ImageDimensionProps = { width: 128, height: 128 }

  if (useMediaQuery(theme.breakpoints.up('xs')) && xs) {
    imageDimension = xs
  }

  if (useMediaQuery(theme.breakpoints.up('sm')) && sm) {
    imageDimension = sm
  }

  if (useMediaQuery(theme.breakpoints.up('md')) && md) {
    imageDimension = md
  }

  if (useMediaQuery(theme.breakpoints.up('lg')) && lg) {
    imageDimension = lg
  }

  /**
   * @name addFile
   * @description
   * @param event
   * @param filesTab
   * @returns void
   */
  const addFile = (event: ChangeEvent<HTMLInputElement>, filesTab?: ExtendedFileProps[]): boolean => {
    setAnimate(false)
    setError(null)

    // eslint-disable-next-line
    // @ts-ignore
    if (!filesTab && event.target.files) {
      // eslint-disable-next-line
      // @ts-ignore
      filesTab = event.target.files
    }

    if ((!filesTab || filesTab.length === 0) && onError) {
      onError(`Empty file input`)
      return false
    }

    if (maxUploadFiles) {
      if ((maxUploadFiles - files.length <= 0) && onError) {
        const errorMessage = `You cannot attach more than ${maxUploadFiles} files`

        setError(errorMessage)
        onError(errorMessage)
        return false
      }
    }

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      try {

        // eslint-disable-next-line
        // @ts-ignore
        for (let i = 0; i < filesTab?.length; i++) {
          // eslint-disable-next-line
          // @ts-ignore
          const file = filesTab[i]
          const reader = new FileReader()
          const extension = file.type.split('/')[1]

          if (maxFileSize && maxFileSize > 0) {
            if (file.size > (1024 * 1024 * maxFileSize)) {
              const message = (
                errorSizeMessage
                || `The size of files cannot exceed ${maxFileSize}Mb`
              )

              setError(message)
              if (onError) { onError(message) }

              continue
            }
          }

          if (allowedExtensions && allowedExtensions.length > 0) {
            const isAllowed = allowedExtensions
              .findIndex(
                (ext: string) => ext.toLowerCase() === extension.toLowerCase()
              ) !== -1

            if (!isAllowed) {
              const errorMessage = `Extension .${extension} has been excluded`

              setError(errorMessage)
              if (onError) { onError(errorMessage) }

              continue
            }
          }

          if (!getBase64) {
            originalFiles.push(file)
            setOriginalFiles(originalFiles)
          }

          reader.addEventListener("load", function () {
            files.push({
                name: file.name,
                size: file.size,
                // eslint-disable-next-line
                // @ts-ignore
                path: this.result,
                type: file.type,
                contentType: file.type,
                // eslint-disable-next-line
                // @ts-ignore
                lastModified: file.lastModified,
                extension: extension?.toLowerCase()
              }
            )

            setFiles([ ...files ])
          }, false)

          // eslint-disable-next-line
          // @ts-ignore
          reader.readAsDataURL(file)
        }

        // eslint-disable-next-line
        // @ts-ignore
        event.target.value = ''

        return true

        // eslint-disable-next-line
        // @ts-ignore
      } catch (e: DOMException<unknown>) {
        setError(e.toString())
        return false
      }
    }

    return false
  }

  /**
   * @name removeFile
   * @description
   * @param event
   * @param index
   * @returns void
   */
    // eslint-disable-next-line
    // @ts-ignore
  const removeFile = (event: MouseEvent<HTMLButtonElement, MouseEvent>, index?: number): void | object => {
      setError(null)

      if (inputRef.current) {
        inputRef.current.value = ''
      }

      if (typeof index !== 'number') {
        setFiles([])
        setOriginalFiles([])
        return
      }

      if (index < 0 || index > files.length-1) {
        return console.error("item's index not found...")
      }

      const deletedFile = { ...files[index] }

      files?.splice(index, 1)
      originalFiles?.splice(index, 1)

      setFiles([ ...files ])
      setOriginalFiles([ ...originalFiles ])

      return deletedFile
    }

  /**
   * @name handleDragEnter
   * @description
   * @returns void
   */
    // eslint-disable-next-line
    // @ts-ignore
  const handleDragEnter = useCallback<React.DragEventHandler<HTMLElement>>((event: DragEvent<HTMLElement>) => {
      event.preventDefault()
      setAnimate(true)
    }, [])

  /**
   * @name handleDragOver
   * @description
   * @returns void
   */
    // eslint-disable-next-line
    // @ts-ignore
  const handleDragOver = useCallback<React.DragEventHandler<HTMLElement>>((event: DragEvent<HTMLElement>): void => {
      event.stopPropagation()
      event.preventDefault()
    }, [])

  /**
   * @name handleDrop
   * @description
   * @returns void
   */
    // eslint-disable-next-line
    // @ts-ignore
  const handleDrop = useCallback<React.DragEventHandler<HTMLElement>>((event: DragEvent<HTMLElement>): void => {
      event.stopPropagation()
      event.preventDefault()

      setAnimate(false)

      if (!disabled) {
        setAction({
          event,
          files: event.dataTransfer?.files,
        })
      }
    }, [])

  /**
   * @name handleDragLeave
   * @description
   * @returns void
   */
  const handleDragLeave = useCallback((): void => {
    setAnimate(false)
  }, [])

  /**
   * @name getContext
   * @description
   * @returns {{input: undefined, removeFile: removeFile, files: *[], addFile: addFile}}
   */
  const getContext = (): ContextProps => ({
    addFile: addFile,
    removeFile: removeFile,
    input: inputRef.current,
    files: getBase64 ? files : originalFiles
  })

  useEffect(() => {
    if (
      inputRef.current
      && onContextReady
      && typeof onContextReady === 'function') {
      onContextReady(getContext())
    }
    // eslint-disable-next-line
  }, [inputRef.current])

  useEffect(() => {
    const dragDiv = filesCardRef.current

    if (dragDiv && !dragDiv.ondrop && !disabled) {
      // eslint-disable-next-line
      // @ts-ignore
      dragDiv.ondrop = handleDrop
      // eslint-disable-next-line
      // @ts-ignore
      dragDiv.ondragend = handleDragLeave
      // eslint-disable-next-line
      // @ts-ignore
      dragDiv.ondragover = handleDragOver
      // eslint-disable-next-line
      // @ts-ignore
      dragDiv.ondragenter = handleDragEnter
    }
    // eslint-disable-next-line
  }, [filesCardRef.current])

  useEffect(() => {
    if (
      defaultFiles
      && defaultFiles.length > 0
      && files.length !== defaultFiles.length) {
      setFiles(defaultFiles)
    }
    // eslint-disable-next-line
  }, [defaultFiles])

  useEffect(() => {
    if (action?.event && action?.files) {
      // eslint-disable-next-line
      // @ts-ignore
      addFile(action.event, action.files)
      setAction(null)
    }

    if (onFilesChange) {
      onFilesChange(getBase64 ? files : originalFiles)

      if (onContextReady) {
        onContextReady(getContext())
      }
    }
    // eslint-disable-next-line
  }, [files, action])

  const background: string = animate ?
    theme.palette.secondary.light : theme.palette.primary.light

  return (
    <>
      <Paper
        sx={{ p: 1 }}
        elevation={0}
        ref={filesCardRef}
        variant="outlined"
        { ...containerCompatibilityProps }
      >
        <Typography
          gutterBottom
          component="div"
          color="textSecondary"
          sx={{ display: 'flex' }}
        >
          <Box sx={{ flexGrow: 1, fontSize: 12 }}>
            {title}
          </Box>

          {files?.length > 0 &&
          <Box sx={{ fontSize: 12 }}>
            {files.length}

            {maxUploadFiles > 0 &&
            `/${maxUploadFiles}`} file{files?.length > 1 && 's'} joined
          </Box>}
        </Typography>

        <Paper
          elevation={0}
          sx={{ p: 1, transition: 500, background }}
          { ...bannerCompatibilityProps }
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {showPlaceholderImage &&
            <Grid
              item
              xs={12} sm={3} md={4}
              sx={{ textAlign: 'center', mt: { xs: -3, sm: 2 } }}
              {...PlaceholderGridProps}
            >
              <img
                alt={imageSrcAlt}
                src={imageSrc || uploadImage}
                width={imageDimension.width}
                height={imageDimension.height}
              />
            </Grid>}

            <Grid
              item
              xs={12} sm md
              sx={{
                color: "#fff",
                textAlign: 'center',
                mt: { xs: showPlaceholderImage ? -4 : 0, sm: 2 }
              }}
              {...LabelsGridProps}
            >
              <Hidden smDown>
                <Typography variant="h5">
                  <b>{header}</b>
                </Typography>
              </Hidden>
              <Hidden smUp>
                <Typography variant="h6">
                  <b>{header}</b>
                </Typography>
              </Hidden>
              <Typography variant="caption">
                {leftLabel}
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  disabled={disabled}
                  onClick={(): void => inputRef.current?.click()}
                  sx={{
                    m: .5,
                    color: theme.palette.grey["50"],
                    borderColor: theme.palette.grey["50"],
                    '&:hover': {
                      borderColor: theme.palette.grey["50"]
                    }
                  }}
                >
                  {buttonLabel}
                </Button>
                {rightLabel}
              </Typography>
              <input
                type="file"
                ref={inputRef}
                onChange={(event) => addFile(event)}
                multiple={multiFile}
                accept={acceptedType}
                style={{ display: "none" }}
              />
            </Grid>
          </Grid>
        </Paper>

        {error &&
        <Alert
          color="error"
          severity="error"
          sx={{ mt: 1 }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>}

        {files?.length > 0 &&
        <React.Fragment>
          <StyledContainer
            // eslint-disable-next-line
            // @ts-ignore
            component="div"
            sx={{
              overflowY: "auto",
              mt: 2, mr: -1, pr: 1,
              height: filesContainerHeight,
              maxHeight: maxFilesContainerHeight
            }}
          >
            {files?.map((file, index) => {
              let size: string = (file.size/1024).toFixed(2) + ' Kb'

              if (file.size > oneMega) {
                size = (file.size/oneMega).toFixed(2) + ' Mb'
              }

              return (
                <FileAttachment
                  file={file}
                  size={size}
                  index={index}
                  disabled={disabled}
                  key={`upload-file--${index}`}
                  handleRemoveFile={removeFile}
                />
              )
            })}
          </StyledContainer>

          <Typography component="div" align="right" sx={{ mt: 1 }}>
            <Button
              size="small"
              disabled={disabled}
              onClick={removeFile}
              ref={buttonDeleteRef}
            >
              {buttonRemoveLabel || 'Remove all'}
            </Button>
          </Typography>
        </React.Fragment>}
      </Paper>
    </>
  )
}

FileUpload.propTypes = {
  getBase64: PropTypes.bool,
  maxUploadFiles: PropTypes.number,
  title: PropTypes.string,
  header: PropTypes.string,
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
  multiFile: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultFiles: PropTypes.array,
  maxFileSize: PropTypes.number,
  maxFilesContainerHeight: PropTypes.number,
  errorSizeMessage: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrcAlt: PropTypes.string,
  acceptedType: PropTypes.string,
  bannerProps: PropTypes.object,
  BannerProps: PropTypes.object,
  containerProps: PropTypes.object,
  ContainerProps: PropTypes.object,
  allowedExtensions: PropTypes.array,
  onError: PropTypes.func,
  onContextReady: PropTypes.func,
  onFilesChange: PropTypes.func,
  showPlaceholderImage: PropTypes.bool,
  LabelsGridProps: PropTypes.object,
  PlaceholderGridProps: PropTypes.object,
  placeholderImageDimension: PropTypes.object,
  PlaceholderImageDimension: PropTypes.object,
}

export default FileUpload
