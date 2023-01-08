/// <reference types="react" />
import PropTypes from 'prop-types';
import { PaperProps } from '@mui/material';
import { FileUploadProps } from "./index.types";
/**
 * @name FileUpload
 * @description Upload file component wrapper
 * @param props FileUploadProps
 * @returns React.Component
 */
declare function FileUpload(props: FileUploadProps): JSX.Element;
declare namespace FileUpload {
    var propTypes: {
        getBase64: PropTypes.Requireable<boolean>;
        maxUploadFiles: PropTypes.Requireable<number>;
        title: PropTypes.Requireable<string>;
        header: PropTypes.Requireable<string>;
        leftLabel: PropTypes.Requireable<string>;
        rightLabel: PropTypes.Requireable<string>;
        buttonLabel: PropTypes.Requireable<string>;
        multiFile: PropTypes.Requireable<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        defaultFiles: PropTypes.Requireable<any[]>;
        maxFileSize: PropTypes.Requireable<number>;
        maxFilesContainerHeight: PropTypes.Requireable<number>;
        errorSizeMessage: PropTypes.Requireable<string>;
        imageSrc: PropTypes.Requireable<string>;
        imageSrcAlt: PropTypes.Requireable<string>;
        acceptedType: PropTypes.Requireable<string>;
        bannerProps: PropTypes.Requireable<object>;
        BannerProps: PropTypes.Requireable<object>;
        containerProps: PropTypes.Requireable<object>;
        ContainerProps: PropTypes.Requireable<object>;
        allowedExtensions: PropTypes.Requireable<any[]>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        onContextReady: PropTypes.Requireable<(...args: any[]) => any>;
        onFilesChange: PropTypes.Requireable<(...args: any[]) => any>;
        showPlaceholderImage: PropTypes.Requireable<boolean>;
        LabelsGridProps: PropTypes.Requireable<object>;
        PlaceholderGridProps: PropTypes.Requireable<object>;
        placeholderImageDimension: PropTypes.Requireable<object>;
        PlaceholderImageDimension: PropTypes.Requireable<object>;
    };
    var defaultProps: Partial<PaperProps<"div", {}>>;
}
export default FileUpload;
