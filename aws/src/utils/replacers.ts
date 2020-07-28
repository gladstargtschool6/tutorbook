import replaceAsync from 'utils/async-replacer';

/**
 * Splits an email into it's `headers` and `body` parts.
 * @see {@link https://bit.ly/3iJx50F}
 */
export function split(emailData: string): { body: string, headers: string } {
  const splitRegex = /^((?:.+\r?\n)*)(\r?\n(?:.*\s+)*)/m;
  const match: null | string[] = splitRegex.exec(emailData);
  const body: string = match && match[2] ? match[2] : '';
  const headers: string = match && match[1] ? match[1] : emailData;
  return { body, headers };
}

export function removeReturnPath(headers: string): string {
  return headers.replace(/^return-path:[\t ]?(.*)\r?\n/gim, '');
}

export function removeSender(headers: string): string {
  return headers.replace(/^sender:[\t ]?(.*)\r?\n/gim, '');
}

export function removeMessageId(headers: string): string {
  return headers.replace(/^message-id:[\t ]?(.*)\r?\n/gim, '');
}

export function removeDKIM(headers: string): string {
  return headers.replace(/^dkim-signature:[\t ]?.*\r?\n(\s+.*\r?\n)*/gim, '');
}

/**
 * Wrapper to provide the regex needed to find and replace a given header value.
 * @param headers - The raw email headers data.
 * @param header - The header to find and replace (e.g. 'Reply-To').
 * @param replacer - The async replacer function that accepts the regex matches
 * and returns the updated header.
 *
 * @example
 * const replacer = async () => 'Reply-To: Tutorbook <team@tutorbook.org>';
 * const headers = 
 *   `Reply-To: Nicholas <nicholas@example.com>
 *    From: Bobby <bobby@example.com>`
 * replaceHeader(headers, 'reply-to', replacer);
 */
export function replaceHeader(
  headers: string, 
  header: string, 
  replacer: (match: string, ...args: any[]) => Promise<string>
): Promise<string> {
  const rgx = new RegExp(`^${header}:[\\t ]?(.*(?:\\r?\\n\\s+.*)*)`, 'gim');
  return replaceAsync(headers, rgx, replacer);
}
