/**
 * Absolute fill container
 */

import augment from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";
import Absolute from "../Absolute";

const AbsoluteFill = augment<typeof Absolute, {}>({
  component: Absolute,
  displayName: "AbsoluteFill",
  mixin: {
    height: "100%",
    left: 0,
    top: 0,
    width: "100%",
  },
});

namespace AbsoluteFill {
  export type Props = PropsType<typeof AbsoluteFill>;
}

export default AbsoluteFill;
