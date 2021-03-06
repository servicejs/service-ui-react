/**
 * Video
 */

import { StyledComponent } from "@emotion/styled";

import { augment } from "@service-ui/mixins/util/augment";
import PropsType from "@service-ui/mixins/util/PropsType";

import Box from "../Box";

const Video = augment({
  component: Box,
  defaultProps: {
    as: "video",
  },
  displayName: "Video",
}) as StyledComponent<PropsType<"video"> & Box.Props, {}, any>;

namespace Video {
  export type Props = PropsType<"video">;
}

export default Video;
