import linkifyHtml from "linkify-html";
import { Options } from "linkifyjs";
import xss from "xss";

const linkify = (rawHtml: string, options: Options): string => {
  const sanitized = xss(rawHtml);
  return linkifyHtml(sanitized, options);
};

export default linkify;
