import WebviewComponent from "@/components/webview-components";

import React from "react";
import html from "../static/test.html";

export default function Index() {
  return <WebviewComponent>{html}</WebviewComponent>;
}
