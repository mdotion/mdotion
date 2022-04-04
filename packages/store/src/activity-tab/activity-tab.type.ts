export interface ActivityBarTabItem {
  id: string;
  name: string;
  icon: JSX.Element;
}

export interface ActivityBarState {
  activeTab: string;
  tabs: ActivityBarTabItem[];
}
