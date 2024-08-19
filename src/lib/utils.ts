import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export const fetchData = (url) =>
  axios
    .get(url)
    .then((res) => res.data)
    .catch((error) => {
      console.log(error.message);
      const errData = { success: false, err: error.message };
      return errData;
    });

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
