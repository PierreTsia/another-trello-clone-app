export const stringToDate = ({ value }: { value: string }) => new Date(value);
export const stringToNum = ({ value }: { value: string }) => +value;
export const slugify = (str: string, sep: string = '-'): string =>
  str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z_ ]/g, '')
    .replace(/ +/g, sep);

export const sortByIndex = (arr: any) => {
  return arr.sort((a: any, b: any) => (a?.index > b?.index ? 1 : -1));
};
