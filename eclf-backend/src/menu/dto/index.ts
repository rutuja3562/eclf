export class CreateMenuDto {
  name: string;
  path?: string;
  fullPath?: string;
  icon: string;
  localOrder: number;
  parentId: number | null;
  layoutType?: string;
}
