export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Kannanware Innovations LLP" />
      <meta name="robots" content="index,follow" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;600;700;800&family=Ubuntu+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link rel="canonical" href="https://www.kannanware.com/in" />
      <link rel="icon" href="/assets/static/kw-logo.png" />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.classList.add('hydrated');`,
        }}
      />
    </>
  );
}
