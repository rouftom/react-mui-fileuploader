import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Avatar, Typography, IconButton, useMediaQuery, Paper, Grid, Hidden, Button, Alert } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function FileAttachment(props) {
    var size = props.size, file = props.file, index = props.index, disabled = props.disabled, handleRemoveFile = props.handleRemoveFile;
    var theme = useTheme();
    var avatarRef = useRef(null);
    var icon = React.createElement(InsertDriveFileOutlinedIcon, { color: "primary", fontSize: "large" });
    // Set icon for compressed files
    if (/\.(g?zip|tar|gz|rar)$/i.test(file.name)) {
        icon = React.createElement(ArchiveOutlinedIcon, { color: "primary", fontSize: "large" });
    }
    // Set icon for media files
    if (/\.(mp.|midi|mkv|avi)$/i.test(file.name)) {
        icon = React.createElement(PlayCircleOutlineIcon, { color: "primary", fontSize: "large" });
    }
    return (React.createElement(Box, { sx: {
            mb: 0,
            display: 'flex',
            alignItems: 'center',
            '&:nth-of-type(even)': {
                backgroundColor: theme.palette.action.hover
            }
        } },
        React.createElement(Box, { sx: { display: 'flex', flexGrow: 1, alignItems: 'center' } },
            React.createElement(Avatar, { alt: "", src: file.path, ref: avatarRef, variant: "rounded", sx: {
                    m: .5,
                    width: 32,
                    height: 32,
                    display: 'flex',
                    background: 'transparent'
                } }, icon),
            React.createElement(Typography, { component: "div", sx: { display: 'inline-grid', alignItems: 'center' } },
                React.createElement(Typography, { variant: "body2", noWrap: true }, file.name),
                React.createElement(Typography, { variant: "caption", noWrap: true },
                    React.createElement(React.Fragment, null,
                        React.createElement("b", null, size),
                        " | ",
                        React.createElement("b", null, (file === null || file === void 0 ? void 0 : file.extension) ? file.extension.toLowerCase() : ''))))),
        React.createElement(Typography, { component: "div", sx: { mr: -.5, textAlign: 'right' } },
            React.createElement(IconButton, { disabled: disabled, onClick: function (event) { return handleRemoveFile(event, index); } },
                React.createElement(CloseIcon, null)))));
}
FileAttachment.propTypes = {
    size: PropTypes.string.isRequired,
    file: PropTypes.object,
    index: PropTypes.number.isRequired,
    disabled: PropTypes.bool,
    handleRemoveFile: PropTypes.func.isRequired
};

var uploadImage = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIiB3aWR0aD0iNDA2IiBoZWlnaHQ9IjMwNiIgY2xhc3M9ImlsbHVzdHJhdGlvbiBzdHlsZXNfaWxsdXN0cmF0aW9uVGFibGV0X18xRFdPYSI+PHRpdGxlPiMxNiBmaWxlcyBhbmQgZm9sZGVyczwvdGl0bGU+PHBhdGggZD0iTTE0Ny43MSwxNDcuN0gxNDAuOHYtMi43Nmg2LjkxYTMuNDQsMy40NCwwLDEsMCwwLTYuODhIMTQwLjhWMTM1LjNoNi45MWE2LjIsNi4yLDAsMSwxLDAsMTIuNFoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMTQ3LjcxLDE0Ny43SDE0MC44di0yLjc2aDYuOTFhMy40NCwzLjQ0LDAsMSwwLDAtNi44OEgxNDAuOFYxMzUuM2g2LjkxYTYuMiw2LjIsMCwxLDEsMCwxMi40WiIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC42MSI+PC9wYXRoPjxlbGxpcHNlIGN4PSIxOTguNTYiIGN5PSIyNTYuOTkiIHJ4PSIxNDUuMDciIHJ5PSIyMC4xOCIgZmlsbD0iI2U2ZTZlNiIgb3BhY2l0eT0iMC40NSI+PC9lbGxpcHNlPjxwYXRoIGQ9Ik0yODguNzUsOTUuNjJjLTEuMzYsMjEuMDctMTEuNDIsNzMuNjEtNzkuNDMsNDQuMDZsMi4zNC02Ljk0czMzLjYxLDUuOTMsNDIuNS02LjU0YzcuNTItMTAuNTYsNy40LTQ1LjE5LDI0LTQzLjU0QTEyLjA5LDEyLjA5LDAsMCwxLDI4OC43NSw5NS42MloiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjg4Ljc1LDk1LjYyYy0xLjM2LDIxLjA3LTExLjQyLDczLjYxLTc5LjQzLDQ0LjA2bDIuMzQtNi45NHMzMy42MSw1LjkzLDQyLjUtNi41NGM3LjUyLTEwLjU2LDcuNC00NS4xOSwyNC00My41NEExMi4wOSwxMi4wOSwwLDAsMSwyODguNzUsOTUuNjJaIiBvcGFjaXR5PSIwLjA4Ij48L3BhdGg+PHBhdGggZD0iTTIyNi4xNSw1Ni4zNnMxLjM4LDcuNTksNCwxMi4xOGEzLjg3LDMuODcsMCwwLDAsNS4zLDEuNDVjMi4zLTEuMzQsNS0zLjgxLDQuNzYtOGwuNDUtNy4xMWE2LjkxLDYuOTEsMCwwLDAtNC44OS02LjMzQzIzMC43Miw0Ni43MSwyMjUuMDgsNTEuNzgsMjI2LjE1LDU2LjM2WiIgZmlsbD0iI2Y0YTI4YyI+PC9wYXRoPjxwb2x5Z29uIHBvaW50cz0iMjQwLjcyIDU3LjIyIDI1NS42OSA3Mi4zMyAyNDYuNzUgODIuMDQgMjM3LjM2IDYzLjk4IDI0MC43MiA1Ny4yMiIgZmlsbD0iI2Y0YTI4YyI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0yMzUuOCw2MC41OHMtLjczLTIuODgsMS40OC0zLjI1LDMuMjksMy43OS40Nyw1WiIgZmlsbD0iI2Y0YTI4YyI+PC9wYXRoPjxwYXRoIGQ9Ik0yMjcuMjcsNjEuMSwyMjYsNjQuNTNhMS4yNCwxLjI0LDAsMCwwLDEuMjUsMS42N2wzLS4yNFoiIGZpbGw9IiNmNGEyOGMiPjwvcGF0aD48cGF0aCBkPSJNMjY1LjIxLDI0OC43OXMtMiwzLjY1LTUuNTMsMy40MS01LDMtMiw0LjQxLDExLjc0LTEuNDIsMTEuNzQtMS40MmwuNTUtNS4wOFoiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMzA3LjM1LDI0NC4xNHMyLjI1LDMuNTEuMzIsNi40OS4yNiw1LjgzLDIuOTEsMy44Niw0LjQzLTExLDQuNDMtMTFsLTQuMTktMi45M1oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjM4Ljg3LDY2Ljg4QTE1LjU0LDE1LjU0LDAsMCwwLDI0MC4xOCw2MlMyNDYsNjcuMzgsMjQyLjEsNzMuMVoiIGZpbGw9IiNjZTgxNzIiIG9wYWNpdHk9IjAuMzEiPjwvcGF0aD48cG9seWdvbiBwb2ludHM9IjI2My40NiAxNzAuMzUgMjYzLjAzIDI1MC40NCAyNzMuMzkgMjUwLjQ0IDI4Ni42NSAxNjkuMzIgMjYzLjQ2IDE3MC4zNSIgZmlsbD0iIzI0Mjg1YiI+PC9wb2x5Z29uPjxwYXRoIGQ9Ik0yNDguNDEsNzYuNDZhMzAuNjYsMzAuNjYsMCwwLDEsMTguMzEtNi43MWMxMC44LS4xMSw0MC45MiwxLjc0LDM4Ljg2LDM4LjU4LTEuNTMsMjcuMy0yLjMxLDU3LjUtMi4zMSw1Ny41bC0zOS42Niw2LjYxUzIxNi4yNCwxMDUuNDEsMjQ4LjQxLDc2LjQ2WiIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzQuNjIsODUuNzJzLTguMzEsMTAtMy4xNywyOC4yOCwxMi4zNiw0MC4zMy0xMi40LDUxLjQxbDQuNTYsNywzOS42Ni02LjYxLjUyLTE2Ljg4LDYuMzctMzEuMjZaIiBvcGFjaXR5PSIwLjA4Ij48L3BhdGg+PHJlY3QgeD0iMTA5LjI1IiB5PSIxNTAuMzEiIHdpZHRoPSI2Ni45NyIgaGVpZ2h0PSIxMDYuNjgiIGZpbGw9IiNhNWE1YTUiIG9wYWNpdHk9IjAuNzkiPjwvcmVjdD48cmVjdCB4PSIxMzguNDgiIHk9IjE1MC4zMSIgd2lkdGg9IjU3LjkzIiBoZWlnaHQ9IjEwNi42OCIgZmlsbD0iI2U2ZTZlNiI+PC9yZWN0Pjxwb2x5Z29uIHBvaW50cz0iMTc5LjggMTU2LjU1IDE3OC43NCAxNjIuNjYgMTUwLjMgMTYyLjY2IDE1MC4zIDE4OC40NCAxOTcuNiAxODguNDQgMTk3LjYgMTY3LjQ0IDE5Ny42IDE2Mi42NiAxOTcuNiAxNTYuNTUgMTc5LjggMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIxNzkuOCAxNTYuNTUgMTc4Ljc0IDE2Mi42NiAxNTAuMyAxNjIuNjYgMTUwLjMgMTg4LjQ0IDE5Ny42IDE4OC40NCAxOTcuNiAxNjcuNDQgMTk3LjYgMTYyLjY2IDE5Ny42IDE1Ni41NSAxNzkuOCAxNTYuNTUiIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9IjE4Ni43MSAxNTYuNTUgMTg1LjY1IDE2Mi42NiAxNTcuMjEgMTYyLjY2IDE1Ny4yMSAxODguNDQgMjA0LjUxIDE4OC40NCAyMDQuNTEgMTY3LjQ0IDIwNC41MSAxNjIuNjYgMjA0LjUxIDE1Ni41NSAxODYuNzEgMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIyNjIuOTggMTIxLjA3IDI2NC45MiAxMjguMjggMjM4Ljc4IDEzOS40OSAyNTEuMDcgMTY4LjE0IDI5NC41NSAxNDkuNDkgMjg0LjU0IDEyNi4xNiAyODIuMjYgMTIwLjg0IDI3OS4zNCAxMTQuMDUgMjYyLjk4IDEyMS4wNyIgZmlsbD0iI2ZmZDIwMCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz0iMjYyLjk4IDEyMS4wNyAyNjQuOTIgMTI4LjI4IDIzOC43OCAxMzkuNDkgMjUxLjA3IDE2OC4xNCAyOTQuNTUgMTQ5LjQ5IDI4NC41NCAxMjYuMTYgMjgyLjI2IDEyMC44NCAyNzkuMzQgMTE0LjA1IDI2Mi45OCAxMjEuMDciIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cG9seWdvbiBwb2ludHM9IjI2OS4zMyAxMTguMzQgMjcxLjI3IDEyNS41NiAyNDUuMTMgMTM2Ljc2IDI1Ny40MiAxNjUuNDEgMzAwLjg5IDE0Ni43NyAyOTAuODkgMTIzLjQzIDI4OC42MSAxMTguMTIgMjg1LjY5IDExMS4zMyAyNjkuMzMgMTE4LjM0IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHBvbHlnb24gcG9pbnRzPSIxOTIuNDIgMTU2LjU1IDE5MS4zNiAxNjIuNjYgMTYyLjkzIDE2Mi42NiAxNjIuOTMgMTg4LjQ0IDIxMC4yMyAxODguNDQgMjEwLjIzIDE2Ny40NCAyMTAuMjMgMTYyLjY2IDIxMC4yMyAxNTYuNTUgMTkyLjQyIDE1Ni41NSIgZmlsbD0iI2ZmZDIwMCI+PC9wb2x5Z29uPjxwb2x5Z29uIHBvaW50cz0iMTkyLjQyIDE1Ni41NSAxOTEuMzYgMTYyLjY2IDE2Mi45MyAxNjIuNjYgMTYyLjkzIDE4OC40NCAyMTAuMjMgMTg4LjQ0IDIxMC4yMyAxNjcuNDQgMjEwLjIzIDE2Mi42NiAyMTAuMjMgMTU2LjU1IDE5Mi40MiAxNTYuNTUiIG9wYWNpdHk9IjAuMDgiPjwvcG9seWdvbj48cmVjdCB4PSIxNjQuMTIiIHk9IjE1MS41NiIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDkgMjguNjIpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiMyNDI4NWIiPjwvcmVjdD48cmVjdCB4PSIxNjQuMTIiIHk9IjE1MS41NiIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIuMDkgMjguNjIpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMTIiPjwvcmVjdD48cmVjdCB4PSIxNjYuNDUiIHk9IjE0Ny4yMyIgd2lkdGg9IjQ0LjkxIiBoZWlnaHQ9IjMwLjU1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNDQgMjguOTEpIHJvdGF0ZSgtOC4yOCkiIGZpbGw9IiMyNDI4NWIiPjwvcmVjdD48cG9seWdvbiBwb2ludHM9IjE5OS4zMyAxNTYuNTUgMTk4LjI3IDE2Mi42NiAxNjkuODQgMTYyLjY2IDE2OS44NCAxODguNDQgMjE3LjE0IDE4OC40NCAyMTcuMTQgMTY3LjQ0IDIxNy4xNCAxNjIuNjYgMjE3LjE0IDE1Ni41NSAxOTkuMzMgMTU2LjU1IiBmaWxsPSIjZmZkMjAwIj48L3BvbHlnb24+PHJlY3QgeD0iMTQ3LjY1IiB5PSIxNzAuMzciIHdpZHRoPSI3NC41NCIgaGVpZ2h0PSIyOS4xIiBmaWxsPSIjYTVhNWE1Ij48L3JlY3Q+PHBhdGggZD0iTTI5MS4xMywxMjRhMjEyLjI0LDIxMi4yNCwwLDAsMS0xNCwxNi4yNyw2My43OCw2My43OCwwLDAsMS0xMi42Nyw5LjkyYy0yLjY5LDEuNjUtNS41Miw0LjU5LTMuNjIsOS4xOWgxNC44MUwyOTUsMTMzLjEzWiIgb3BhY2l0eT0iMC4wOCI+PC9wYXRoPjxyZWN0IHg9IjE3MS4xNiIgeT0iMTcwLjM3IiB3aWR0aD0iNTEuMDIiIGhlaWdodD0iMjkuMSIgZmlsbD0iI2YyZjJmMiI+PC9yZWN0PjxyZWN0IHg9IjE0Ny42NSIgeT0iMjEyLjkyIiB3aWR0aD0iNTkuMDIiIGhlaWdodD0iMjkuMSIgZmlsbD0iI2YyZjJmMiI+PC9yZWN0PjxyZWN0IHg9IjEyOC4zOCIgeT0iMTMyLjMiIHdpZHRoPSIxNi44OSIgaGVpZ2h0PSIxOC40IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PGNpcmNsZSBjeD0iMTk3LjU3IiBjeT0iMTgzLjc1IiByPSI0LjA5IiBmaWxsPSIjYTVhNWE1Ij48L2NpcmNsZT48Y2lyY2xlIGN4PSIxNzguMDQiIGN5PSIyMjYuMzEiIHI9IjQuMDkiIGZpbGw9IiNhNWE1YTUiPjwvY2lyY2xlPjxwYXRoIGQ9Ik0yMTEuMjMsMTM0YTIyLjE2LDIyLjE2LDAsMCwwLTguMjYsMS4yNWMtNC40MywxLjU2LTguNTMsNS41MS01LjM3LDEwLjEzLDIuNDQsMy41Niw1LjksMS43Miw3LjE5LTEuMTNzMi4wNy01LjYxLDQuNTMtNC41N1oiIGZpbGw9IiNmNGEyOGMiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjQ4LDc0LjUzYTUxLjc0LDUxLjc0LDAsMCwxLDI5LDI3LjA4LDM2LjQsMzYuNCwwLDAsMS0xLjA5LDMzLjIxYy01Ljg3LDEwLjI2LTE3LjksMjEuNzctNDIuNTcsMjYuNzVsLTIuODctNy4yMSwyMy41Ni0yMC42OWExMi4xOCwxMi4xOCwwLDAsMCwuNTgtMTcuNzljLTctNy0xNS45LTE3LjMtMTkuOTEtMjguMTdBMTAuMywxMC4zLDAsMCwxLDI4OC40OCw3NC41M1oiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48cGF0aCBkPSJNMjg4LjQ4LDc0LjUzYTUxLjc0LDUxLjc0LDAsMCwxLDI5LDI3LjA4LDM2LjQsMzYuNCwwLDAsMS0xLjA5LDMzLjIxYy01Ljg3LDEwLjI2LTE3LjksMjEuNzctNDIuNTcsMjYuNzVsLTIuODctNy4yMSwyMy41Ni0yMC42OWExMi4xOCwxMi4xOCwwLDAsMCwuNTgtMTcuNzljLTctNy0xNS45LTE3LjMtMTkuOTEtMjguMTdBMTAuMywxMC4zLDAsMCwxLDI4OC40OCw3NC41M1oiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNzEuNDUsMTU1LjdzLTExLTEuMi0xMiwzLTEuNjgsNi43NC0xLjY4LDYuNzRhMzAuMSwzMC4xLDAsMCwwLDE1LjY2LTQuODJaIiBmaWxsPSIjZjRhMjhjIj48L3BhdGg+PHBhdGggZD0iTTMwMy4yNywxNjUuODNhMTA0Ljc4LDEwNC43OCwwLDAsMSwuMTgsMTUuMzhjLS4yNyw2LjMxLTEuOTEsMTYuODItMy4xNSwyNC4wOUEyMy4yMiwyMy4yMiwwLDAsMCwzMDMsMjIwLjZsMTAsMTcuNzktNy4yNiw3LjI0LTExLjkxLTE1LjQ4YTY0Ljg4LDY0Ljg4LDAsMCwxLTEyLjE2LTI3bC0zLjc5LTE5LjM0LTkuNTUtMTIuMTRaIiBmaWxsPSIjMjQyODViIj48L3BhdGg+PHBhdGggZD0iTTIyMS43NSw0Ny4zM3MtMy4wOSw3LjE0LDQuMjksNy40OSw3LjI5LTEuMTUsNy4yOS0xLjE1LjQ2LDkuNTQsNi44NSw4LjM1bDIuNjUtMi42OHMzLTEyLjE3LTIuMi0xNC44NEMyNDAuNjMsNDQuNSwyMzAuMjUsMzMuODMsMjIxLjc1LDQ3LjMzWiIgZmlsbD0iIzI0Mjg1YiI+PC9wYXRoPjxwYXRoIGQ9Ik0yMzUuNjgsNjEuNzNzLjM5LTYuMjIsMy44OS00LjY3UzI0MC43Niw2NS4zOSwyMzUuNjgsNjEuNzNaIiBmaWxsPSIjZjRhMjhjIj48L3BhdGg+PHBhdGggZD0iTTE0MC44LDEzMi4zczExLjg5LTcuNjMsMC0xOC4zLTE2LjU1LDE0LTI1LjIyLTIuNjcsMTMuMzMtMzQuNjYtMTEtMzZTOTUuNDcsNTguNjIsNzQuNTIsNTYuODEsNDcuOTEsOTIuMTEsNjMuOTEsOTQuNTZzMzEuMzQsMy40NCwyNywxOC43NywxMiwxOS41LDE5LjY3LDE1Ljc1LDE3LjgsMy4yMiwxNy44LDMuMjJaIiBmaWxsPSIjZTZlNmU2IiBvcGFjaXR5PSIwLjQ1Ij48L3BhdGg+PHBhdGggZD0iTTk4LDI0MnMtMTEuODUtMy4xOC0xNC40Ny0xNC4xOGMwLDAsMTguMzItMy43OCwxOC45MiwxNS4xNFoiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuNTgiPjwvcGF0aD48cGF0aCBkPSJNOTkuNDYsMjQwLjc4cy04LjMyLTEzLTEuMS0yNS4yOGMwLDAsMTQsOC43OSw3Ljg2LDI1LjI4WiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC43MyI+PC9wYXRoPjxwYXRoIGQ9Ik0xMDEuNTksMjQwLjc4czQuMzEtMTMuODIsMTcuNS0xNi40OWMwLDAsMi41Miw5LTguNDgsMTYuNDlaIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBvbHlnb24gcG9pbnRzPSI5My4wMSAyNDAuNTEgOTUuNDggMjU2LjkxIDExMC41OCAyNTYuOTEgMTEyLjc0IDI0MC41MSA5My4wMSAyNDAuNTEiIGZpbGw9IiMyNDI4NWIiPjwvcG9seWdvbj48L3N2Zz4=';

var StyledContainer = styled(Typography)(function () { return ({
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
}); });
var oneMega = 1024 * 1024;
/**
 * @name FileUpload
 * @description Upload file component wrapper
 * @param props FileUploadProps
 * @returns React.Component
 */
function FileUpload(props) {
    var title = props.title, header = props.header, onError = props.onError, disabled = props.disabled, imageSrc = props.imageSrc, getBase64 = props.getBase64, imageSrcAlt = props.imageSrcAlt, multiFile = props.multiFile, leftLabel = props.leftLabel, rightLabel = props.rightLabel, buttonLabel = props.buttonLabel, maxFileSize = props.maxFileSize, bannerProps = props.bannerProps, BannerProps = props.BannerProps, acceptedType = props.acceptedType, defaultFiles = props.defaultFiles, onFilesChange = props.onFilesChange, _a = props.maxUploadFiles, maxUploadFiles = _a === void 0 ? 0 : _a, containerProps = props.containerProps, ContainerProps = props.ContainerProps, onContextReady = props.onContextReady, showPlaceholderImage = props.showPlaceholderImage, errorSizeMessage = props.errorSizeMessage, allowedExtensions = props.allowedExtensions, buttonRemoveLabel = props.buttonRemoveLabel, LabelsGridProps = props.LabelsGridProps, PlaceholderGridProps = props.PlaceholderGridProps, filesContainerHeight = props.filesContainerHeight, maxFilesContainerHeight = props.maxFilesContainerHeight, placeholderImageDimension = props.placeholderImageDimension, PlaceholderImageDimension = props.PlaceholderImageDimension;
    var theme = useTheme();
    // noinspection JSDeprecatedSymbols
    var bannerCompatibilityProps = __assign(__assign({}, bannerProps), BannerProps);
    // noinspection JSDeprecatedSymbols
    var containerCompatibilityProps = __assign(__assign({}, containerProps), ContainerProps);
    // noinspection JSDeprecatedSymbols
    var _b = __assign(__assign({}, placeholderImageDimension), PlaceholderImageDimension), lg = _b.lg, md = _b.md, sm = _b.sm, xs = _b.xs;
    var _c = useState(), error = _c[0], setError = _c[1];
    var _d = useState(), action = _d[0], setAction = _d[1];
    var _e = useState(), animate = _e[0], setAnimate = _e[1];
    var _f = useState([]), files = _f[0], setFiles = _f[1];
    var _g = useState([]), originalFiles = _g[0], setOriginalFiles = _g[1];
    var inputRef = useRef(null);
    var buttonDeleteRef = useRef(null);
    var filesCardRef = useRef(null);
    var imageDimension = { width: 128, height: 128 };
    if (useMediaQuery(theme.breakpoints.up('xs')) && xs) {
        imageDimension = xs;
    }
    if (useMediaQuery(theme.breakpoints.up('sm')) && sm) {
        imageDimension = sm;
    }
    if (useMediaQuery(theme.breakpoints.up('md')) && md) {
        imageDimension = md;
    }
    if (useMediaQuery(theme.breakpoints.up('lg')) && lg) {
        imageDimension = lg;
    }
    /**
     * @name addFile
     * @description
     * @param event
     * @param filesTab
     * @returns void
     */
    var addFile = function (event, filesTab) {
        setAnimate(false);
        setError(null);
        // eslint-disable-next-line
        // @ts-ignore
        if (!filesTab && event.target.files) {
            // eslint-disable-next-line
            // @ts-ignore
            filesTab = event.target.files;
        }
        if ((!filesTab || filesTab.length === 0) && onError) {
            onError("Empty file input");
            return false;
        }
        if (maxUploadFiles) {
            if ((maxUploadFiles - files.length <= 0) && onError) {
                var errorMessage = "You cannot attach more than ".concat(maxUploadFiles, " files");
                setError(errorMessage);
                onError(errorMessage);
                return false;
            }
        }
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            try {
                var _loop_1 = function (i) {
                    // eslint-disable-next-line
                    // @ts-ignore
                    var file = filesTab[i];
                    var reader = new FileReader();
                    var extension = file.type.split('/')[1];
                    if (maxFileSize && maxFileSize > 0) {
                        if (file.size > (1024 * 1024 * maxFileSize)) {
                            var message = (errorSizeMessage
                                || "The size of files cannot exceed ".concat(maxFileSize, "Mb"));
                            setError(message);
                            if (onError) {
                                onError(message);
                            }
                            return "continue";
                        }
                    }
                    if (allowedExtensions && allowedExtensions.length > 0) {
                        var isAllowed = allowedExtensions
                            .findIndex(function (ext) { return ext.toLowerCase() === extension.toLowerCase(); }) !== -1;
                        if (!isAllowed) {
                            var errorMessage = "Extension .".concat(extension, " has been excluded");
                            setError(errorMessage);
                            if (onError) {
                                onError(errorMessage);
                            }
                            return "continue";
                        }
                    }
                    if (!getBase64) {
                        originalFiles.push(file);
                        setOriginalFiles(originalFiles);
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
                            extension: extension === null || extension === void 0 ? void 0 : extension.toLowerCase()
                        });
                        setFiles(__spreadArray([], files, true));
                    }, false);
                    // eslint-disable-next-line
                    // @ts-ignore
                    reader.readAsDataURL(file);
                };
                // eslint-disable-next-line
                // @ts-ignore
                for (var i = 0; i < (filesTab === null || filesTab === void 0 ? void 0 : filesTab.length); i++) {
                    _loop_1(i);
                }
                // eslint-disable-next-line
                // @ts-ignore
                event.target.value = '';
                return true;
                // eslint-disable-next-line
                // @ts-ignore
            }
            catch (e) {
                setError(e.toString());
                return false;
            }
        }
        return false;
    };
    /**
     * @name removeFile
     * @description
     * @param event
     * @param index
     * @returns void
     */
    // eslint-disable-next-line
    // @ts-ignore
    var removeFile = function (event, index) {
        setError(null);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        if (typeof index !== 'number') {
            setFiles([]);
            setOriginalFiles([]);
            return;
        }
        if (index < 0 || index > files.length - 1) {
            return console.error("item's index not found...");
        }
        var deletedFile = __assign({}, files[index]);
        files === null || files === void 0 ? void 0 : files.splice(index, 1);
        originalFiles === null || originalFiles === void 0 ? void 0 : originalFiles.splice(index, 1);
        setFiles(__spreadArray([], files, true));
        setOriginalFiles(__spreadArray([], originalFiles, true));
        return deletedFile;
    };
    /**
     * @name handleDragEnter
     * @description
     * @returns void
     */
    // eslint-disable-next-line
    // @ts-ignore
    var handleDragEnter = useCallback(function (event) {
        event.preventDefault();
        setAnimate(true);
    }, []);
    /**
     * @name handleDragOver
     * @description
     * @returns void
     */
    // eslint-disable-next-line
    // @ts-ignore
    var handleDragOver = useCallback(function (event) {
        event.stopPropagation();
        event.preventDefault();
    }, []);
    /**
     * @name handleDrop
     * @description
     * @returns void
     */
    // eslint-disable-next-line
    // @ts-ignore
    var handleDrop = useCallback(function (event) {
        var _a;
        event.stopPropagation();
        event.preventDefault();
        setAnimate(false);
        setAction({
            event: event,
            files: (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.files,
        });
    }, []);
    /**
     * @name handleDragLeave
     * @description
     * @returns void
     */
    var handleDragLeave = useCallback(function () {
        setAnimate(false);
    }, []);
    /**
     * @name getContext
     * @description
     * @returns {{input: undefined, removeFile: removeFile, files: *[], addFile: addFile}}
     */
    var getContext = function () { return ({
        addFile: addFile,
        removeFile: removeFile,
        input: inputRef.current,
        files: getBase64 ? files : originalFiles
    }); };
    useEffect(function () {
        if (inputRef.current
            && onContextReady
            && typeof onContextReady === 'function') {
            onContextReady(getContext());
        }
        // eslint-disable-next-line
    }, [inputRef.current]);
    useEffect(function () {
        var dragDiv = filesCardRef.current;
        if (dragDiv && !dragDiv.ondrop && !disabled) {
            // eslint-disable-next-line
            // @ts-ignore
            dragDiv.ondrop = handleDrop;
            // eslint-disable-next-line
            // @ts-ignore
            dragDiv.ondragend = handleDragLeave;
            // eslint-disable-next-line
            // @ts-ignore
            dragDiv.ondragover = handleDragOver;
            // eslint-disable-next-line
            // @ts-ignore
            dragDiv.ondragenter = handleDragEnter;
        }
        // eslint-disable-next-line
    }, [filesCardRef.current]);
    useEffect(function () {
        if (defaultFiles
            && defaultFiles.length > 0
            && files.length !== defaultFiles.length) {
            setFiles(defaultFiles);
        }
        // eslint-disable-next-line
    }, [defaultFiles]);
    useEffect(function () {
        if ((action === null || action === void 0 ? void 0 : action.event) && (action === null || action === void 0 ? void 0 : action.files)) {
            // eslint-disable-next-line
            // @ts-ignore
            addFile(action.event, action.files);
            setAction(null);
        }
        if (onFilesChange) {
            onFilesChange(getBase64 ? files : originalFiles);
            if (onContextReady) {
                onContextReady(getContext());
            }
        }
        // eslint-disable-next-line
    }, [files, action]);
    var background = animate ?
        theme.palette.secondary.light : theme.palette.primary.light;
    return (React.createElement(React.Fragment, null,
        React.createElement(Paper, __assign({ sx: { p: 1 }, elevation: 0, ref: filesCardRef, variant: "outlined" }, containerCompatibilityProps),
            React.createElement(Typography, { gutterBottom: true, component: "div", color: "textSecondary", sx: { display: 'flex' } },
                React.createElement(Box, { sx: { flexGrow: 1, fontSize: 12 } }, title),
                (files === null || files === void 0 ? void 0 : files.length) > 0 &&
                    React.createElement(Box, { sx: { fontSize: 12 } },
                        files.length,
                        maxUploadFiles > 0 &&
                            "/".concat(maxUploadFiles),
                        " file",
                        (files === null || files === void 0 ? void 0 : files.length) > 0 && 's',
                        " joined")),
            React.createElement(Paper, __assign({ elevation: 0, sx: { p: 1, transition: 500, background: background } }, bannerCompatibilityProps),
                React.createElement(Grid, { container: true, spacing: 2, alignItems: "center", justifyContent: "center" },
                    showPlaceholderImage &&
                        React.createElement(Grid, __assign({ item: true, xs: 12, sm: 3, md: 4, sx: { textAlign: 'center', mt: { xs: -3, sm: 2 } } }, PlaceholderGridProps),
                            React.createElement("img", { alt: imageSrcAlt, src: imageSrc || uploadImage, width: imageDimension.width, height: imageDimension.height })),
                    React.createElement(Grid, __assign({ item: true, xs: 12, sm: true, md: true, sx: {
                            color: "#fff",
                            textAlign: 'center',
                            mt: { xs: -4, sm: 2 }
                        } }, LabelsGridProps),
                        React.createElement(Hidden, { smDown: true },
                            React.createElement(Typography, { variant: "h5" },
                                React.createElement("b", null, header))),
                        React.createElement(Hidden, { smUp: true },
                            React.createElement(Typography, { variant: "h6" },
                                React.createElement("b", null, header))),
                        React.createElement(Typography, { variant: "caption" },
                            leftLabel,
                            React.createElement(Button, { size: "small", color: "secondary", variant: "outlined", disabled: disabled, onClick: function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, sx: {
                                    m: .5,
                                    color: theme.palette.grey["50"],
                                    borderColor: theme.palette.grey["50"],
                                    '&:hover': {
                                        borderColor: theme.palette.grey["50"]
                                    }
                                } }, buttonLabel),
                            rightLabel),
                        React.createElement("input", { type: "file", ref: inputRef, onChange: function (event) { return addFile(event); }, multiple: multiFile, accept: acceptedType, style: { display: "none" } })))),
            error &&
                React.createElement(Alert, { color: "error", severity: "error", sx: { mt: 1 }, onClose: function () { return setError(null); } }, error),
            (files === null || files === void 0 ? void 0 : files.length) > 0 &&
                React.createElement(React.Fragment, null,
                    React.createElement(StyledContainer
                    // eslint-disable-next-line
                    // @ts-ignore
                    , { 
                        // eslint-disable-next-line
                        // @ts-ignore
                        component: "div", sx: {
                            overflowY: "auto",
                            mt: 2, mr: -1, pr: 1,
                            height: filesContainerHeight,
                            maxHeight: maxFilesContainerHeight
                        } }, files === null || files === void 0 ? void 0 : files.map(function (file, index) {
                        var size = (file.size / 1024).toFixed(2) + ' Kb';
                        if (file.size > oneMega) {
                            size = (file.size / oneMega).toFixed(2) + ' Mb';
                        }
                        return (React.createElement(FileAttachment, { file: file, size: size, index: index, disabled: disabled, key: "upload-file--".concat(index), handleRemoveFile: removeFile }));
                    })),
                    React.createElement(Typography, { component: "div", align: "right", sx: { mt: 1 } },
                        React.createElement(Button, { size: "small", disabled: disabled, onClick: removeFile, ref: buttonDeleteRef }, buttonRemoveLabel || 'Remove all'))))));
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
};
FileUpload.defaultProps = {
    getBase64: false,
    multiFile: true,
    maxFileSize: 0,
    maxUploadFiles: 0,
    acceptedType: "*/*",
    defaultFiles: [],
    allowedExtensions: [],
    title: "My awesome file uploader",
    header: ">[Drag to drop]<",
    leftLabel: "or",
    rightLabel: "to select files",
    buttonLabel: "click here",
    imageSrcAlt: "Placeholder image",
    maxFilesContainerHeight: 300,
    showPlaceholderImage: true,
    placeholderImageDimension: {},
    PlaceholderImageDimension: {},
    bannerProps: {},
    BannerProps: {},
    containerProps: {},
    ContainerProps: {},
    LabelsGridProps: {},
    PlaceholderGridProps: '',
};

export { FileUpload as default };
//# sourceMappingURL=index.esm.js.map
