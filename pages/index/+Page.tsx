import mainHtml from "../../content/sections/main.html?raw";
import footerHtml from "../../content/sections/footer.html?raw";

export default function Page() {
  return (
    <main id="main-content" className="kw-site-content">
      <div dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <div dangerouslySetInnerHTML={{ __html: footerHtml }} />
    </main>
  );
}
