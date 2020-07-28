/**
 * An easy function to use and understand async replace. Enables you to use an
 * async replacement function.
 * @see {@link https://stackoverflow.com/a/48032528/10023158}
 */
export default async function replaceAsync(
  str: string,
  regex: RegExp,
  asyncFn: (match: string, ...args: any[]) => Promise<string>
): Promise<string> {
  const promises: Promise<string>[] = [];
  str.replace(regex, (match: string, ...args: any[]) => {
    promises.push(asyncFn(match, ...args));
    return '';
  });
  const data: string[] = await Promise.all(promises);
  return str.replace(regex, () => data.shift() as string);
}
