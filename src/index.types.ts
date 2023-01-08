import {PaperProps} from '@mui/material'
import {OverridableComponent} from "@mui/material/OverridableComponent"
import {PaperTypeMap} from "@mui/material/Paper/Paper"

export interface FileAttachmentProps {
  /** size of the attachment */
  size: string,
  /** file content of the attachment */
  file: FileProps,
  /** index of the attachment */
  index: number,
  /** boolean to indicate if the attachment is disabled or not */
  disabled?: boolean,
  /** callback function passed to the remove button onClick handler*/
  handleRemoveFile: Function
}

export interface ContextProps {
  addFile: Function
  removeFile: Function
  input: HTMLInputElement | null
  files: ExtendedFileProps[]
}

export interface FileProps extends Blob{
  name: string
  size: number
  path: string //| ArrayBuffer | null
  type: string
  lastModified?: Date
  lastModifiedDate?: Date
  extension: string | undefined
  webkitRelativePath?: string
}

export interface FileActionProps {
  event: Event,
  files: ExtendedFileProps[]
}

export interface ExtendedFileProps extends FileProps {
  contentType?: string
}

export interface ImageDimensionProps {
  width: number,
  height: number
}

export interface PlaceholderImageDimensionProps {
  lg?: ImageDimensionProps
  md?: ImageDimensionProps
  sm?: ImageDimensionProps
  xs?: ImageDimensionProps
}

// eslint-disable-next-line
// @ts-ignore
export interface FileUploadProps extends PaperProps{
  title?: string
  header?: string
  onError?: (error: string) => void
  disabled?: boolean
  imageSrc?: string
  getBase64?: boolean
  multiFile?: boolean
  leftLabel?: string
  rightLabel?: string
  imageSrcAlt?: string
  buttonLabel?: string
  acceptedType?: string
  maxFileSize?: number
  /*
  * @deprecated Since version 0.3.0, please use BannerProps instead. Will be delete in next release
  */
  bannerProps?: PaperProps
  BannerProps?: PaperProps
  defaultFiles?: ExtendedFileProps[]
  onFilesChange?: (files: ExtendedFileProps[]) => void
  onContextReady?: (context: object) => void
  maxUploadFiles?: number
  /*
  * @deprecated Since version 0.3.0, , please use ContainerProps instead. Will be delete in next release
  */
  containerProps?: PaperProps
  ContainerProps?: PaperProps
  errorSizeMessage?: string
  allowedExtensions?: string[]
  buttonRemoveLabel?: string
  filesContainerHeight?: number
  maxFilesContainerHeight?: number
  showPlaceholderImage?: boolean
  PlaceholderImageDimension?: object
  /*
  * @deprecated Since version 0.3.0, , please use PlaceholderImageDimension instead. Will be delete in next release
  */
  placeholderImageDimension?: object
  LabelsGridProps?: object
  PlaceholderGridProps?: object
}

declare namespace ReactMUIFileUploader {
  const FileUpload: OverridableComponent<PaperTypeMap>
}

export default ReactMUIFileUploader.FileUpload
