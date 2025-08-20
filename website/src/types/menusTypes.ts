export interface Menu {
  id: number;
  name: string;
  layoutType: string;
  localOrder: number;
  path?: string;
  fullPath?: string;
  icon: string;
  parentId: number | null;
  children?: Menu[];
}
