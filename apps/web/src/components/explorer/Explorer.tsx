import * as SidebarPrimitive from "@mdotion/side-bar";
import * as TreeViewPrimitive from "@mdotion/tree-view";
import { MdCreateNewFolder, MdMoreHoriz, MdNoteAdd } from "react-icons/md";

const Explorer = () => {
  return (
    <SidebarPrimitive.Root>
      <SidebarPrimitive.TitleBar title="Explorer">
        <SidebarPrimitive.ActionButton>
          <MdNoteAdd />
        </SidebarPrimitive.ActionButton>
        <SidebarPrimitive.ActionButton>
          <MdCreateNewFolder />
        </SidebarPrimitive.ActionButton>
      </SidebarPrimitive.TitleBar>
      <SidebarPrimitive.Content
        style={{
          overflowY: "auto",
        }}
      >
        {/* Tree view start */}
        <TreeViewPrimitive.Root>
          <TreeViewPrimitive.Folder tabIndex={0} label="Folder 1">
            <TreeViewPrimitive.Folder tabIndex={1} label="Folder 2">
              <TreeViewPrimitive.Folder
                label="Folder 4"
                tabIndex={2}
                actions={
                  <>
                    <TreeViewPrimitive.ActionButton
                      icon={<MdCreateNewFolder />}
                    />
                    <TreeViewPrimitive.ActionButton icon={<MdNoteAdd />} />
                  </>
                }
              >
                <TreeViewPrimitive.File tabIndex={3} label="File 1" />
                <TreeViewPrimitive.File
                  tabIndex={3}
                  label="File 2"
                  isActive
                  actions={
                    <>
                      <TreeViewPrimitive.ActionButton icon={<MdMoreHoriz />} />
                    </>
                  }
                />
                <TreeViewPrimitive.File tabIndex={3} label="File 3" />
              </TreeViewPrimitive.Folder>

              <TreeViewPrimitive.File tabIndex={2} label="File 1" />
              <TreeViewPrimitive.File tabIndex={2} label="File 2" />
              <TreeViewPrimitive.File tabIndex={2} label="File 3" />
            </TreeViewPrimitive.Folder>
            <TreeViewPrimitive.Folder tabIndex={1} label="Folder 3">
              <TreeViewPrimitive.File tabIndex={2} label="File 1" />
              <TreeViewPrimitive.File tabIndex={2} label="File 2" />
              <TreeViewPrimitive.File tabIndex={2} label="File 3" />
            </TreeViewPrimitive.Folder>
          </TreeViewPrimitive.Folder>
          <TreeViewPrimitive.File tabIndex={0} label="File 1" />
          <TreeViewPrimitive.File tabIndex={0} label="File 2" />
          <TreeViewPrimitive.File tabIndex={0} label="File 3" />
        </TreeViewPrimitive.Root>
        {/* Tree view end */}
      </SidebarPrimitive.Content>
    </SidebarPrimitive.Root>
  );
};

export default Explorer;
