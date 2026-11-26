# GTA 6 secret places map

Interactive schematic map of secret / hidden places in GTA 6 (weapons, vehicles, money, secrets).
Filter by chapter (cumulative: "up to chapter N") and by type. Tap a pin for step-by-step instructions.

- `index.html` - the app (vanilla JS, no build, no dependencies).
- `data.js` - all places. One object per place: `cats`, `ch` (earliest chapter or `null` when no guide states it),
  `conf` (`multi` = several guides agree, `single` = one guide, `disputed` = guides disagree), `pos` (schematic x,y), `src`.
- Data collected 2026-11-26 from public guides (links are inside each place). Nothing here comes from Rockstar.

## Decisions
- Map is schematic, not the in-game map: region-level positions only. Guides themselves say pins mark an area, not an exact spot.
- Chapter filter is cumulative. Places with no chapter in any guide are always shown and marked "פרק לא ידוע".
- Chapter 1-5 names from GameRant's mission list.
- Unverified details stay flagged (single source / disputed) instead of being smoothed over.

## Adding a place
Append an object to `PLACES` in `data.js`. No other change needed.
