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
> Recommended VSC profile to development: https://gist.github.com/stembrino/bafdbadf2f55cf23b884eb73a75615a4

```console
yarn prepare
yarn
yarn sb
```

### Use the prompt `yarn gen` to generate new components 🤖
GitHub: [prompt-component-gen](https://github.com/stembrino/prompt-component-gen)

![gif component generator](https://github.com/stembrino/prompt-component-gen/blob/master/public/sample-script.gif?raw=true)

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
