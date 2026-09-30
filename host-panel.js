@@
       prompt:
         "Update the existing Tiny Victory mode in Dodge the Donuts. Make " +
         "the spaceship 0.65 times normal size and donuts fall at 1.5 times " +
         "normal speed. Scale the ship collision hitbox to match. Keep " +
         "controls and scoring unchanged."
+    },
+    {
+      mode: "coffee",
+      title: "☕ Coffee Break",
+      description: "Neon takeaway cups with animated steam. Classic difficulty.",
+      // The shared guardrails are appended automatically by selectTwist().
+      prompt:
+        "Add or refine the Coffee Break preset in Dodge the Donuts. Use " +
+        "mode ID coffee. Draw takeaway cups using Canvas 2D shapes: tapered " +
+        "cream paper bodies, colorful sleeves, star badges, raised lids, " +
+        "sip openings, and gently animated steam. Keep the cups mostly " +
+        "upright with a subtle wobble. Use Classic ship size, obstacle " +
+        "speed, and straight-falling movement. Keep the existing forgiving " +
+        "collision radius; steam is decorative and must not cause hits. " +
+        "Render cups on both the waiting screen and during play. Include " +
+        "the preset in the game selector and booth host panel, preserve " +
+        "mode-specific high scores, and use coffee-themed result messages."
     }
