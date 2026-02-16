

# Digital Archive Interface

## Overview
A minimal, design-forward single-page website presenting 97 archival entries mapped to 6 audio files. The aesthetic is dark, high-tech, and calm — inspired by AI lab interfaces and futuristic archives.

## Audio Assets
The 6 uploaded WAV files (sound.wav, sound_1.wav, sound_3.wav, sound_4.wav, sound_5.wav, sound_6.wav) will be bundled into `src/assets/audio/` and imported once as ES6 modules, then referenced by index across all 97 entries.

## Design System
- **Background**: Near-black (#0a0a0f) with deep blue accents (#1a1a3e, #2d2d6b)
- **Typography**: Clean, light-weight sans-serif with generous letter-spacing
- **Glow effects**: Subtle blue glow on hover and active states
- **Spacing**: Generous vertical rhythm between entries for a calm, breathable feel
- **Motion**: Smooth hover transitions (opacity, subtle translate, glow)

## Layout
- Full-width vertical scroll, single column
- Minimal header at top with archive title
- 97 entries stacked vertically, each showing:
  - Entry number (styled subtly)
  - Title
  - Short descriptive body text (2–4 lines)
  - A minimal play indicator/trigger
- Currently playing entry gets a subtle active state (blue glow accent)

## Interaction
- Click any entry → plays its mapped audio instantly
- If audio is already playing, it switches seamlessly (single global `Audio` instance)
- Active/playing entry is visually distinguished with a subtle glow or accent line
- No pause, seek, volume, or other controls — just play on click

## Data Model
- A single array of 97 entry objects, each with: `id`, `title`, `description`, and `audioIndex` (0–5 mapping to one of the 6 files)
- Entries will have unique generated titles and short descriptions fitting an archival/scientific tone

## Performance
- 6 audio files imported once, referenced by index
- Single `Audio` instance reused globally via React ref
- No unnecessary re-renders — minimal state (just `activeEntryId`)

