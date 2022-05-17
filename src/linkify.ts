import linkifyHtml from "linkify-html";
import { Options } from "linkifyjs";
import xss, { IFilterXSSOptions } from "xss";

const linkify = (
  rawHtml: string,
  options?: Options,
  xssOptions?: IFilterXSSOptions,
) => {
  const sanitized = xss(rawHtml, xssOptions);
  return linkifyHtml(sanitized, options);
};

export default linkify;
