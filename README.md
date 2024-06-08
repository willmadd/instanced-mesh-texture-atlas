# React + TypeScript + Vite

##

### Pre build ideas brainstorm

1. Create ‘canvas’ mesh
2. Create html input box to collect URL - store state as array in Zustand with keys

- textureUrl: string
- position: Vector 3[]
- scale: number
- rotation : Vector 3[]
- filterOn : bool

3. Make images/videos dragable

- Raycasting?
- Drag Controls?
- gsap or vertex shader to implement ‘vibrating pulse’ while dragging, mesh wobble material.
- If dropped on canvas, record location and add to/update zustand state, if dragged off canvas then discard, Raycasting or loop over corners of image and plane to detect if it falls inside or outside of the canvas.

4. Filter

- glsl filter options
- implement ink shader? https://twitter.com/WillMaddicott/status/1648791950894432259
- implement pencil shading? https://twitter.com/WillMaddicott/status/1650596978936487937
- filter on off with html pox positioned to image/video

5.  - If share same texture instanced meshes?
    - Texture atlas for self hosted images
    - Occlusion Culling?

### Pre build component plan

![Preview](/public/images/component-plan.png)
