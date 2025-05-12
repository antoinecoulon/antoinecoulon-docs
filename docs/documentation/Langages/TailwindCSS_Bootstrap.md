# Tailwind CSS / Bootstrap

- [Tailwind CSS / Bootstrap](#tailwind-css--bootstrap)
  - [Ressources](#ressources)
  - [Install v4 with Vite](#install-v4-with-vite)

---

## Ressources

- [Tailblocks](https://tailblocks.cc/)
- [Flowbite](https://flowbite.com/blocks/)
- [Shadcn](https://ui.shadcn.com/)
- [Flyonui](https://flyonui.com/)

- [FastBootstrap](https://fastbootstrap.com/)
- [Bootswatch](https://bootswatch.com/)
- [Freelancer](https://startbootstrap.com/theme/freelancer)

---

## Install v4 with Vite

```bash
npm install tailwindcss @tailwindcss/vite
```

Once done, you’ll have tailwind installed but for it to actually work in your project, you’ll need to modify your vite.config.js file so it includes Tailwind.

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // <-- added
import tailwindcss from "@tailwindcss/vite"; //<-- added

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // <-- added
});
```

Finally, go to your index.css file located under the src folder. Remove everything in it and add the following :

```css
@import "tailwindcss";
```

Now, Tailwind should be properly installed and is ready to be used.
