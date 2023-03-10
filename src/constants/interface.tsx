import { FunctionComponent } from "react";

interface IRoutes {
  home: string;
  detail: string;
  detailContent: string;
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

interface IFailure {
  time: number;
  altitude: number;
  reason: string;
}
interface ILaunch {
  id: string;
  name: string;
  date_utc: string;
  date_unix: number;
  wikipedia: string;
  webcast: string;
  details: string;
  success: true | false;
  failures: IFailure[];
  slides: string[];
  thumnails: string[];
  flight_number: number;
}

type ValueOf<T> = T[keyof T];

export type { IRoutes, IMultiObject, IObject, IDimension, ILaunch };
