import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Alert,
  Paper,
  Box,
  Hidden,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FileAttachment from "./FileAttachment.jsx";
import { useTheme, styled } from "@mui/material/styles";
import uploadImage from "../public/Files And Folder_Two Color_2.svg";

const StyledContainer = styled(Typography)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    width: 7,
    height: 6,
  },
  "&::-webkit-scrollbar-track": {
    WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)",
  },
  "&::-webkit-scrollbar-thumb": {
    WebkitBorderRadius: 4,
    borderRadius: 4,
    background: "rgba(0, 172, 193, .5)",
    WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)",
  },
  "&::-webkit-scrollbar-thumb:window-inactive": {
    background: "rgba(125, 161, 196, 0.5)",
  },
}));

const oneMega = 1024 * 1024;

/**
 * @name FileUpload
 * @description Upload file component wrapper
 * @param props object
 * @returns React.Component
 */
function FileUpload(props) {
  const {
    title,
    header,
    onError,
    disabled,
    imageSrc,
    getBase64,
    imageSrcAlt,
    multiFile,
    leftLabel,
    rightLabel,
    buttonLabel,
    maxFileSize,
    maskPlaceholder,
    /*
     * @deprecated Since version 0.3.0, please use BannerProps instead. Will be delete in next release
     */
    bannerProps,
    BannerProps,
    acceptedType,
    defaultFiles,
    onFilesChange,
    maxUploadFiles,
    /*
     * @deprecated Since version 0.3.0, , please use ContainerProps instead. Will be delete in next release
     */
    containerProps,
    ContainerProps,
    onContextReady,
    errorSizeMessage,
    allowedExtensions,
    buttonRemoveLabel,
    filesContainerHeight,
    maxFilesContainerHeight,
    /*
     * @deprecated Since version 0.3.0, , please use PlaceholderImageDimension instead. Will be delete in next release
     */
    placeholderImageDimension,
    PlaceholderImageDimension,
  } = props;

  const theme = useTheme();

  const bannnerCompatibilityProps = { ...bannerProps, ...BannerProps };
  const containerCompatibilityProps = { ...containerProps, ...ContainerProps };
  const placeholderCompatibilityProps = {
    ...placeholderImageDimension,
    ...PlaceholderImageDimension,
  };

  const [error, setError] = useState();
  const [action, setAction] = useState();
  const [animate, setAnimate] = useState();
  const [files, setFiles] = useState([]);
  const [originalFiles, setOriginalFiles] = useState([]);

  const inputRef = useRef();
  const filesCardRef = useRef();
  let imageDimension = { width: 128, height: 128 };

  if (
    useMediaQuery(theme.breakpoints.up("xs")) &&
    placeholderCompatibilityProps?.xs
  ) {
    imageDimension = placeholderCompatibilityProps.xs;
  }

  if (
    useMediaQuery(theme.breakpoints.up("sm")) &&
    placeholderCompatibilityProps?.sm
  ) {
    imageDimension = placeholderCompatibilityProps.sm;
  }

  if (
    useMediaQuery(theme.breakpoints.up("md")) &&
    placeholderCompatibilityProps?.md
  ) {
    imageDimension = placeholderCompatibilityProps.md;
  }

  if (
    useMediaQuery(theme.breakpoints.up("lg")) &&
    placeholderCompatibilityProps?.lg
  ) {
    imageDimension = placeholderCompatibilityProps.lg;
  }

  /**
   * @name addFile
   * @description
   * @param event
   * @param filesTab
   * @returns void
   */
  const addFile = (event, filesTab) => {
    setAnimate(false);
    setError(null);

    if (!filesTab && event?.target?.files) {
      filesTab = event?.target?.files;
    }

    if (!filesTab || filesTab.length === 0) {
      return onError(`Empty file input`);
    }

    if (maxUploadFiles) {
      if (maxUploadFiles - files.length <= 0) {
        setError(`You cannot attach more than ${maxUploadFiles} files`);
        return onError(`You cannot attach more than ${maxUploadFiles} files`);
      }
    }

    if (window.File && window.FileReader && window.FileList && window.Blob) {
      try {
        for (let i = 0; i < filesTab?.length; i++) {
          let file = filesTab[i];
          let reader = new FileReader();
          let extension = file?.type?.split("/")[1];

          if (maxFileSize && maxFileSize > 0) {
            if (file.size > 1024 * 1024 * maxFileSize) {
              let message =
                errorSizeMessage ||
                `The size of files cannot exceed ${maxFileSize}Mb`;

              setError(message);
              onError(message);
              //break
              continue;
            }
          }

          if (allowedExtensions?.length > 0) {
            let isAllowed =
              allowedExtensions.findIndex(
                (ext) => ext?.toLowerCase() === extension.toLowerCase()
              ) !== -1;

            if (!isAllowed) {
              let message = `Extension .${extension} has been excluded`;
              setError(message);
              onError(message);
              continue;
            }
          }

          if (!getBase64) {
            originalFiles.push(file);
            setOriginalFiles(originalFiles);
          }

          reader.addEventListener(
            "load",
            function () {
              let obj = {
                name: file.name,
                size: file.size,
                path: this.result,
                contentType: file.type,
                lastModified: file.lastModified,
                extension: extension?.toLowerCase(),
              };

              files.push(obj);
              setFiles([...files]);
            },
            false
          );

          reader.readAsDataURL(file);
        }

        event.target.value = "";
      } catch (e) {
        setError(e.toString());
      }
    }
  };

  /**
   * @name removeFile
   * @description
   * @param index
   * @returns void
   */
  const removeFile = (index) => {
    setError(null);

    inputRef.current.value = "";

    if (typeof index !== "number") {
      setOriginalFiles([]);
      return setFiles([]);
    }

    if (index < 0 || index > files.length - 1) {
      return console.error("item's index not found...");
    }

    files?.splice(index, 1);
    originalFiles?.splice(index, 1);

    setFiles([...files]);
    setOriginalFiles([...originalFiles]);
  };

  /**
   * @name handleDragEnter
   * @description
   * @returns void
   */
  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    setAnimate(true);
  }, []);

  /**
   * @name handleDragOver
   * @description
   * @returns void
   */
  const handleDragOver = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();
  }, []);

  /**
   * @name handleDrop
   * @description
   * @returns void
   */
  const handleDrop = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    setAnimate(false);

    setAction({
      event,
      files: event.dataTransfer?.files,
    });
  }, []);

  /**
   * @name handleDragLeave
   * @description
   * @returns void
   */
  const handleDragLeave = useCallback(() => {
    setAnimate(false);
  }, []);

  const getContext = () => ({
    addFile: addFile,
    removeFile: removeFile,
    input: inputRef.current,
    files: getBase64 ? files : originalFiles,
  });

  useEffect(() => {
    if (
      inputRef.current &&
      onContextReady &&
      typeof onContextReady === "function"
    ) {
      onContextReady(getContext());
    }
    // eslint-disable-next-line
  }, [inputRef.current]);

  useEffect(() => {
    let dragDiv = filesCardRef.current;

    if (dragDiv && !dragDiv.ondrop && !disabled) {
      dragDiv.ondrop = handleDrop;
      dragDiv.ondragend = handleDragLeave;
      dragDiv.ondragover = handleDragOver;
      dragDiv.ondragenter = handleDragEnter;
    }
    // eslint-disable-next-line
  }, [filesCardRef.current]);

  useEffect(() => {
    if (defaultFiles?.length > 0 && files?.length !== defaultFiles?.length) {
      setFiles(defaultFiles);
    }
    // eslint-disable-next-line
  }, [defaultFiles]);

  useEffect(() => {
    if (action?.event && action?.files) {
      addFile(action.event, action.files);
      setAction(null);
    }

    if (onFilesChange) {
      onFilesChange(getBase64 ? files : originalFiles);
      if (onContextReady) onContextReady(getContext());
    }
    // eslint-disable-next-line
  }, [files, action]);

  const background = animate
    ? theme.palette.secondary.light
    : theme.palette.primary.light;

  return (
    <Paper
      sx={{ p: 1 }}
      elevation={0}
      ref={filesCardRef}
      variant="outlined"
      {...containerCompatibilityProps}
    >
      <Typography
        gutterBottom
        component="div"
        color="textSecondary"
        sx={{ display: "flex" }}
      >
        <Box sx={{ flexGrow: 1, fontSize: 12 }}>{title}</Box>

        {files?.length > 0 && (
          <Box sx={{ fontSize: 12 }}>
            {files.length}
            {maxUploadFiles > 0 && `/${maxUploadFiles}`} file
            {files?.length > 0 && "s"} joined
          </Box>
        )}
      </Typography>

      <Paper
        elevation={0}
        sx={{ p: 1, transition: 500, background }}
        {...bannnerCompatibilityProps}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={3}
            md={4}
            sx={{ textAlign: "center", mt: { xs: -3, sm: 2 } }}
          >
            {!maskPlaceholder ? (
              <img
                alt={imageSrcAlt}
                src={imageSrc || uploadImage}
                width={imageDimension.width}
                height={imageDimension.height}
              />
            ) : undefined}
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            md={8}
            sx={{
              color: "#fff",
              textAlign: "center",
              mt: { xs: -4, sm: 2 },
            }}
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
                onClick={() => inputRef.current?.click()}
                sx={{
                  m: 0.5,
                  color: theme.palette.grey["50"],
                  borderColor: theme.palette.grey["50"],
                  "&:hover": {
                    borderColor: theme.palette.grey["50"],
                  },
                }}
              >
                {buttonLabel}
              </Button>
              {rightLabel}
            </Typography>
            <input
              type="file"
              ref={inputRef}
              onChange={addFile}
              multiple={multiFile}
              accept={acceptedType}
              style={{ display: "none" }}
            />
          </Grid>
        </Grid>
      </Paper>

      {error && (
        <Alert
          color="error"
          severity="error"
          sx={{ mt: 1 }}
          onClose={() => setError(null)}
        >
          {error}
        </Alert>
      )}

      {files?.length > 0 && (
        <React.Fragment>
          <StyledContainer
            component="div"
            sx={{
              overflowY: "auto",
              mt: 2,
              mr: -1,
              pr: 1,
              height: filesContainerHeight,
              maxHeight: maxFilesContainerHeight,
            }}
          >
            {files?.map((file, index) => {
              let size = file.size;

              if (size > oneMega) {
                size = (file.size / oneMega).toFixed(2) + " Mb";
              } else {
                size = (file.size / 1024).toFixed(2) + " Kb";
              }

              return (
                <FileAttachment
                  file={file}
                  size={size}
                  index={index}
                  disabled={disabled}
                  key={`upload-file--${index}`}
                  hanfleRemoveFile={removeFile}
                />
              );
            })}
          </StyledContainer>

          <Typography component="div" align="right" sx={{ mt: 1 }}>
            <Button size="small" disabled={disabled} onClick={removeFile}>
              {buttonRemoveLabel || "Remove all"}
            </Button>
          </Typography>
        </React.Fragment>
      )}
    </Paper>
  );
}

FileUpload.propTypes = {
  getBase64: PropTypes.bool,
  maxUploadFiles: PropTypes.number,
  title: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(React.Component),
  ]),
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  buttonLabel: PropTypes.string,
  multiFile: PropTypes.bool,
  disabled: PropTypes.bool,
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
  placeholderImageDimension: PropTypes.object,
  PlaceholderImageDimension: PropTypes.object,
  maskPlaceholder: PropTypes.bool,
};

FileUpload.defaultProps = {
  getBase64: false,
  multiFile: true,
  maxFileSize: 0,
  maxUploadFiles: 0,
  acceptedType: "*/*",
  allowedExtensions: [],
  title: "My awesome file uploader",
  header: ">[Drag to drop]<",
  leftLabel: "or",
  rightLabel: "to select files",
  buttonLabel: "click here",
  imageSrcAlt: "Placeholder image",
  maxFilesContainerHeight: 300,
  placeholderImageDimension: {},
  PlaceholderImageDimension: {},
  bannerProps: {},
  BannerProps: {},
  containerProps: {},
  ContainerProps: {},
  maskPlaceholder: false,
};

export default FileUpload;
