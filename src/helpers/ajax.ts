import axios from "axios";
import { IMultiObject } from "../constants/interface";
import routes from "../constants/routes";

// Custom Error Prototype
function MyError(this: any, message: string, response: IMultiObject) {
  this.name = "ResponseError";
  this.message = message;
  this.stack = JSON.stringify(response);
}
MyError.prototype = new Error();

const fetch = async ({
  endpoint,
  method = "GET",
  body = {},
}: {
  endpoint: string;
  method?: "GET" | "POST";
  body?: IMultiObject;
}) => {
  let headers: IMultiObject = {
    Accept: "application/json",
    "Content-type": "application/json",
  };
  if (typeof body === "object" && method.toLowerCase() === "get") {
    const param = new URLSearchParams(body).toString();
    endpoint += `?${param}`;
  }
  try {
    const { data } = await axios({
      headers,
      method,
      url: routes.api + endpoint,
      timeout: 10000,
      data: JSON.stringify(body),
    });
    if (data.code !== 200) throw new (MyError as any)(data.message, data);

    return data;
  } catch (response: any) {
    if (!response) throw new (MyError as any)("Network Error, try again later", {});
    throw new (MyError as any)(response.message, response);
  }
};

export { fetch };
