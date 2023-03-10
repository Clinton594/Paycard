export function random(length = 7) {
  return (Math.random() + 1).toString(36).substring(length);
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


