# DDD Perth 2026: Dodge the Donuts

“Can you survive your own prompt?” is the hook. Keep the editor and browser side by side so visitors can see the request, the real code change, and the playable result.

## Run the game

The complete game is the self-contained [`index.html`](index.html). Open it directly in a modern browser, or serve the repository directory over HTTP, for example:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. There is no build step, runtime dependency, CDN, remote asset, or account needed to play.

### Controls and modes

- Move with **← / →**, **A / D**, or drag/touch inside the arena.
- **Space** starts or retries when a round is not running.
- **R** resets gameplay and returns to Classic. It does not undo source edits.
- **H** opens or closes the challenge panel. **Escape** closes it. Opening the panel does not pause play.
- Use the visible controls to toggle sound or request fullscreen.
- Choose one of the five labeled prewritten modes: Classic, Big Head, Chaos, Tiny Victory, or Coffee Break. Mode changes are locked during countdown and play.
- Each round has a 3, 2, 1 countdown, a GO overlay, and a 15-second scored run. The score is elapsed time, dodged donuts, and safe close passes.
- Sound is off by default. When enabled, it is synthesized locally with Web Audio.

Best scores are stored locally per mode. If browser storage is blocked or unavailable, scores still work in memory for the current page session.

## Booth demonstration

The challenge panel contains four editable prompts for **features that are not implemented in the baseline**: Homing Donuts, Emergency Shield, Reverse Controls, and Boomerang. Copying a prompt only copies its text. This page has no Copilot integration and never submits a prompt, generates code, or changes the game.

The real workflow is: choose a new rule, copy its prompt to Copilot in your editor, submit it yourself, inspect and review the actual diff, save, reload the edited file, select the new mode, and play. Point to the actual implementation and test it before describing the feature as implemented. A live edit is not guaranteed to finish in under a minute.

The clearly labeled **PREPARED FALLBACK: PREWRITTEN CODE / NOT A LIVE COPILOT EDIT** section only selects one of the five existing modes. If a live change is not ready at 20 seconds, say so and launch Chaos. Do not call the fallback homing or generated.

### Back up and restore edited source

Before the first editor change, save an untouched copy of `index.html` somewhere safe and verify that it reopens. The **Download loaded HTML** button captures the HTML version this page loaded, not a guaranteed original. It is a convenience, not a substitute for the untouched backup. Gameplay reset does not undo source edits. Reloading opens the edited file that was saved; restore the untouched source in the editor between visitors, then reload and verify the new feature is absent. Reopen a backup to confirm it works and starts only one game loop.

### Difficulty tuning

The `DIFFICULTY` object near the top of the inline script in `index.html` controls the falling-speed range, spawn interval range, one-time spawn lane targeting chance, close-pass margin and bonus, and round length. Speed ramps through a round, and spawn density scales with arena width from 1x to 2x. Tune the game on the actual booth display and test collisions after changing these values.

## 45-second booth narration

| Time | Say | Do |
|---|---|---|
| **0–5 sec** | “This game has a problem: the donuts don’t chase you. Want to make it harder?” | Point to the game, then open **Build Your Challenge**. |
| **5–10 sec** | “You describe the rule. Copilot helps implement it. Let’s try Homing Donuts.” | Copy the Homing Donuts prompt into Copilot in your editor and submit it yourself. |
| **10–20 sec** | “We asked for donuts that steer toward the ship, with red frosting and a speed limit of 80 pixels per second. That gives us behavior we can inspect and test.” | Keep the actual Copilot activity visible. Do not claim the feature exists until the change is reviewed and tested. |
| **20–27 sec** | “Here’s the proposed change. This controls the steering, and this limits how fast they chase. We review before running.” | Highlight actual changed lines. If ready, save, reload, select the new mode, and verify the collision position. |
| **27–30 sec** | “Your idea is now a playable rule. Arrow keys to move. Can you survive it?” | Start the three-second countdown, only if the live change is ready and reviewed. |
| **30–45 sec** | “Keep moving! That’s the workflow: describe, generate, review, test.” | Let the visitor play the 15-second round. Finish with: “What would you change next?” |

**This is a target, not a guaranteed live-edit time.** At 20 seconds, if the edit is not ready, say:

> “The live change is still running. Here’s a clearly labeled prepared variation so you can play while it finishes. This button is not generating code.”

Launch **Chaos** from the prepared fallback. Do not imply it demonstrates homing, and do not rush an unfinished edit just to hit the clock.

## Rehearsal checklist

### Before the conference

- [ ] Save an untouched baseline and practice restoring it in the editor. Confirm it reopens without starting duplicate game loops.
- [ ] Confirm the baseline does **not** implement Homing Donuts, Emergency Shield, Reverse Controls, or Boomerang.
- [ ] Open `index.html` in the editor and browser, either directly or through local HTTP.
- [ ] Check that Copilot is available and signed in on the demo machine.
- [ ] Arrange the screen so the prompt, actual code diff, and game are readable from several feet away.
- [ ] Run the exact Homing Donuts prompt from a clean baseline multiple times.
- [ ] Time the full sequence, including review, save, reload, selecting the new mode, and countdown. Never promise completion under a minute.
- [ ] Practice the honest fallback line and launch sequence.
- [ ] Playtest and tune `DIFFICULTY` on the actual display.
- [ ] Test keyboard controls, pointer/touch, countdown, reset, fullscreen, prompt copy and manual-copy fallback, and sound on/off.
- [ ] Test storage-disabled behavior and the loaded-source download/reopen workflow.
- [ ] Check reduced-motion behavior and inspect the browser console.

### Before each visitor

- [ ] Restore the untouched source in the editor after the previous live edit, then reload.
- [ ] Verify the new feature is absent again.
- [ ] Close unrelated tabs and hide notifications or sensitive information.
- [ ] Prepare the challenge panel and keep the clearly labeled fallback accessible.
- [ ] Click the game after returning from the editor so keyboard input reaches the browser.

### Before launching a live change

- [ ] The new mode appears in the selector and the change is limited to that mode.
- [ ] The requested behavior and any speed limits are present in the real code.
- [ ] Collision checks use the obstacle's actual updated position.
- [ ] Existing modes, controls, countdown, and reset still work.
- [ ] There are no obvious browser errors.

The teaching moment is the distinction between “drop toward where I was” and “keep chasing where I am.” It makes the visitor’s request precise and gives the group concrete behavior to inspect and test.

## Validation

The repository has no separate test suite or build tooling. The self-contained page is validated with JavaScript syntax checks and manual browser interaction checks; see the pull request validation summary for the checks run for a particular change. A successful local check does not guarantee a live Copilot edit, conference network access, or identical behavior in every browser.

## License

See [`LICENSE`](LICENSE). Keep its notice with copies or substantial portions of the software.
