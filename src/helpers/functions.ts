import { ReactElement, RefObject } from "react";
import { ILaunch } from "../constants/interface";
import { fetch } from "./ajax";

export function random(length = 7) {
  return (Math.random() + 1).toString(36).substring(length);
}

export function get_random(list: string[], large = false) {
  return !list.length
    ? large
      ? "https://images2.imgbox.com/5b/02/QcxHUb5V_o.png"
      : "https://images2.imgbox.com/9b/93/k1hCBIG8_o.png"
    : list[Math.floor(Math.random() * list.length)];
}

export function randomInt(min = 100, max = 40000) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function strtourl(str: string) {
  return str.toLowerCase().replace(/[\W_]+/g, "");
}

export const isRequired = (data: any) => {
  return Object.values(data).every((x: any) => x);
};

export const debounce = <F extends (...args: any) => any>(func: F, waitFor: number = 100) => {
  let timeout: any;

  const debounced = (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced as (...args: Parameters<F>) => ReturnType<F>;
};

export const extractLaunchData = (data: any) => {
  const { id, name, date_unix, date_utc, success, failures, details, flight_number } = data;
  const launchdata: ILaunch = {
    id,
    name,
    date_unix,
    date_utc,
    success,
    failures,
    details,
    flight_number,
    wikipedia: data.links.wikipedia,
    webcast: data.links.youtube_id,
    slides: data.links.flickr.original,
    thumnails: data.links.flickr.original,
  };
  return launchdata;
};

export const scrollTo = (elementRef: RefObject<HTMLDivElement>) => {
  if (!elementRef.current) return;
  const element = elementRef?.current.getBoundingClientRect().top + window.scrollY;
  window.scroll({
    top: element,
    behavior: "smooth",
  });
};

export const fetchData = async (endpoint: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch({ endpoint });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
