# DuoOnAir website

The landing page and privacy policy for **DuoOnAir**, an iPhone Duo app that turns the outer screen of an iPhone Duo into a glowing "On Air" sign. Stand the phone up in tent mode and let people know you're recording, in a meeting, or busy.

This repository contains only the marketing site. The iOS app is not part of it.

## About the app

- **Fills the screen:** messages scale to the outer display, wrapping onto two or three lines when that makes them bigger, and stay centered clear of the camera.
- **Neon animations:** Glow, Pulse, Breathe, Blink, or Neon Flicker (with one faulty letter that stutters like a real tube), with adjustable speed.
- **Your colors:** red, amber, green, blue, pink, white or a custom color, as solid, outline, or rainbow letters.
- **Seven typefaces:** Classic, Rounded and Mono (SF Pro), Helvetica Neue, JetBrains Mono and Space Grotesk.
- **Backdrop:** optional faint background grid and a corner glow in the text color.
- **Stays on:** the screen doesn't sleep while the sign is showing.
- **Swipe to switch:** tap the sign to open settings; swipe left or right to move through the messages in a category.
- **Accessible:** Reduce Motion replaces flashing and pulsing with a steady sign, flicker stays under three flashes a second, and VoiceOver can read and change the message.
- **Dark or light:** light, dark or system appearance for settings. The sign itself is always black.
- **31 ready-made messages:** Work (15, e.g. ON A CALL, FOCUS TIME, BRB), Studio (8, e.g. ON AIR, RECORDING, MIC LIVE) and Fun (8, e.g. CODING, NAPPING, WAFFLE BREAK), plus your own text.
- **Private:** no accounts, analytics, ads, or network access. See the [privacy policy](privacy.html).

## Site structure

```
.
├── index.html            # Landing page: features, messages, how it works, support
├── support.html          # Support page: how to file issues on GitHub
├── privacy.html          # Privacy policy
├── assets/
│   ├── style.css         # Shared stylesheet
│   ├── favicon.png       # Browser tab icon
│   ├── apple-touch-icon.png
│   ├── icon-512.png      # App icon shown in the hero
│   └── screenshot-*.jpg  # App screenshots (sign, settings, help), 1280×880
└── .nojekyll             # Tells GitHub Pages to skip Jekyll processing
```

It is plain HTML and CSS. There is no build step, no package manager, and no JavaScript.

## Run locally

Any static file server works. From the repository root:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deployment

The site is published with GitHub Pages straight from the repository root. Pushing to `main` updates it. The Pages source is set in the repository settings (Settings → Pages), not in this repo.

## Editing

- **Copy:** edit `index.html`, `support.html` or `privacy.html` directly. The header and footer are repeated in every page, so update all of them when you change navigation.
- **Privacy policy:** update the "Effective" date in `privacy.html` whenever the policy changes. Keep it in sync with what the app actually does.
- **Styling:** the design tokens (colors, max width) are CSS custom properties at the top of `assets/style.css`. The look mirrors the app: true black, neon red, and a faint grid.
- **Icons:** `favicon.png`, `apple-touch-icon.png` and `icon-512.png` are referenced from the page `<head>` and the hero. Replace the files in place to keep the paths working.
- **App Store badge:** the hero currently shows a "Coming soon to the App Store" badge. Swap it for the real App Store link at launch.

## Contact

Bugs, feature requests, and questions: [open an issue](https://github.com/halans/duo-on-air/issues/new). For anything private, email [support@halans.dev](mailto:support@halans.dev).

## License

No license has been specified yet. Add a `LICENSE` file if you want to allow reuse.
