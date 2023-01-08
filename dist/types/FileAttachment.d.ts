/// <reference types="react" />
import PropTypes from 'prop-types';
import { FileAttachmentProps } from "./index.types";
declare function FileAttachment(props: FileAttachmentProps): JSX.Element;
declare namespace FileAttachment {
    var propTypes: {
        size: PropTypes.Requireable<string>;
        file: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        index: PropTypes.Validator<number>;
        handleRemoveFile: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default FileAttachment;
