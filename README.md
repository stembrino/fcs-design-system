# Slot Design System

## Components Documentation 📰
https://stembrino.github.io/slot-design-system/

## Start develop 🚀
> Recommended VSC extensions: https://github.com/stembrino/save-docs-fcs/blob/master/docs/vsc.md

```console
yarn prepare
yarn
yarn sb
```

# Rules

## External library
Avoid use external library. use just if really needed. This library.
## Component Structure

```
/src
  /[YourComponentName]
    /_storybook/[YourComponentName].stories.tsx
    /_storybook/[YourComponentName].stories.mdx
    /_test/[YourComponentName].test.tsx
    [YourComponentName].tsx
    [YourComponentName].stories.tsx
    [YourComponentName].types.ts
    [YourComponentName].css
    helper.ts // Not required
    index.ts
```

> Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

## Accessibility
- Use ARIA: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA

- Include keyboard navigation.
- Add a visible state of focus.
  - https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
  - https://developer.mozilla.org/pt-BR/docs/Web/CSS/:focus-within

## Unit Tests
❗Everything core component parts should be tested, avoiding unnecessary tests.

- **Snapshot Test**: required only if you are using another component inside your component. If not, do not snapshot tests. Use the `container` to do it: 
```ts
const { container } = renderComponent();

expect(screen).toBeInTheDocument();
```

- Try coverage all state of the component with relevant actions unit tests.
