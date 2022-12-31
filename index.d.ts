// @ts-ignore
import React from 'react'
import { PaperProps } from '@mui/material/Paper'

export interface FileObject {
  name: string
  size: number
  path: string
  contentType: string
  lastModified: Date
  lastModifiedDate?: Date
  extension: string | undefined
  webkitRelativePath?: string
}

export interface FileUploadProps {
  title?: string
  header?: string
  onError?: (error: string) => void
  disabled?: boolean
  imageSrc?: string
  getBase64?: boolean
  multiFile?: boolean
  leftLabel?: string
  rightLabel?: string
  buttonLabel?: string
  acceptedType?: string
  maxFileSize?: number
  /*
  * @deprecated Since version 0.3.0, please use BannerProps instead. Will be delete in next release
  */
  bannerProps?: PaperProps
  BannerProps?: PaperProps
  defaultFiles?: FileObject[] | File[]
  onFilesChange?: (files: FileObject[] | File[]) => void
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
  PlaceholderImageDimension?: object
}

declare namespace ReactMUIFileUploader {
  const FileUpload: React.FC<FileUploadProps>
}

export default ReactMUIFileUploader.FileUpload
