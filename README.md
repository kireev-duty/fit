# fit

A small offline-first workout app for the phone: legs, glutes, core, pelvic floor and bike intervals.

- Today's workout (A → B → C rotation, gym or home) with start/end photos and technique cues for every exercise
- Kegel and 4×4 / 30-30 interval timers with sound
- One-tap workout report shared to any messenger
- Works without internet after the first visit (service worker), installable to the home screen

Open: https://kireev-duty.github.io/fit/ → browser menu → **Add to Home screen**.

Exercise photos: [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (Unlicense, public domain).
Everything else is plain HTML/CSS/JS, no build step.

## Reports

"Save workout" queues the report on the phone and, once online, commits it as a Markdown file to a private repo
(`fit-log/reports/`). The access key is a fine-grained GitHub token limited to that one repo (Contents: read/write),
entered in Settings and stored only in the phone's localStorage — it is never part of this repository.
