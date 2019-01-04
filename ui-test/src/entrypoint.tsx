/**
 * UI test entrypoint
 */

/** @jsx jsx */

import { Global, jsx } from "@emotion/core";
import { configure } from "mobx";
import { Provider } from "mobx-react";
import * as ReactDOM from "react-dom";
import ErrorBoundary from "react-error-boundary";
import { MobxThemeProvider } from "./MobxThemeProvider"; // mobx-emotion-theme-provider

import { cssReset, fillScreenFlexReset, fillScreenReset, systemFontReset } from "@service-ui/mixins";

import { StrictMode } from "react";
import App from "./app";
import { SampleTheme } from "./theme";

const theme = new SampleTheme();

configure({
  enforceActions: "always",
});

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <Provider theme={theme}>
        <MobxThemeProvider>
          <Global styles={cssReset} />
          <Global styles={fillScreenReset()} />
          <Global styles={fillScreenFlexReset()} />
          <Global styles={systemFontReset()} />
          <Global styles={theme.global} />
          <App />
        </MobxThemeProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById("root"),
);
