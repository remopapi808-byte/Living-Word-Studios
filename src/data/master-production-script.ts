/**
 * Master Production Script — IN THE BEGINNING (LWS/001)
 *
 * The owner's verbatim 4-act master script for the LWS/001 audio drama.
 * Transcribed character-for-character from the approved copy: curly quotes
 * and apostrophes, em-dashes, en-dash runtimes and punctuation are preserved
 * exactly as written. Italic lyric segments inside narration text are marked
 * with *single asterisks* and rendered as <em> by the reader component.
 *
 * Block kinds:
 *  - 'cue'        → [PRODUCTION SOUND CUE]     (italic gold-muted block)
 *  - 'narration'  → full NARRATOR line as given (voiceover paragraph)
 *  - 'screen'     → ON-SCREEN TEXT OVERLAY      (closing gold-on-parchment banner)
 */

export type ScriptBlock =
  | { kind: 'cue'; label: string; text: string }
  | { kind: 'narration'; label: string; text: string }
  | { kind: 'screen'; label: string; text: string };

export type ScriptAct = {
  act: string;
  title: string;
  runtime: string;
  blocks: ScriptBlock[];
};

export const MASTER_PRODUCTION_SCRIPT: {
  title: string;
  subtitle: string;
  acts: ScriptAct[];
} = {
  title: 'IN THE BEGINNING',
  subtitle:
    'A 6-minute theatrical parallel narrative matching John 1 and Genesis 1 · LWS/001',
  acts: [
    {
      act: 'I',
      title: 'THE DARK AND THE VOICE',
      runtime: '0:00 – 1:30',
      blocks: [
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: "The soundscape begins in absolute, deep, breathless silence. There is no wind, no water, no movement. A sudden, low, ominous subterranean sub-bass frequency begins to hum, vibrating through the ground. A single, clear, haunting acoustic shepherd’s flute plays a distant, solitary five-note melody.",
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover – Spoken slow, low, and deeply cinematic):',
          text: '“Before the clock began to tick... there was the weight of the quiet. No stars to trace the evening. No oceans to beat against the shore. The cosmos was a canvas of absolute nothingness—dark, formless, and void. But the darkness was not empty. The Spirit of God hovered over the face of the deep, waiting for the moment the silence would break.”',
        },
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'The sub-bass frequency peaks. A sharp, crisp sound of a flint striking ignites a sudden volumetric flare of bright light. The choir enters with a single, sweeping, ethereal chord.',
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover):',
          text: '“And then... God spoke. He did not build with wood or stone. He did not mold with clay. He simply breathed a word into the vacuum: *‘Let there be light.’* And the light did not travel—it instantly existed, shattering the ancient night forever. The Voice proved in a single sentence that the dark does not scare the One who engineered the dawn.”',
        },
      ],
    },
    {
      act: 'II',
      title: 'THE FRAMING OF REALITY',
      runtime: '1:30 – 3:30',
      blocks: [
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'The music transitions into heavy, rhythmic, architectural cello movements, sounding like a grand structural blueprint being drawn out in real-time. The sound of deep, rushing waters echoes in a massive stereo field.',
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover):',
          text: '“Day one became day two. The Voice divided the waters, carving out the horizons of the earth like a master architect drafting walls. He gathered the seas into their storehouses and commanded the dry land to appear. From the bare parchment soil, the first green sprouts burst through the dirt, reaching up toward the sky in a beautiful explosion of life.”',
        },
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'A sudden, massive swell of cinematic strings and taiko drums strikes, creating a huge cosmic soundscape. ',
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover):',
          text: '“On day four, He flung the sun, the moon, and a billion glittering stars across the velvet expanse of space like a handful of diamonds. He timed the seasons, mapped the orbits, and set the tides. Every roaring lion, every soaring dove, every breathing creature was drawn out by the same creative mind. And finally, He formed man from the dust, breathing His own breath into human lungs. It was complete. It was perfect. It was very good.”',
        },
      ],
    },
    {
      act: 'III',
      title: 'THE SILENCE AND THE REVERSAL',
      runtime: '3:30 – 5:00',
      blocks: [
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'The grand orchestration abruptly cuts out, leaving only the harsh, cold sound of a whistling winter wind blowing across a desolate stone road. The musical tone shifts from warm gold to a cold, steel-blue minor key.',
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover):',
          text: '“But the story did not stay in the garden. Human hearts turned away from the Voice, choosing the darkness over the light. Rebellion entered the layout of creation, and a new kind of winter fell across the world. For a thousand years, the prophets cried out in the wilderness, waiting for the Voice to speak again. The heavens went silent. The storm raged. Humanity began to sink beneath the weight of its own brokenness, lost in the shadows of a spiritual night that no human hand could roll away.”',
        },
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'The wind sounds grow louder, crashing like the violent nighttime sea storm from ‘The Sovereign Storm’, before dropping into a sudden, deep, underwater echo effect.',
        },
      ],
    },
    {
      act: 'IV',
      title: 'THE ETERNAL WORD',
      runtime: '5:00 – 6:00',
      blocks: [
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: "Out of the dead underwater quiet, a massive, sudden burst of triumphant cinematic orchestral strings and a full regal choir erupts. The solo shepherd’s flute returns, but this time it is backed by a glorious, swelling brass arrangement.",
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover – Delivering the lines with powerful, soaring conviction):',
          text: '“A thousand winters passed... and then, the Voice became flesh. In the beginning was the Word, and the Word was with God, and the Word *was* God. The same Voice that commanded the light to break in Genesis 1 stepped down into our darkness. He left His golden throne to walk among the sheep as a humble Shepherd.”',
        },
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'A sharp, rhythmic sound of heavy footsteps walking across glassy, perfectly calm water rings out over the music.',
        },
        {
          kind: 'narration',
          label: 'NARRATOR (Voiceover):',
          text: 'He faced the giant of death. He bore the crown of thorns. And when they buried Him in a dark cave, He rolled the massive stone away—shattering the darkness once and for all. He is the Alpha. He is the Omega. The Light shineth in the darkness, and the darkness comprehended it not. King of Kings. Lord of Lords. Still the Shepherd. Still on the throne.',
        },
        {
          kind: 'cue',
          label: '[PRODUCTION SOUND CUE]',
          text: 'The full choir hits a final, majestic, lingering chord that fades slowly into a serene ambient gold tone. ',
        },
        {
          kind: 'screen',
          label: 'ON-SCREEN TEXT OVERLAY (Centered in the bottom third of the 9:16 vertical frame):',
          text: '*He is the Living Word. Still on the throne.*',
        },
      ],
    },
  ],
} as const;

/** The owner's master-script runtime for LWS/001 — labels the deck readout. */
export const MASTER_RUNTIME_LABEL = '6:00';

/** 6:00 in seconds — caps the master-script readout while the placeholder plays. */
export const MASTER_RUNTIME_SECONDS = 6 * 60;