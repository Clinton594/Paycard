import { FunctionComponent } from "react";

interface IRoutes {
  home: string;
  detail: string;
  api: string;
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

interface ILaunch {
  id: string;
}

type ValueOf<T> = T[keyof T];

export type { IRoutes, IMultiObject, IObject, IDimension };
