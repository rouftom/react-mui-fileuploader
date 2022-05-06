(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/extends'), require('@babel/runtime/helpers/toConsumableArray'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('prop-types'), require('@mui/material'), require('@mui/material/styles'), require('@mui/icons-material/Close'), require('@mui/icons-material/ArchiveOutlined'), require('@mui/icons-material/PlayCircleOutline'), require('@mui/icons-material/InsertDriveFileOutlined')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/extends', '@babel/runtime/helpers/toConsumableArray', '@babel/runtime/helpers/slicedToArray', 'react', 'prop-types', '@mui/material', '@mui/material/styles', '@mui/icons-material/Close', '@mui/icons-material/ArchiveOutlined', '@mui/icons-material/PlayCircleOutline', '@mui/icons-material/InsertDriveFileOutlined'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-material-fileuploader"] = factory(global._extends, global._toConsumableArray, global._slicedToArray, global.React, global.PropTypes, global.material, global.styles, global.CloseIcon, global.ArchiveOutlinedIcon, global.PlayCircleOutlineIcon, global.InsertDriveFileOutlinedIcon));
})(this, (function (_extends, _toConsumableArray, _slicedToArray, React, PropTypes, material, styles, CloseIcon, ArchiveOutlinedIcon, PlayCircleOutlineIcon, InsertDriveFileOutlinedIcon) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
  var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var CloseIcon__default = /*#__PURE__*/_interopDefaultLegacy(CloseIcon);
  var ArchiveOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(ArchiveOutlinedIcon);
  var PlayCircleOutlineIcon__default = /*#__PURE__*/_interopDefaultLegacy(PlayCircleOutlineIcon);
  var InsertDriveFileOutlinedIcon__default = /*#__PURE__*/_interopDefaultLegacy(InsertDriveFileOutlinedIcon);

  function FileAttachment(props) {
    var _file$extension;

    var size = props.size,
        file = props.file,
        index = props.index,
        disabled = props.disabled,
        hanfleRemoveFile = props.hanfleRemoveFile;
    var theme = styles.useTheme();
    var icon = /*#__PURE__*/React__default["default"].createElement(InsertDriveFileOutlinedIcon__default["default"], {
      color: "primary",
      fontSize: "large"
    }); // Set icon for compressed files

    if (/\.(g?zip|tar|gz|rar)$/i.test(file === null || file === void 0 ? void 0 : file.name)) {
      icon = /*#__PURE__*/React__default["default"].createElement(ArchiveOutlinedIcon__default["default"], {
        color: "primary",
        fontSize: "large"
      });
    } // Set icon for media files


    if (/\.(mp.|midi|mkv|avi)$/i.test(file === null || file === void 0 ? void 0 : file.name)) {
      icon = /*#__PURE__*/React__default["default"].createElement(PlayCircleOutlineIcon__default["default"], {
        color: "primary",
        fontSize: "large"
      });
    }

    return /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        mb: 0,
        display: 'flex',
        alignItems: 'center',
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.action.hover
        }
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Avatar, {
      alt: "",
      src: file.path,
      variant: "rounded",
      sx: {
        m: .5,
        width: 32,
        height: 32,
        display: 'flex',
        background: 'transparent'
      }
    }, icon), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        display: 'inline-grid',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "body2",
      noWrap: true
    }, file === null || file === void 0 ? void 0 : file.name), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "caption",
      noWrap: true
    }, /*#__PURE__*/React__default["default"].createElement("b", null, size), " | ", /*#__PURE__*/React__default["default"].createElement("b", null, file === null || file === void 0 ? void 0 : (_file$extension = file.extension) === null || _file$extension === void 0 ? void 0 : _file$extension.toLowerCase())))), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      sx: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.IconButton, {
      disabled: disabled,
      onClick: function onClick() {
        return hanfleRemoveFile(index);
      }
    }, /*#__PURE__*/React__default["default"].createElement(CloseIcon__default["default"], null))));
  }

  FileAttachment.propTypes = {
    size: PropTypes__default["default"].string.isRequired,
    file: PropTypes__default["default"].object.isRequired,
    index: PropTypes__default["default"].number.isRequired,
    disabled: PropTypes__default["default"].bool,
    hanfleRemoveFile: PropTypes__default["default"].func.isRequired
  };

  var uploadImage = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDA2IiBoZWlnaHQ9IjMwNiIgY2xhc3M9ImlsbHVzdHJhdGlvbiBzdHlsZXNfaWxsdXN0cmF0aW9uVGFibGV0X18xRFdPYSI+PHRpdGxlPiMxNiBmaWxlcyBhbmQgZm9sZGVyczwvdGl0bGU+PHBhdGggZD0iTTE0Ny43MSwxNDcuN0gxNDAuOHYtMi43Nmg2LjkxYTMuNDQsMy40NCwwLDEsMCwwLTYuODhIMTQwLjhWMTM1LjNoNi45MWE2LjIsNi4yLDAsMSwxLDAsMTIuNFoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTQ3LjcxLDE0Ny43SDE0MC44di0yLjc2aDYuOTFhMy40NCwzLjQ0LDAsMSwwLDAtNi44OEgxNDAuOFYxMzUuM2g2LjkxYTYuMiw2LjIsMCwxLDEsMCwxMi40WiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC42MSI+PC9wYXRoPjxlbGxpcHNlIGN4PSIxOTguNTYiIGN5PSIyNTYuOTkiIHJ4PSIxNDUuMDciIHJ5PSIyMC4xOCIgZmlsbD0iI2U2ZTZlNiIgb3BhY2l0eT0iMC40NSI+PC9lbGxpcHNlPjxwYXRoIGQ9Ik0yODguNzUsOTUuNjJjLTEuMzYsMjEuMDctMTEuNDIsNzMuNjEtNzkuNDMsNDQuMDZsMi4zNC02Ljk0czMzLjYxLDUuOTMsNDIuNS02LjU0YzcuNTItMTAuNTYsNy40LTQ1LjE5LDI0LTQzLjU0QTEyLjA5LDEyLjA5LDAsMCwxLDI4OC43NSw5NS42MloiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjg4Ljc1LDk1LjYyYy0xLjM2LDIxLjA3LTExLjQyLDczLjYxLTc5LjQzLDQ0LjA2bDIuMzQtNi45NHMzMy42MSw1LjkzLDQyLjUtNi41NGM3LjUyLTEwLjU2LDcuNC00NS4xOSwyNC00My41NEExMi4wOSwxMi4wOSwwLDAsMSwyODguNzUsOTUuNjJaIiBvcGFjaXR5PSIwLjA4Ij48L3BhdGg+PHBhdGggZD0iTTIyNi4xNSw1Ni4zNnMxLjM4LDcuNTksNCwxMi4xOGEzLjg3LDMuODcsMCwwLDAsNS4zLDEuNDVjMi4zLTEuMzQsNS0zLjgxLDQuNzYtOGwuNDUtNy4xMWE2LjkxLDYuOTEsMCwwLDAtNC44OS02LjMzQzIzMC43Miw0Ni43MSwyMjUuMDgsNTEuNzgsMjI2LjE1LDU2LjM2WiIgZmlsbD0iI2Y0YTI4YyI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz0iMjQwLjcyIDU3LjIyIDI1NS42OSA3Mi4zMyAyNDYuNzUgODIuMDQgMjM3LjM2IDYzLjk4IDI0MC43MiA1Ny4yMiIgZmlsbD0iI2Y0YTI4YyI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0yMzUuOCw2MC41OHMtLjczLTIuODgsMS40OC0zLjI1LDMuMjksMy43OS40Nyw1WiIgZmlsbD0iI2Y0YTI4YyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjcuMjcsNjEuMSwyMjYsNjQuNTNhMS4yNCwxLjI0LDAsMCwwLDEuMjUsMS42N2wzLS4yNFoiIGZpbGw9IiNmNGEyOGMiPjwvcGF0aD48cGF0aCBkPSJNMjY1LjIxLDI0OC43OXMtMiwzLjY1LTUuNTMsMy40MS01LDMtMiw0LjQxLDExLjc0LTEuNDIsMTEuNzQtMS40MmwuNTUtNS4wOFoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzA3LjM1LDI0NC4xNHMyLjI1LDMuNTEuMzIsNi40OS4yNiw1LjgzLDIuOTEsMy44Niw0LjQzLTExLDQuNDMtMTFsLTQuMTktMi45M1oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjM4Ljg3LDY2Ljg4QTE1LjU0LDE1LjU0LDAsMCwwLDI0MC4xOCw2MlMyNDYsNjcuMzgsMjQyLjEsNzMuMVoiIGZpbGw9IiNjZTgxNzIiIG9wYWNpdHk9IjAuMzEiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9IjI2My40NiAxNzAuMzUgMjYzLjAzIDI1MC40NCAyNzMuMzkgMjUwLjQ0IDI4Ni42NSAxNjkuMzIgMjYzLjQ2IDE3MC4zNSIgZmlsbD0iIzI0Mjg1YiI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0yNDguNDEsNzYuNDZhMzAuNjYsMzAuNjYsMCwwLDEsMTguMzEtNi43MWMxMC44LS4xMSw0MC45MiwxLjc0LDM4Ljg2LDM4LjU4LTEuNTMsMjcuMy0yLjMxLDU3LjUtMi4zMSw1Ny41bC0zOS42Niw2LjYxUzIxNi4yNCwxMDUuNDEsMjQ4LjQxLDc2LjQ2WiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzQuNjIsODUuNzJzLTguMzEsMTAtMy4xNywyOC4yOCwxMi4zNiw0MC4zMy0xMi40LDUxLjQxbDQuNTYsNywzOS42Ni02LjYxLjUyLTE2Ljg4LDYuMzctMzEuMjZaIiBvcGFjaXR5PSIwLjA4Ij48L3BhdGg+PHJlY3QgeD0iMTA5LjI1IiB5PSIxNTAuMzEiIHdpZHRoPSI2Ni45NyIgaGVpZ2h0PSIxMDYuNjgiIGZpbGw9IiNhNWE1YTUiIG9wYWNpdHk9IjAuNzkiPjwvcmVjdD48cmVjdCB4PSIxMzguNDgiIHk9IjE1MC4zMSIgd2lkdGg9IjU3LjkzIiBoZWlnaHQ9IjEwNi42OCIgZmlsbD0iI2U2ZTZlNiI+PC9yZWN0Pjxwb2x5Z29uIHBvaW50cz0iMTc5LjggMTU2LjU1IDE3OC43NCAxNjIuNjYgMTUwLjMgMTYyLjY2IDE1MC4zIDE4OC40NCAxOTcuNiAxODguNDQgMTk3LjYgMTY3LjQ0IDE5Ny42IDE2Mi42NiAxOTcuNiAxNTYuNTUgMTc5LjggMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIxNzkuOCAxNTYuNTUgMTc4Ljc0IDE2Mi42NiAxNTAuMyAxNjIuNjYgMTUwLjMgMTg4LjQ0IDE5Ny42IDE4OC40NCAxOTcuNiAxNjcuNDQgMTk3LjYgMTYyLjY2IDE5Ny42IDE1Ni41NSAxNzkuOCAxNTYuNTUiIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9IjE4Ni43MSAxNTYuNTUgMTg1LjY1IDE2Mi42NiAxNTcuMjEgMTYyLjY2IDE1Ny4yMSAxODguNDQgMjA0LjUxIDE4OC40NCAyMDQuNTEgMTY3LjQ0IDIwNC41MSAxNjIuNjYgMjA0LjUxIDE1Ni41NSAxODYuNzEgMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIyNjIuOTggMTIxLjA3IDI2NC45MiAxMjguMjggMjM4Ljc4IDEzOS40OSAyNTEuMDcgMTY4LjE0IDI5NC41NSAxNDkuNDkgMjg0LjU0IDEyNi4xNiAyODIuMjYgMTIwLjg0IDI3OS4zNCAxMTQuMDUgMjYyLjk4IDEyMS4wNyIgZmlsbD0iI2ZmZDIwMCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz0iMjYyLjk4IDEyMS4wNyAyNjQuOTIgMTI4LjI4IDIzOC43OCAxMzkuNDkgMjUxLjA3IDE2OC4xNCAyOTQuNTUgMTQ5LjQ5IDI4NC41NCAxMjYuMTYgMjgyLjI2IDEyMC44NCAyNzkuMzQgMTE0LjA1IDI2Mi45OCAxMjEuMDciIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9IjI2OS4zMyAxMTguMzQgMjcxLjI3IDEyNS41NiAyNDUuMTMgMTM2Ljc2IDI1Ny40MiAxNjUuNDEgMzAwLjg5IDE0Ni43NyAyOTAuODkgMTIzLjQzIDI4OC42MSAxMTguMTIgMjg1LjY5IDExMS4zMyAyNjkuMzMgMTE4LjM0IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIxOTIuNDIgMTU2LjU1IDE5MS4zNiAxNjIuNjYgMTYyLjkzIDE2Mi42NiAxNjIuOTMgMTg4LjQ0IDIxMC4yMyAxODguNDQgMjEwLjIzIDE2Ny40NCAyMTAuMjMgMTYyLjY2IDIxMC4yMyAxNTYuNTUgMTkyLjQyIDE1Ni41NSIgZmlsbD0iI2ZmZDIwMCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz0iMTkyLjQyIDE1Ni41NSAxOTEuMzYgMTYyLjY2IDE2Mi45MyAxNjIuNjYgMTYyLjkzIDE4OC40NCAyMTAuMjMgMTg4LjQ0IDIxMC4yMyAxNjcuNDQgMjEwLjIzIDE2Mi42NiAyMTAuMjMgMTU2LjU1IDE5Mi40MiAxNTYuNTUiIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cmVjdCB4PSIxNjQuMTIiIHk9IjE1MS41NiIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDkgMjguNjIpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiMyNDI4NWIiPjwvcmVjdD48cmVjdCB4PSIxNjQuMTIiIHk9IjE1MS41NiIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDkgMjguNjIpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMTIiPjwvcmVjdD48cmVjdCB4PSIxNjYuNDUiIHk9IjE0Ny4yMyIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNDQgMjguOTEpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiMyNDI4NWIiPjwvcmVjdD48cG9seWdvbiBwb2ludHM9IjE5OS4zMyAxNTYuNTUgMTk4LjI3IDE2Mi42NiAxNjkuODQgMTYyLjY2IDE2OS44NCAxODguNDQgMjE3LjE0IDE4OC40NCAyMTcuMTQgMTY3LjQ0IDIxNy4xNCAxNjIuNjYgMjE3LjE0IDE1Ni41NSAxOTkuMzMgMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHJlY3QgeD0iMTQ3LjY1IiB5PSIxNzAuMzciIHdpZHRoPSI3NC41NCIgaGVpZ2h0PSIyOS4xIiBmaWxsPSIjYTVhNWE1Ij48L3JlY3Q+PHBhdGggZD0iTTI5MS4xMywxMjRhMjEyLjI0LDIxMi4yNCwwLDAsMS0xNCwxNi4yNyw2My43OCw2My43OCwwLDAsMS0xMi42Nyw5LjkyYy0yLjY5LDEuNjUtNS41Miw0LjU5LTMuNjIsOS4xOWgxNC44MUwyOTUsMTMzLjEzWiIgb3BhY2l0eT0iMC4wOCI+PC9wYXRoPjxyZWN0IHg9IjE3MS4xNiIgeT0iMTcwLjM3IiB3aWR0aD0iNTEuMDIiIGhlaWdodD0iMjkuMSIgZmlsbD0iI2YyZjJmMiI+PC9yZWN0PjxyZWN0IHg9IjE0Ny42NSIgeT0iMjEyLjkyIiB3aWR0aD0iNTkuMDIiIGhlaWdodD0iMjkuMSIgZmlsbD0iI2YyZjJmMiI+PC9yZWN0PjxyZWN0IHg9IjEyOC4zOCIgeT0iMTMyLjMiIHdpZHRoPSIxNi44OSIgaGVpZ2h0PSIxOC40IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTk3LjU3IiBjeT0iMTgzLjc1IiByPSI0LjA5IiBmaWxsPSIjYTVhNWE1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzguMDQiIGN5PSIyMjYuMzEiIHI9IjQuMDkiIGZpbGw9IiNhNWE1YTUiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMTEuMjMsMTM0YTIyLjE2LDIyLjE2LDAsMCwwLTguMjYsMS4yNWMtNC40MywxLjU2LTguNTMsNS41MS01LjM3LDEwLjEzLDIuNDQsMy41Niw1LjksMS43Miw3LjE5LTEuMTNzMi4wNy01LjYxLDQuNTMtNC41N1oiIGZpbGw9IiNmNGEyOGMiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjQ4LDc0LjUzYTUxLjc0LDUxLjc0LDAsMCwxLDI5LDI3LjA4LDM2LjQsMzYuNCwwLDAsMS0xLjA5LDMzLjIxYy01Ljg3LDEwLjI2LTE3LjksMjEuNzctNDIuNTcsMjYuNzVsLTIuODctNy4yMSwyMy41Ni0yMC42OWExMi4xOCwxMi4xOCwwLDAsMCwuNTgtMTcuNzljLTctNy0xNS45LTE3LjMtMTkuOTEtMjguMTdBMTAuMywxMC4zLDAsMCwxLDI4OC40OCw3NC41M1oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjQ4LDc0LjUzYTUxLjc0LDUxLjc0LDAsMCwxLDI5LDI3LjA4LDM2LjQsMzYuNCwwLDAsMS0xLjA5LDMzLjIxYy01Ljg3LDEwLjI2LTE3LjksMjEuNzctNDIuNTcsMjYuNzVsLTIuODctNy4yMSwyMy41Ni0yMC42OWExMi4xOCwxMi4xOCwwLDAsMCwuNTgtMTcuNzljLTctNy0xNS45LTE3LjMtMTkuOTEtMjguMTdBMTAuMywxMC4zLDAsMCwxLDI4OC40OCw3NC41M1oiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzEuNDUsMTU1LjdzLTExLTEuMi0xMiwzLTEuNjgsNi43NC0xLjY4LDYuNzRhMzAuMSwzMC4xLDAsMCwwLDE1LjY2LTQuODJaIiBmaWxsPSIjZjRhMjhjIj48L3BhdGg+PHBhdGggZD0iTTMwMy4yNywxNjUuODNhMTA0Ljc4LDEwNC43OCwwLDAsMSwuMTgsMTUuMzhjLS4yNyw2LjMxLTEuOTEsMTYuODItMy4xNSwyNC4wOUEyMy4yMiwyMy4yMiwwLDAsMCwzMDMsMjIwLjZsMTAsMTcuNzktNy4yNiw3LjI0LTExLjkxLTE1LjQ4YTY0Ljg4LDY0Ljg4LDAsMCwxLTEyLjE2LTI3bC0zLjc5LTE5LjM0LTkuNTUtMTIuMTRaIiBmaWxsPSIjMjQyODViIj48L3BhdGg+PHBhdGggZD0iTTIyMS43NSw0Ny4zM3MtMy4wOSw3LjE0LDQuMjksNy40OSw3LjI5LTEuMTUsNy4yOS0xLjE1LjQ2LDkuNTQsNi44NSw4LjM1bDIuNjUtMi42OHMzLTEyLjE3LTIuMi0xNC44NEMyNDAuNjMsNDQuNSwyMzAuMjUsMzMuODMsMjIxLjc1LDQ3LjMzWiIgZmlsbD0iIzI0Mjg1YiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzUuNjgsNjEuNzNzLjM5LTYuMjIsMy44OS00LjY3UzI0MC43Niw2NS4zOSwyMzUuNjgsNjEuNzNaIiBmaWxsPSIjZjRhMjhjIj48L3BhdGg+PHBhdGggZD0iTTE0MC44LDEzMi4zczExLjg5LTcuNjMsMC0xOC4zLTE2LjU1LDE0LTI1LjIyLTIuNjcsMTMuMzMtMzQuNjYtMTEtMzZTOTUuNDcsNTguNjIsNzQuNTIsNTYuODEsNDcuOTEsOTIuMTEsNjMuOTEsOTQuNTZzMzEuMzQsMy40NCwyNywxOC43NywxMiwxOS41LDE5LjY3LDE1Ljc1LDE3LjgsMy4yMiwxNy44LDMuMjJaIiBmaWxsPSIjZTZlNmU2IiBvcGFjaXR5PSIwLjQ1Ij48L3BhdGg+PHBhdGggZD0iTTk4LDI0MnMtMTEuODUtMy4xOC0xNC40Ny0xNC4xOGMwLDAsMTguMzItMy43OCwxOC45MiwxNS4xNFoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNTgiPjwvcGF0aD48cGF0aCBkPSJNOTkuNDYsMjQwLjc4cy04LjMyLTEzLTEuMS0yNS4yOGMwLDAsMTQsOC43OSw3Ljg2LDI1LjI4WiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC43MyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDEuNTksMjQwLjc4czQuMzEtMTMuODIsMTcuNS0xNi40OWMwLDAsMi41Miw5LTguNDgsMTYuNDlaIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPSI5My4wMSAyNDAuNTEgOTUuNDggMjU2LjkxIDExMC41OCAyNTYuOTEgMTEyLjc0IDI0MC41MSA5My4wMSAyNDAuNTEiIGZpbGw9IiMyNDI4NWIiPjwvcG9seWdvbj48L3N2Zz4=';

  var StyledContainer = styles.styled(material.Typography)(function (_ref) {
    _ref.theme;
    return {
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
    };
  });
  /**
   * @name FileUpload
   * @description Upload file component wrapper
   * @param props object
   * @returns React.Component
   */

  function FileUpload(props) {
    var title = props.title,
        header = props.header,
        onError = props.onError,
        disabled = props.disabled,
        imageSrc = props.imageSrc,
        multiFile = props.multiFile,
        leftLabel = props.leftLabel,
        rightLabel = props.rightLabel,
        buttonLabel = props.buttonLabel,
        maxFileSize = props.maxFileSize,
        bannerProps = props.bannerProps,
        defaultFiles = props.defaultFiles,
        onFilesChange = props.onFilesChange,
        maxUploadFiles = props.maxUploadFiles,
        containerProps = props.containerProps,
        errorSizeMessage = props.errorSizeMessage,
        allowedExtensions = props.allowedExtensions,
        buttonRemoveLabel = props.buttonRemoveLabel,
        filesContainerHeight = props.filesContainerHeight,
        maxFilesContainerHeight = props.maxFilesContainerHeight;
    var theme = styles.useTheme();

    var _useState = React.useState(),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        error = _useState2[0],
        setError = _useState2[1];

    var _useState3 = React.useState(),
        _useState4 = _slicedToArray__default["default"](_useState3, 2),
        animate = _useState4[0],
        setAnimate = _useState4[1];

    var _useState5 = React.useState([]),
        _useState6 = _slicedToArray__default["default"](_useState5, 2),
        files = _useState6[0],
        setFiles = _useState6[1];

    var oneMega = 1024 * 1024;
    var filesCardRef = React.useRef();
    /**
     * @name renderPreview
     * @description
     * @param event
     * @param filesTab
     * @returns void
     */

    var renderPreview = function renderPreview(event, filesTab) {
      var _event$target;

      setAnimate(false);
      setError(null);

      if (!filesTab && event !== null && event !== void 0 && (_event$target = event.target) !== null && _event$target !== void 0 && _event$target.files) {
        var _event$target2;

        filesTab = event === null || event === void 0 ? void 0 : (_event$target2 = event.target) === null || _event$target2 === void 0 ? void 0 : _event$target2.files;
      }

      if (!filesTab) {
        return onError("Empty file input");
      }

      if (maxUploadFiles) {
        if (maxUploadFiles - files.length <= 0) {
          setError("You cannot attach more than ".concat(maxUploadFiles, " files"));
          return onError("You cannot attach more than ".concat(maxUploadFiles, " files"));
        }
      }

      if (window.File && window.FileReader && window.FileList && window.Blob) {
        var _event$dataTransfer;

        var _loop = function _loop(i) {
          var _file$type;

          var file = filesTab[i];
          var extension = file === null || file === void 0 ? void 0 : (_file$type = file.type) === null || _file$type === void 0 ? void 0 : _file$type.split('/')[1];

          if (maxFileSize && maxFileSize > 0) {
            if (file.size > 1024 * 1024 * maxFileSize) {
              var message = errorSizeMessage || "The size of files cannot exceed ".concat(maxFileSize, "Mb");
              setError(message);
              onError(message);
              return "break";
            }
          }

          if ((allowedExtensions === null || allowedExtensions === void 0 ? void 0 : allowedExtensions.length) > 0) {
            var isAllowed = allowedExtensions.findIndex(function (ext) {
              return (ext === null || ext === void 0 ? void 0 : ext.toLowerCase()) === extension.toLowerCase();
            }) !== -1;

            if (!isAllowed) {
              var _message = "Extension .".concat(extension, " has been excluded");

              setError(_message);
              onError(_message);
              return "break";
            }
          }

          var reader = new FileReader();
          reader.addEventListener("load", function () {
            var obj = {
              name: file.name,
              size: file.size,
              path: this.result,
              contentType: file.type,
              lastModified: file.lastModified,
              extension: extension === null || extension === void 0 ? void 0 : extension.toLowerCase()
            };
            files.push(obj);
            setFiles(_toConsumableArray__default["default"](files));
          }, false);
          reader.readAsDataURL(file);
        };

        for (var i = 0; i < ((_filesTab = filesTab) === null || _filesTab === void 0 ? void 0 : _filesTab.length); i++) {
          var _filesTab;

          var _ret = _loop(i);

          if (_ret === "break") break;
        }

        event === null || event === void 0 ? void 0 : (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.clearData();
      }
    };
    /**
     * @name handleRemoveFile
     * @description
     * @param index
     * @returns void
     */


    var handleRemoveFile = function handleRemoveFile(index) {
      setError(null);
      document.getElementById('input-files').value = '';

      if (typeof index !== 'number') {
        setFiles([]);
        return onFilesChange([]);
      }

      if (index < 0 || index > files.length - 1) {
        return;
      }

      files === null || files === void 0 ? void 0 : files.splice(index, 1);
      setFiles(_toConsumableArray__default["default"](files));
    };
    /**
     * @name handleDragEnter
     * @description
     * @returns void
     */


    var handleDragEnter = React.useCallback(function (event) {
      event.preventDefault();
      setAnimate(true);
    }, []);
    /**
     * @name handleDragOver
     * @description
     * @returns void
     */

    var handleDragOver = React.useCallback(function (event) {
      event.stopPropagation();
      event.preventDefault();
      setAnimate(true);
    }, []);
    /**
     * @name handleDrop
     * @description
     * @returns void
     */

    var handleDrop = React.useCallback(function (event) {
      event.stopPropagation();
      event.preventDefault();
      var dt = event.dataTransfer;
      if (dt.files) renderPreview(event, dt.files);
    }, []);
    /**
     * @name handleDragLeave
     * @description
     * @returns void
     */

    var handleDragLeave = React.useCallback(function (event) {
      setAnimate(false);
    }, []);
    React.useEffect(function () {
      var dragDiv = filesCardRef.current;

      if (dragDiv && !disabled) {
        dragDiv.ondragenter = handleDragEnter;
        dragDiv.ondragover = handleDragOver;
        dragDiv.ondrop = handleDrop;
        dragDiv.ondragleave = handleDragLeave;
      } // eslint-disable-next-line

    }, [filesCardRef.current]);
    React.useEffect(function () {
      if ((defaultFiles === null || defaultFiles === void 0 ? void 0 : defaultFiles.length) > 0) {
        setFiles(defaultFiles);
      } // eslint-disable-next-line

    }, [defaultFiles]);
    React.useEffect(function () {
      if (files && onFilesChange) {
        onFilesChange(_toConsumableArray__default["default"](files));
      } // eslint-disable-next-line

    }, [files]);
    var background = animate ? theme.palette.secondary.light : theme.palette.primary.light;
    return /*#__PURE__*/React__default["default"].createElement(material.Paper, _extends__default["default"]({
      sx: {
        p: 1
      },
      elevation: 0,
      ref: filesCardRef,
      variant: "outlined"
    }, containerProps), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      gutterBottom: true,
      component: "div",
      color: "textSecondary",
      sx: {
        display: 'flex'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        flexGrow: 1,
        fontSize: 12
      }
    }, title), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/React__default["default"].createElement(material.Box, {
      sx: {
        fontSize: 12
      }
    }, files.length, maxUploadFiles > 0 && "/".concat(maxUploadFiles), " file", (files === null || files === void 0 ? void 0 : files.length) > 0 && 's', " joined")), /*#__PURE__*/React__default["default"].createElement(material.Paper, _extends__default["default"]({
      elevation: 0,
      sx: {
        p: 1,
        transition: 500,
        background: background
      }
    }, bannerProps), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      container: true,
      spacing: 2,
      alignItems: "center",
      justifyContent: "center"
    }, /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12,
      sm: 3,
      md: 4,
      sx: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      alt: "",
      width: 120,
      height: 120,
      src: imageSrc || uploadImage
    })), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smUp: true
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      alt: "",
      width: 128,
      height: 128,
      src: imageSrc || uploadImage
    }))), /*#__PURE__*/React__default["default"].createElement(material.Grid, {
      item: true,
      xs: 12,
      sm: 9,
      md: 8,
      sx: {
        color: "#fff",
        textAlign: 'center'
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smDown: true
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "h5"
    }, /*#__PURE__*/React__default["default"].createElement("b", null, header))), /*#__PURE__*/React__default["default"].createElement(material.Hidden, {
      smUp: true
    }, /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "h6"
    }, /*#__PURE__*/React__default["default"].createElement("b", null, header))), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      variant: "caption"
    }, leftLabel, /*#__PURE__*/React__default["default"].createElement(material.Button, {
      size: "small",
      color: "secondary",
      variant: "outlined",
      disabled: disabled,
      sx: {
        m: .5,
        color: theme.palette.grey["50"],
        borderColor: theme.palette.grey["50"],
        '&:hover': {
          borderColor: theme.palette.grey["50"]
        }
      },
      onClick: function onClick() {
        return document.getElementById('input-files').click();
      }
    }, buttonLabel), rightLabel), /*#__PURE__*/React__default["default"].createElement("input", {
      type: "file",
      accept: "*/*",
      id: "input-files",
      multiple: multiFile,
      onChange: renderPreview,
      style: {
        display: "none"
      }
    })))), error && /*#__PURE__*/React__default["default"].createElement(material.Alert, {
      color: "error",
      severity: "error",
      sx: {
        mt: 1
      }
    }, error), (files === null || files === void 0 ? void 0 : files.length) > 0 && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(StyledContainer, {
      component: "div",
      sx: {
        overflowY: "auto",
        mt: 2,
        mr: -1,
        pr: 1,
        height: filesContainerHeight,
        maxHeight: maxFilesContainerHeight
      }
    }, files === null || files === void 0 ? void 0 : files.map(function (file, index) {
      var size = file.size;

      if (size > oneMega) {
        size = (file.size / oneMega).toFixed(2) + ' Mb';
      } else {
        size = (file.size / 1024).toFixed(2) + ' Kb';
      }

      return /*#__PURE__*/React__default["default"].createElement(FileAttachment, {
        file: file,
        size: size,
        index: index,
        disabled: disabled,
        key: "upload-file--".concat(index),
        hanfleRemoveFile: handleRemoveFile
      });
    })), /*#__PURE__*/React__default["default"].createElement(material.Typography, {
      component: "div",
      align: "right",
      sx: {
        mt: 1
      }
    }, /*#__PURE__*/React__default["default"].createElement(material.Button, {
      size: "small",
      disabled: disabled,
      onClick: handleRemoveFile
    }, buttonRemoveLabel || 'Remove all'))));
  }

  FileUpload.propTypes = {
    maxUploadFiles: PropTypes__default["default"].number,
    title: PropTypes__default["default"].string,
    header: PropTypes__default["default"].string,
    leftLabel: PropTypes__default["default"].string,
    rightLabel: PropTypes__default["default"].string,
    buttonLabel: PropTypes__default["default"].string,
    multiFile: PropTypes__default["default"].bool,
    disabled: PropTypes__default["default"].bool,
    maxFileSize: PropTypes__default["default"].number,
    maxFilesContainerHeight: PropTypes__default["default"].number,
    errorSizeMessage: PropTypes__default["default"].string,
    allowedExtensions: PropTypes__default["default"].array,
    onError: PropTypes__default["default"].func,
    onFilesChange: PropTypes__default["default"].func
  };
  FileUpload.defaultProps = {
    multiFile: true,
    allowedExtensions: [],
    title: "My awesome file uploader",
    header: ">[Drag to drop]<",
    leftLabel: "or",
    rightLabel: "to select files",
    buttonLabel: "click here",
    maxFilesContainerHeight: 300
  };

  return FileUpload;

}));
