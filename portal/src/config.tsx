import { lazy } from "react";
import { makeComponent, LazyImportedTypes } from "./utils/makeComponent";

// Components
const Spacing = lazy(() => import("@rikstv/shared-components/src/components/core/spacing.mdx"));
const Colors = lazy(() => import("@rikstv/shared-components/src/components/core/colors.mdx"));
const Button = lazy(() => import("@rikstv/shared-components/src/components/button/button.mdx"));
const IconButton = lazy(() => import("@rikstv/shared-components/src/components/button/iconButton.mdx"));
const Typography = lazy(() => import("@rikstv/shared-components/src/components/typography/typography.mdx"));

// Types
const buttonType: LazyImportedTypes = import("../../../shared-components/src/components/button/Button?type");
const iconButtonType: LazyImportedTypes = import("../../../shared-components/src/components/button/IconButton?type");
const typographyType: LazyImportedTypes = import(
  "../../../shared-components/src/components/typography/Typography?type"
);

export const components = [
  makeComponent("button", Button, buttonType),
  makeComponent("icon button", IconButton, iconButtonType),
  makeComponent("spacing", Spacing),
  makeComponent("colors", Colors),
  makeComponent("typografi", Typography, typographyType),
].sort((a, b) => a.displayName.localeCompare(b.displayName));