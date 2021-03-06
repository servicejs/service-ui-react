/**
 * Paragraph
 */

import { StyledComponent } from "@emotion/styled";

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Box from "../Box";
import Text from "../Text";

const Paragraph = augment({
  component: Text.Block,
  defaultProps: { as: "p" },
  displayName: "Paragraph",
}) as StyledComponent<PropsType<"p"> & Box.Props, {}, any>;

namespace Paragraph {
  export type Props = PropsType<typeof Paragraph>;
}

export default Paragraph;
