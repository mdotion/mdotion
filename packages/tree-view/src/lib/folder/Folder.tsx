import { MdFolderOpen, MdFolder } from "react-icons/md";
import React, { FC, useCallback, useState } from "react";
import Item from "../item";
import { TreeViewItemProps } from "../item/Item";

export interface TreeViewFolderProps extends TreeViewItemProps {}

const Folder: FC<TreeViewFolderProps> = ({ children, ...props }) => {
  const [expandChild, setExpandChild] = useState(false);

  const onExpand = useCallback(() => {
    setExpandChild(!expandChild);
  }, [setExpandChild, expandChild]);

  return (
    <Item
      isActive={expandChild}
      onClick={onExpand}
      icon={expandChild ? <MdFolderOpen /> : <MdFolder />}
      className={`tree-view-folder  ${expandChild ? "open" : "close"}`}
      {...props}
    >
      <ul className={`tree-view-item-list`}>{children}</ul>
    </Item>
  );
};

export default Folder;
