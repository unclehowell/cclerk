# Great House Farm HyperFrames review demo

This branch isolates a HyperFrames render proof-of-concept from production website code.

## Architecture

- **HyperFrames** authors a deterministic HTML composition and produces the MP4.
- **GitHub Actions** supplies the Linux render runner, Node.js 22, headless Chromium and FFmpeg. It checks the composition, renders the MP4, uploads a workflow artifact, and commits the render output into the Pages asset folder.
- **Cloudflare Pages** serves the static player and MP4 from the dedicated branch.
- This uses Pages for delivery rather than trying to run FFmpeg inside a Cloudflare Worker. Workers are not the appropriate runtime for this headless-Chromium render process.

## Files

- `hyperframes-ghf-review/project/index.html` — source composition for the HyperFrames render.
- `hyperframes-ghf-review/STORYBOARD.md` — timing, content and evidential safeguards.
- `static/hyperframes-ghf-review/index.html` — browser video player.
- `static/hyperframes-ghf-review/review.mp4` — generated output, written by GitHub Actions.

## Run

Push a change to this project folder or trigger the **Render GHF case review with HyperFrames** workflow. The workflow initializes a clean project via the HyperFrames CLI, renders at 30 fps, checks that an MP4 exists, uploads it as an artifact, and writes the latest MP4 into the Pages asset directory.

The production site on this Cloudflare Pages project uses its own branch and route; existing custom domains and other Pages projects are not modified by this demo.

## Important

The film is an executive-summary adaptation of the full written critique, not a verbatim full-length reading. It is research support, not legal advice, and it does not claim that fraud has been proved.
