/// <reference types="react" />
import PropTypes from 'prop-types';
import { FileAttachmentProps } from "./index.types";
declare function FileAttachment(props: FileAttachmentProps): JSX.Element;
declare namespace FileAttachment {
    var propTypes: {
        size: PropTypes.Validator<string>;
        file: PropTypes.Requireable<object>;
        index: PropTypes.Validator<number>;
        disabled: PropTypes.Requireable<boolean>;
        handleRemoveFile: PropTypes.Validator<(...args: any[]) => any>;
    };
}
export default FileAttachment;
