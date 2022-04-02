import React, { FC } from "react";
import { MdInsertDriveFile } from "react-icons/md";
import Item, { TreeViewItemProps } from "../item/Item";

export interface TreeViewFileProps extends TreeViewItemProps {}

const File: FC<TreeViewFileProps> = ({ ...props }) => {
  return (
    <Item icon={<MdInsertDriveFile />} className="tree-view-file" {...props} />
  );
};

export default File;
