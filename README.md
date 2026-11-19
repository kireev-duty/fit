# fit

A small offline-first workout app for the phone: legs, glutes, core, pelvic floor and bike intervals.

- Today's workout (A → B → C rotation, gym or home) with start/end photos and technique cues for every exercise
- Set logging with +/− buttons, last-session prefill, double-progression hints, rest timer, plate calculator and warm-up sets
- Progress charts (working weight, body weight, sessions per week, Kegel streak) drawn as plain SVG
- Coach notes and per-exercise targets read from the private repo (`coach/next.json`)
- Pelvis tab: Kegel timer, a 10-minute guided hip and pelvis mobility flow with photos, and a paced breathing timer (6 breaths/min)
- 4×4 / 30-30 bike interval timer with sound
- One-tap workout report shared to any messenger
- Works without internet after the first visit (service worker), installable to the home screen

Open: https://kireev-duty.github.io/fit/ → browser menu → **Add to Home screen**.

Exercise photos: [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (Unlicense, public domain).
Everything else is plain HTML/CSS/JS, no build step.

## Reports

"Save workout" queues the report on the phone and, once online, commits it as a Markdown file to a private repo
(`fit-log/reports/`). The access key is a fine-grained GitHub token limited to that one repo (Contents: read/write),
entered in Settings and stored only in the phone's localStorage — it is never part of this repository.
