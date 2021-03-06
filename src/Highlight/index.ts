/**
 * Highlight
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Highlight = augment({
  component: Text,
  defaultProps: { as: "mark" },
  displayName: "Highlight",
}) as StyledComponent<PropsType<"mark"> & Box.Props, {}, any>;

export namespace Highlight {
  export type Props = PropsType<typeof Highlight>;
}

export default Highlight;
