import { useEffect, useState } from "react";
import { Image } from "react-native";
import { WebView } from "react-native-webview";

export default function WebviewComponent({ children }: { children: number }) {
  const [htmlContent, setSetHtmlContent] = useState("");

  useEffect(() => {
    (async () => {
      setSetHtmlContent(
        await (await fetch(Image.resolveAssetSource(children).uri)).text()
      );
    })();
  }, [children]);

  return (
    <WebView
      onLoadStart={() => true}
      source={{
        html: htmlContent,
      }}
    />
  );
}
