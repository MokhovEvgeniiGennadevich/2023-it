import WYSIWYG from "@/components/editorjs/editorjs";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@editorjs/editorjs"), {
  ssr: false,
  loading: <p>loading...</p>,
});

const VersionPage = () => {
  return (
    <main>
      <h1>Версия приложения</h1>
      <WYSIWYG />
    </main>
  );
};

export default VersionPage;
