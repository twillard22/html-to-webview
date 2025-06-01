import { WebView } from "react-native-webview";

export default function WebviewComponent({ children }: { children: string }) {
  return (
    <WebView
      onShouldStartLoadWithRequest={() => false}
      source={{
        html: children,
      }}
    />
  );
}
