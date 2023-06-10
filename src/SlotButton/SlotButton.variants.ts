import { cva } from "class-variance-authority";
import styles from "./SlotButton.module.css";

export const variants = cva(styles.base, {
  variants: {
    theme: {
      primary: styles.primary,
      secondary: styles.secondary,
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large,
    },
  },
  compoundVariants: [{ theme: "primary", size: "medium", className: styles.primaryMedium }],
  defaultVariants: {
    theme: "primary",
    size: "medium",
  },
});
