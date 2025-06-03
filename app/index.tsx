import WebviewComponent from "@/components/webview-components";
import { htmlToWebviewWithMotionHmr } from "@/static/html-to-webview-with-motion-hmr";

import React from "react";

export default function Index() {
  return <WebviewComponent>{htmlToWebviewWithMotionHmr}</WebviewComponent>;
}
