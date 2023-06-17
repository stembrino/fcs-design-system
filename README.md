# FCS Design System
### fcs-design-system

🔗 Documentation page: https://stembrino.github.io/fcs-design-system

You can install the [package](https://www.npmjs.com/package/fcs-design-system) via npm:

```console
npm i fcs-design-system
```
```console
yarn add fcs-design-system
```

---
## Start develop
> Recommended VSC extensions: https://github.com/stembrino/save-docs-fcs/blob/master/docs/vsc.md

```console
yarn prepare
yarn
yarn sb
```

❗To generate a new component use `yarn gen:sb` or `yarn gen` commands:

To generate the first level use the `yarn gen:sb <Component Name> <Optional: Has Variant>`, for example:

```console
yarn gen:sb <Component Name> <Optional: Has Variant>
```
Example to generate a new component:
```console
yarn gen MyComponent true
```
> This will generate a new component inside the src directory with the proper structure using variants file.

To generate child component use the path:

`yarn gen <Component Name> false <Parent Component Name>`

Example:
```console
yarn gen ChildComponent false MyComponent
```
To next level:
```console
yarn gen NextChildComponent false MyComponent/ChildComponent
```
---
## Rules 👩‍⚖️
- Mobile first.
- Prioritize stateless over stateful components.
- Do not "hadouken 🥦" the functions.
- Complex functions must have unit tests.
- Ue [Figma community](https://www.figma.com/community/) to create a component.

### External library
Avoid use external library. use just if really needed. This library.

> Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Accessibility
- Use ARIA: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

- Include keyboard navigation.
- Add a visible state of focus.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
  - https://developer.mozilla.org/pt-BR/docs/Web/CSS/:focus-within

### Unit Tests
❗Everything core component parts should be tested, avoiding unnecessary tests.

- Try coverage all state of the component with relevant actions unit tests.
