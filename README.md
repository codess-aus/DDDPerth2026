# DDDPerth2026

Use **“Can you survive your own prompt?”** as your hook. Keep the editor and browser side by side so visitors see the request, the real code change, and the playable result.

## 45-second booth narration

| Time | Say | Do |
|---|---|---|
| **0–5 sec** | “This game has a problem: the donuts don’t chase you. Want to make it harder?” | Point to the game, then open **Build Your Challenge**. |
| **5–10 sec** | “You describe the rule. Copilot helps implement it. Let’s try Homing Donuts.” | Copy the Homing Donuts prompt into Copilot in your editor and submit. |
| **10–20 sec** | “We asked for chasing donuts, a speed limit, and red frosting. Those details make the request testable.” | Keep the actual Copilot activity visible. |
| **20–27 sec** | “Here’s the proposed change. This controls the steering, and this limits how fast they chase. We review before running.” | Highlight the relevant changed lines. If ready, save, reload, and select the new mode. |
| **27–30 sec** | “Your idea is now a playable rule. Arrow keys to move. Can you survive it?” | Start the three-second countdown. |
| **30–45 sec** | “Keep moving! That’s the workflow: describe, generate, review, test.” | Let the visitor play the 15-second round. Finish with: “What would you change next?” |

**This is a target, not a guaranteed live-edit time.** Only describe changes you can actually see, and only launch the edited version after reviewing it.

### If the edit isn’t ready by 20 seconds

Say:

> “The live change is still running. Here’s a clearly labeled prepared variation so you can play while it finishes. This button is not generating code.”

Launch **Chaos** from the fallback section. Don’t imply it demonstrates homing, and don’t rush an unfinished edit just to hit the clock.

## Rehearsal checklist

### Before the conference

- [ ] Save an untouched baseline and practice restoring it in your editor.
- [ ] Confirm the baseline **does not already contain Homing Donuts**.
- [ ] Open `index.html` in the editor and browser.
- [ ] Check that Copilot is available and signed in on the demo machine.
- [ ] Arrange the screen so the prompt, changed code, and game are readable from several feet away.
- [ ] Run the exact Homing Donuts prompt from a clean baseline several times.
- [ ] Time the full sequence, including review, saving, reloading, mode selection, and countdown.
- [ ] Practice the fallback line and launch sequence.
- [ ] Playtest difficulty on the actual display. Tune `DIFFICULTY` if rounds feel trivial or unfair.
- [ ] Test arrow keys, touch if needed, countdown, reset, fullscreen, and sound.
- [ ] Keep sound muted unless the conference setting permits it.

### Before each visitor

- [ ] Restore the clean source after the previous live edit, then reload.
- [ ] Verify the new feature is absent again.
- [ ] Close unrelated tabs and hide notifications or sensitive information.
- [ ] Prepare the challenge panel and keep the fallback accessible.
- [ ] Click the game after returning from the editor so keyboard input reaches it.

### Before launching the live change

- [ ] The new mode appears in the selector.
- [ ] Steering is restricted to that mode.
- [ ] The steering speed limit is present.
- [ ] Collision detection uses the obstacle’s updated position.
- [ ] Existing controls, countdown, and reset still work.
- [ ] There are no obvious browser errors.

**Your strongest teaching moment:** distinguish *“drop toward where I was”* from *“keep chasing where I am.”* That makes the visitor’s request precise and gives you a concrete behavior to inspect in the code and test in the game.

**Closing line:**

> “The game is the fun part. The demonstration is turning your idea into a code change we can inspect and test.”
