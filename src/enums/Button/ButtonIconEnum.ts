import React from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import PlagiarismOutlinedIcon from "@mui/icons-material/PlagiarismOutlined";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";

/**
 *按鈕圖示列舉
 * @example
 * import {ButtonIconEnum} from './enums/Button/ButtonIcon'
 */
export const ButtonIcon = {
    Add: React.createElement(ControlPointIcon),
    Edit: React.createElement(EditOutlinedIcon),
    Delete: React.createElement(DeleteOutlinedIcon),
    Save: React.createElement(CheckCircleOutlineIcon),
    Cancel: React.createElement(RemoveCircleOutlineIcon),
    Copy: React.createElement(ContentCopyIcon),
    Print: React.createElement(PrintOutlinedIcon),
    Export: React.createElement(FileDownloadOutlinedIcon),
    View: React.createElement(PlagiarismOutlinedIcon),
    Reply: React.createElement(MarkChatUnreadOutlinedIcon),
};
