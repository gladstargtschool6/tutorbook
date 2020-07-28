/**
 * Get all possible appointments by filtering by user handle (each attendee is
 * assigned an all-lowercase handle unique to each appt).
 */
async function getApptByHandles(handles: string[]): Promise<ApptSearchHit> {
  const filters = handles.map((handle) => `handles:${handle}`).join(' AND ');
  const [err, res] = await to<SearchResponse<ApptSearchHit>>(
    index.search('', { filters }) as Promise<SearchResponse<ApptSearchHit>>
  );
  if (err) throw new Error(`${err.name} searching index: ${err.message}`);
  const { hits: appts } = res as SearchResponse<ApptSearchHit>;
  const msg = `Multiple (${filters}) appts: ${JSON.stringify(appts, null, 2)}`;
  if (appts.length !== 1) throw new Error(msg);
  return appts[0];
}
