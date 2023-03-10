import { FunctionComponent } from "react";

interface IRoutes {
  home: string;
  detail: string;
  api: string;
}

interface ICompany {
  name: string;
  logo: string;
  fee: number;
  email: string;
  phone: string;
  website: string;
  address: string;
}
interface IconList {
  title: string;
  icon: string | FunctionComponent<IDimension>;
}
interface ILink {
  url: string;
  title: string;
  icon: FunctionComponent<IDimension>;
  footer?: boolean;
  props?: IDimension;
}

interface IObject {
  title: string;
  desc: string;
  icon?: string | FunctionComponent<IDimension>;
  status?: true | false;
  value?: string | number;
}
interface IMultiObject {
  [key: string]: any;
}

interface IDimension {
  width?: number;
  height?: number;
  color?: string;
}



type ValueOf<T> = T[keyof T];

export type {
  IRoutes,
  ICompany,
  IMultiObject,
  IObject,
  IDimension,
  
};
