# GTA 6 secret places map

Interactive map of secret / hidden places in GTA 6 (weapons, vehicles, money, secrets),
drawn to look like the in-game map of Leonida: the five counties, Vice City and its bay
islands, Vice Beach, Lake Leonida, the Grassrivers swamps and the Leonida Keys down to
Mile Zero Air Station. Filter by chapter (cumulative: "up to chapter N") and by type.
Tap a pin for step-by-step instructions.

- `index.html` - the app (vanilla JS, no build, no dependencies).
- `map.js` - the geography: hand-traced from the official Leonida map poster Rockstar
  released on launch day, styled after the in-game pause map (dark water, coastline
  outlines, county labels, route shields). Region-level accuracy.
- `data.js` - all places. One object per place: `cats`, `ch` (earliest chapter or `null`
  when no guide states it), `conf` (`multi` / `single` / `disputed`), `pos` (x,y on the
  map space), `src`.
- Place data collected 2026-11-26 from public guides (links are inside each place).
  Nothing here comes from Rockstar.

## Decisions
- Pins mark an area, not an exact spot - the guides themselves are region-level.
- Chapter filter is cumulative. Places with no chapter in any guide are always shown and
  marked "פרק לא ידוע".
- Chapter 1-5 names from GameRant's mission list.
- Unverified details stay flagged (single source / disputed) instead of being smoothed over.

## Adding a place
Append an object to `PLACES` in `data.js`. Pick `pos` in the 1400x1915 map space. No other change needed.
