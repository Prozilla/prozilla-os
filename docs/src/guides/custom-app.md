---
outline: deep
description: "Learn how to create your own custom ProzillaOS apps"
image: "https://os.prozilla.dev/docs/thumbnails/custom-app-guide-thumbnail.png"
---

# Making a custom app

## Prerequisites

This guide assumes you have already set up a basic React project with TypeScript. To learn more about how to set up a React project, check out the official [React documentation](https://react.dev/learn/start-a-new-react-project). The React documentation also has a guide on [how to start using TypeScript in your React project](https://react.dev/learn/typescript).

## Building an interface

Create a new file called `MyApp.tsx` inside your `components` folder, this file will hold the main part of your interface, which will be a React component.

```tsx
// components/MyApp.tsx

import { WindowProps } from "prozilla-os";

export function MyApp({ app }: WindowProps) {
	return <h1>Welcome to {app.name}!</h1>;
}
```

To make your app look pretty, you'll need some CSS. Create a file called `MyApp.module.css` in the same folder as your component, which will include your classes and styles.

```css
/* components/MyApp.module.css */

.Title {
	font-size: 2rem;
}
```

Then import your stylesheet in your React component and apply your classes:

```tsx
// components/MyApp.tsx

import { WindowProps } from "prozilla-os";
import styles from "./MyApp.module.css"

export function MyApp({ app }: WindowProps) {
	return <h1 className={styles.Title}>Welcome to {app.name}!</h1>;
}
```

## Creating your app

Now that we have a basic interface, we'll need to turn this into an actual app and make it work with the ProzillaOS applications sytem.

Create a new file called `index.ts`, this file will set your app's metadata and export it along with a reference to your React component.

```ts
// index.ts

import { App } from "prozilla-os";
import { MyApp } from "./components/MyApp";

/**
 * Change this to the name of your application
 * This is what users will see when they use your app
 */
const name = "My App";

/**
 * Change this to the name of your application, but only use lower case letters and hyphens (-)
 * This won't be seen by users very often, but will be used by ProzillaOS to identify your app
 */
const id = "my-app";

const myApp = new App(name, id, MyApp)
	.setDescription("An interesting description of your app and its purpose") 
	.setIconUrl("A link to a cool SVG icon for your app");

export { myApp };
```

Make sure to set a valid icon URL or your app might become invisible. For more information about the `App` class and about how to customize it, refer to the [App class documentation page](../reference/core/classes/apps/app).

## Testing your app

To test your ProzillaOS application, you will have to spin up a small ProzillaOS instance and place your app inside of it. You will also need React to render the page.

To get started, create a new folder inside your `components` folder called `test`, this is where we'll put the React component mentioned previously. Now create a file inside your `test` folder called `Test.tsx`:

```tsx
// components/test/Test.tsx

import { ProzillaOS, Taskbar, WindowsView, ModalsView, Desktop } from "prozilla-os";
import { myApp } from "../../index";


const appsConfig = new AppsConfig({
	apps: [
		myApp.setPinnedByDefault(true) // This option pins your app to the taskbar
			.setLaunchAtStartup(true) // This option makes your app automatically launch whenever you open the test page
	]
}); 

export function Test() {
	return <ProzillaOS
		config={{
			apps: appsConfig
		}}
	>
		<Taskbar/>
		<WindowsView/>
		<ModalsView/>
		<Desktop/>
	</ProzillaOS>;
}
```

You can leave out any of the following components if they are not important for testing your app: `<Taskbar/>`, `<ModalsView/>` and `<Desktop/>`. Alternatively, you can omit the default interface of ProzillaOS and focus on the interface of your app by changing your `Test.tsx` file to a standalone page for your app like this:

```tsx
// components/test/Test.tsx

import { ProzillaOS, StandaloneRoute } from "prozilla-os";
import { myApp } from "../../index";

export function Test() {
	return <ProzillaOS>
		<StandaloneRoute app={myApp}>
	</ProzillaOS>;
}
```

Next, create a file called `index.tsx` inside your `test` folder:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Test } from "./Test";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<React.StrictMode><Test/></React.StrictMode>);
```

Finally, adjust the `body` of your `index.html` file to:

```html
<body>
	<div id="root"></div>
	<script type="module" src="components/test"></script>
</body>
```

Now start your React website and you should see your test page. If you are using Vite, you can easily develop your app and watch the changes reload automatically on the test page.

## Using your app

There you go! You have now made a custom ProzillaOS app that you can start using. Refer to the [Getting started guide](./getting-started) for more information about how to use your custom app.

## What's next?

Now you can publish your app as an npm or a GitHub package and share it with others. Feel free to [edit this file](https://github.com/prozilla-os/ProzillaOS/edit/main/packages/README.md) to add a link to your ProzillaOS app in the official ProzillaOS repo on GitHub and on the ProzillaOS documentation site.