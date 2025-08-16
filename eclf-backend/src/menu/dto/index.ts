export class CreateMenuDto {
  title: string;
  url?: string;
  icon?: string;
  order?: number;
  parentId?: number;
}
