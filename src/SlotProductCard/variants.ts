import { cva } from "class-variance-authority";
import styles from "./styles.module.css";

export const variants = cva(styles.base, {
  variants: {
    variant: {
      primary: styles.primary,
    },
    size: {
      medium: styles.medium,
    },
  },
  compoundVariants: [{ variant: "primary", size: "medium" }],
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
