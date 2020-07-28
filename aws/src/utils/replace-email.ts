/**
 * Replaces the email address in a given header with an anonymous email address.
 * @example
 * const orig = 'Reply-To: Nicholas Chiang <nicholas@tutorbook.org>'
 * const anon = replaceRealWithAnon(orig);
 * assert(anon === 'Reply-To: Nicholas Chiang <53GEmgLupal@mail.tutorbook.org');
 *
 * @todo Handle cases where the header looks like: `From: bob@tutorbook.org`
 * (instead of the expected `From: Bob <bob@tutorbook.org>`).
 */
async function replaceRealWithAnon(
  header: string,
  apptDoc: DocumentSnapshot
): Promise<string> {
  if (header.indexOf('mail.tutorbook.org') >= 0) return header;
  return replaceAsync(
    header,
    /<(.*)>/,
    async (_, email: string) => `<${await getAnonEmail(email, apptDoc)}>`
  );
}
