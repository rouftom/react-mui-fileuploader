import React from 'react'
import { PaperProps } from '@mui/material/Paper'

export interface FileObject {
  name: string
  size: number
  path: string
  contentType: string
  lastModified: Date
  extension: string | undefined
}

export interface FileUploadProps {
  title?: string
  header?: string
  onError?: (error: string) => void
  disabled?: boolean
  imageSrc?: string
  multiFile?: boolean
  leftLabel?: string
  rightLabel?: string
  buttonLabel?: string
  maxFileSize?: number
  bannerProps?: PaperProps
  defaultFiles?: FileObject[]
  onFilesChange?: (files: FileObject[]) => void
  maxUploadFiles?: number
  containerProps?: PaperProps
  errorSizeMessage?: string
  allowedExtensions?: string[]
  buttonRemoveLabel?: string
  filesContainerHeight?: number
  maxFilesContainerHeight?: number
}

declare namespace ReactMUIFileUploader {
  const FileUpload: React.FC<FileUploadProps>
}

export default ReactMUIFileUploader.FileUpload
