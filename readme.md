# WebDev 2023

## Finished Task

- T1: Recreate contact section
- T2: Button component
- And of course general code review :)

## What I did as part of the task.

- I recreated the contact section. It is fully responsive and works on both mobile and desktop devices.
- I added the `overflow: hidden` property to the .App class in App.css. I did it to make the page occupy 100% of the browser window width. Without it, the images were extending the page and it didn't occupy the full width because it was artificially widened. Thanks to this, it is possible to improve the mobile version of each section. I left a relevant comment there. If necessary, this property can be removed, but it will affect the view on mobile devices. Of course, when adding `overflow: hidden`, you need to implement logic, such as sliders, for images that go beyond the content.
- The mobile version of the contact section has been done somewhat "my way" because it is not presented in the designs.
- The contact section from the design starts at a width of `1280px`.
- I created the `Button` component and replaced it everywhere the buttons or links were used (menu, intro, features, contact)
- During the button replacement in the menu, I also created a menu model. You can take a look at the file models/menu.model.js.
