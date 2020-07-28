import { 
  split, 
  removeReturnPath, 
  removeSender, 
  removeMessageId, 
  removeDKIM, 
  replaceHeader 
} from 'utils/replacers';
import replaceAsync from 'utils/async-replacer';

/**
 * Takes a string of raw email data and replaces all occurances of real email 
 * addresses with the anonymous ones.
 * @param emailData - The raw email data (read from an AWS S3 bucket).
 * @param getAnonEmailAddress - Callback to get anonymous email address (given a 
 * real one). This way, we only fetch anonymous email addresses for those that 
 * we actually need.
 */
export default async function parseEmail(
  emailData: string, 
  getAnon: (real: string) => Promise<string>
): Promise<string> {

  // Split the email into it's `headers` and `body` parts.
  // @see {@link https://bit.ly/3iJx50F}
  const data = split(emailData);
  let { headers } = data;

  // Remove the 'Return-Path', 'Sender', and 'Message-ID' headers.
  headers = removeReturnPath(headers);
  headers = removeSender(headers);
  headers = removeMessageId(headers);

  // Remove all 'DKIM-Signature' headers to prevent triggering an
  // "InvalidParameterValue: Duplicate header 'DKIM-Signature'" error.
  // These signatures will likely be invalid anyways, since the 'From'
  // header was modified.
  headers = removeDKIM(headers);

  // Anonymize any (possibly) real email addresses.
  await Promise.all(['reply-to', 'from', 'cc', 'bcc', 'to'].map((header) => {
    return replaceHeader(headers, header, (match: string) => {
      // TODO: This only works when the header values all have names:
      // 'Reply-To: Nicholas <nicholas@example.com>, Bobby <bobby@example.com>'
      // It won't work when there's just an email addresses:
      // 'Reply-To: nicholas@example.com, bobby@example.com'
      return replaceAsync(match, /<(.*)>/, (_, email) => getAnon(email));
    });
  }));

  return `${headers}${data.body}`;
}
