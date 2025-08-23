export interface SubRoute {
  slug: string;
  name: string;
  route: string;
}

export interface RouteItem {
  slug: string;
  name: string;
  route: string;
  subroutes?: SubRoute[];
}
