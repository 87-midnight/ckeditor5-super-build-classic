# CKEditor 5 editor generated with the online builder

This repository presents a CKEditor 5 editor build generated by the [Online builder tool](https://ckeditor.com/ckeditor-5/online-builder)

## Quick start

1. Open the `sample/index.html` page in the browser.

2. Fill the prompt with the license key. If you do not have the license key yet [contact us](https://ckeditor.com/contact/).

## Configuring build

Changes like changing toolbar items, changing order of icons or customizing plugin configurations should be relatively easy to make. Open the `sample/index.html` file and edit the script that initialized the CKEditor 5. Save the file and refresh the browser. That's all.

*Note:* If you have any problems with browser caching use the `Ctrl + R` or `Cmd + R` shortcut depending on your system.

However if you want to remove or add a plugin to the build you need to follow the next step of this guide.

Note that it is also possible to go back to the [Online builder tool](https://ckeditor.com/ckeditor-5/online-builder) and pick other set of plugins. But we encourage you to try the harder way and to learn the principles of Node.js and CKEditor 5 ecosystems that will allow you to do more cool things in the future!

### Installation

In order to rebuild the application you need to install all dependencies first. To do it, open the terminal in the project directory and type:

```
npm install
```

Make sure that you have the `node` and `npm` installed first. If not, then follow the instructions on the [Node.js documentation page](https://nodejs.org/en/).

### Adding or removing plugins

Now you can install additional plugin in the build. Just follow the [Adding a plugin to an editor tutorial](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/installing-plugins.html#adding-a-plugin-to-an-editor)

### Rebuilding editor

If you have already done the [Installation](#installation) and [Adding or removing plugins](#adding-or-removing-plugins) steps, you're ready to rebuild the editor by running the following command:

```
npm run build
```

This will build the CKEditor 5 to the `build` directory. You can open your browser and you should be able to see the changes you've made in the code. If not, then try to refresh also the browser cache by typing `Ctrl + R` or `Cmd + R` depending on your system.

## What's next?

Follow the guides available on https://ckeditor.com/docs/ckeditor5/latest/framework/index.html and enjoy the document editing.

## usage

```typescript
import Editor from '87-midnight-ckeditor5'

const App = ()=>{
    return 
    (
        <CKEditor
                    editor={ Editor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ (editor:Editor) => {
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event:any, editor:Editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event:any, editor:Editor ) => {
                        console.log( 'Blur.', editor,event );
                    } }
                    onFocus={ ( event:any, editor:Editor ) => {
                        console.log( 'Focus.', editor ,event);
                    } }
                />
    )
}
```

## changelog

### v0.0.4

install math plugin by using @isaul32/ckeditor5-math

see [@isaul32/ckeditor5-math](https://github.com/isaul32/ckeditor5-math) for more details

usage:

```ts
const defaultConfig = {
	// ...
	math: {
		engine: 'mathjax', // or katex or function. E.g. (equation, element, display) => { ... }
		lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
		outputType: 'script', // or span
		className: 'math-tex', // class name to use with span output type, change e.g. MathJax processClass (v2) / processHtmlClass (v3) is set
		forceOutputType: false, // forces output to use outputType
		enablePreview: true, // Enable preview view
		previewClassName: [], // Class names to add to previews
		popupClassName: [], // Class names to add to math popup balloon
		katexRenderOptions: {}  // KaTeX only options for katex.render(ToString)
	}
}
```

## FAQ
| Where is the place to report bugs and feature requests?

You can create an issue on https://github.com/ckeditor/ckeditor5/issues including the build id - `udd234h0crk2-15fqjz4t6i9l`. Make sure that the question / problem is unique, please look for a possibly asked questions in the search box. Duplicates will be closed.

| Where can I learn more about the CKEditor 5 framework?

Here: https://ckeditor.com/docs/ckeditor5/latest/framework/

| Is it possible to use online builder with common frameworks like React, Vue or Angular?

Not yet, but it these integrations will be available at some point in the future.
