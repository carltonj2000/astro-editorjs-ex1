import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export default function Editor() {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();

        console.log(content);
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);
  // just a commend to refresh by deleting and adding
  return (
    <div id="editorjs" className="border border-gray-200 shadow mt-2"></div>
  );
}
