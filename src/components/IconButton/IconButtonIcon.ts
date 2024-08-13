/// <reference types="vite-plugin-svgr/client" />
import Read from "../../assets/images/icons/read.svg?react";
import Signature from "../../assets/images/icons/signature.svg?react";
import Version from "../../assets/images/icons/version.svg?react";
import Delete from "../../assets/images/icons/delete.svg?react";
import Details from "../../assets/images/icons/details.svg?react";
import Copy from "../../assets/images/icons/copy.svg?react";
import Reply from "../../assets/images/icons/reply.svg?react";
import View from "../../assets/images/icons/view.svg?react";
import Edit from "../../assets/images/icons/edit_square.svg?react";
import Save from "../../assets/images/icons/save.svg?react";
import Cancel from "../../assets/images/icons/cancel.svg?react";
import QuickEdit from "../../assets/images/icons/quickEdit.svg?react";

/**
 *按鈕圖示列舉
 * @enum {string}
 * @example
 * import {IconButtonIcon} from './enums/IconButton/ButtonIcon'
 */
export const IconButtonIcon = {
  read: (props: React.SVGProps<SVGSVGElement>) => Read(props),
  signature: (props: React.SVGProps<SVGSVGElement>) => Signature(props),
  version: (props: React.SVGProps<SVGSVGElement>) => Version(props),
  delete: (props: React.SVGProps<SVGSVGElement>) => Delete(props),
  details: (props: React.SVGProps<SVGSVGElement>) => Details(props),
  copy: (props: React.SVGProps<SVGSVGElement>) => Copy(props),
  reply: (props: React.SVGProps<SVGSVGElement>) => Reply(props),
  view: (props: React.SVGProps<SVGSVGElement>) => View(props),
  edit: (props: React.SVGProps<SVGSVGElement>) => Edit(props),
  save: (props: React.SVGProps<SVGSVGElement>) => Save(props),
  cancel: (props: React.SVGProps<SVGSVGElement>) => Cancel(props),
  quickEdit: (props: React.SVGProps<SVGSVGElement>) => QuickEdit(props),
};
