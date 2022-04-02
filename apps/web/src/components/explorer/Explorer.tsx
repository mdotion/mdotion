import * as SidebarPrimitive from "@mdotion/side-bar";
import * as TreeViewPrimitive from "@mdotion/tree-view";
import {
  CreateNewFolder,
  CreateNewFolderOutlined,
  MoreHoriz,
  NoteAdd,
  NoteAddOutlined,
} from "@mui/icons-material";

const Explorer = () => {
  return (
    <SidebarPrimitive.Root>
      <SidebarPrimitive.TitleBar title="Explorer">
        <SidebarPrimitive.ActionButton>
          <NoteAddOutlined />
        </SidebarPrimitive.ActionButton>
        <SidebarPrimitive.ActionButton>
          <CreateNewFolderOutlined />
        </SidebarPrimitive.ActionButton>
      </SidebarPrimitive.TitleBar>
      <SidebarPrimitive.Content>
        {/* Tree view start */}
        <TreeViewPrimitive.Root>
          <TreeViewPrimitive.Folder label="Folder 1">
            <TreeViewPrimitive.Folder label="Folder 2">
              <TreeViewPrimitive.Folder
                label="Folder 4"
                actions={
                  <>
                    <TreeViewPrimitive.ActionButton
                      icon={<CreateNewFolder />}
                    />
                    <TreeViewPrimitive.ActionButton icon={<NoteAdd />} />
                  </>
                }
              >
                <TreeViewPrimitive.File label="File 1" />
                <TreeViewPrimitive.File
                  label="File 2"
                  isActive
                  actions={
                    <>
                      <TreeViewPrimitive.ActionButton icon={<MoreHoriz />} />
                    </>
                  }
                />
                <TreeViewPrimitive.File label="File 3" />
              </TreeViewPrimitive.Folder>

              <TreeViewPrimitive.File label="File 1" />
              <TreeViewPrimitive.File label="File 2" />
              <TreeViewPrimitive.File label="File 3" />
            </TreeViewPrimitive.Folder>
            <TreeViewPrimitive.Folder label="Folder 3">
              <TreeViewPrimitive.File label="File 1" />
              <TreeViewPrimitive.File label="File 2" />
              <TreeViewPrimitive.File label="File 3" />
            </TreeViewPrimitive.Folder>
          </TreeViewPrimitive.Folder>
          <TreeViewPrimitive.Folder label="Folder 1">
            <TreeViewPrimitive.Folder label="Folder 2">
              <TreeViewPrimitive.Folder label="Folder 4">
                <TreeViewPrimitive.File label="File 1" />
                <TreeViewPrimitive.File label="File 2" />
                <TreeViewPrimitive.File label="File 3" />
              </TreeViewPrimitive.Folder>

              <TreeViewPrimitive.File label="File 1" />
              <TreeViewPrimitive.File label="File 2" />
              <TreeViewPrimitive.File label="File 3" />
            </TreeViewPrimitive.Folder>
            <TreeViewPrimitive.Folder label="Folder 3">
              <TreeViewPrimitive.File label="File 1" />
              <TreeViewPrimitive.File label="File 2" />
              <TreeViewPrimitive.File label="File 3" />
            </TreeViewPrimitive.Folder>
          </TreeViewPrimitive.Folder>
        </TreeViewPrimitive.Root>
        {/* Tree view end */}
      </SidebarPrimitive.Content>
    </SidebarPrimitive.Root>
  );
};

export default Explorer;
