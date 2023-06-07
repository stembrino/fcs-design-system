# Slot Design System

## Components Documentation 📰
https://stembrino.github.io/slot-design-system/

## Start develop 🚀

```console
yarn prepare
yarn
yarn sb
```

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
    index.ts
```

> Don't forget to add the component to your `index.ts` exports if you want the library to export the component!
