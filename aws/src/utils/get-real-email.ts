/**
 * Takes a user's anonymized email (i.e. their `<handle>@mail.tutorbook.org`
 * email address) and returns their actual email.
 *
 * Each (all-lowercase) `handle` is defined when the appointment is created and
 * is unique to that appointment (so we can look up the appointment based on the
 * email handle).
 */
async function getRealEmail(
  anonEmail: string,
  apptDoc: DocumentSnapshot
): Promise<string> {
  const handle: string = anonEmail.split('@')[0];
  const creator: Attendee = (apptDoc.data() || {}).creator as Attendee;
  const attendees: Attendee[] = (apptDoc.data() || {}).attendees as Attendee[];
  const idx: number = attendees.findIndex((a: Attendee) => a.handle === handle);
  const msg = `No attendee or creator with handle (${handle}).`;
  if (idx < 0 && creator.handle !== handle) throw new Error(msg);
  const [err, user] = await to<UserRecord, FirebaseError>(
    auth.getUser(creator.handle === handle ? creator.id : attendees[idx].id)
  );
  if (err) {
    throw new Error(`${err.name} fetching user (${anonEmail}): ${err.message}`);
  } else if (!(user as UserRecord).email) {
    throw new Error(`User (${(user as UserRecord).uid}) has no email.`);
  } else {
    return (user as UserRecord).email as string;
  }
}
