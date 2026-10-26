========================================================================
SCENE & STORY IMAGES FOLDER
========================================================================

You can place your photos and images directly into this directory:
e.g.
  images/scene-01.jpg
  images/scene-02.jpg
  images/scene-03.jpg
  ...
  images/scene-10.jpg

Then in `story.js`, update the corresponding scene's `image` property:

STORY_DATA.en.scenes:
  {
    badge: "Scene 01 · Origin",
    title: "Tinker Hub organised scraphack",
    image: "images/scene-01.jpg",          // <--- Add your image path or web URL here
    imageCaption: "Scraphack kickoff at TinkerHub Space",
    paragraphs: [ ... ]
  }

Or upload photos directly through the Admin Page:
  http://localhost:8000/admin.html (or http://localhost:8000/admin)
========================================================================
