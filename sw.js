// Offline cache: everything is saved on install, then served cache-first.
const CACHE = "fit-v1";
const IMGS = ["Ab_Roller","Barbell_Hip_Thrust","Barbell_Squat","Dead_Bug","Dips_-_Triceps_Version","Dumbbell_Bench_Press",
  "Dumbbell_Lunges","Dumbbell_Rear_Lunge","Goblet_Squat","Hanging_Leg_Raise","Kneeling_Hip_Flexor","Leg_Press",
  "One-Arm_Dumbbell_Row","One_Leg_Barbell_Squat","Pallof_Press","Pullups","Push-Ups_-_Close_Triceps_Position","Pushups",
  "Reverse_Crunch","Romanian_Deadlift","Side_Bridge","Single_Leg_Glute_Bridge","Standing_Calf_Raises",
  "Stiff-Legged_Dumbbell_Deadlift","Trap_Bar_Deadlift"];
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png"]
  .concat(IMGS.flatMap(n => [`img/${n}-0.jpg`, `img/${n}-1.jpg`]));

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match("index.html")))
  );
});
