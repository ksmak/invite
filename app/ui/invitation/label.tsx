import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Label({ content }: { content: string | undefined }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false,
  });

  return <EditorContent editor={editor} />;
}
