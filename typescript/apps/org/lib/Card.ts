interface CardNode extends jcr {
  image: {
    src: string;
    alt: string;
  };
  body: string;
  url: {
    type: "internal" | "external" | "modal" | "phone";
    text: string;
    href: string;
  };
}

use(["/apps/org/lib/Config.js"], (Config: Config) => {
  let jcr: CardNode = granite.resource.properties;

  jcr = JSON.parse(JSON.stringify(jcr, Config.replacer));

  const { image, body, url } = jcr;

  let cta = "";

  switch (url.type) {
    case "external":
      cta = `<a href="${url.href}" target="_blank" rel="noopener noreferer">${url.text}</a>`;
      break;
    case "modal":
      cta = `<a data-target="${url.href}" data-toggle="modal">${url.text}</a>`;
      break;
    case "phone":
      cta = `<a href="tel:${url.href}">${url.text}</a>`;
      break;
    case "internal":
    default:
      cta = `<a href="${url.href}" target="_self">${url.text}</a>`;
      break;
  }

  const img = `<img src="${image.src}" alt="${image.alt || ""}" />`;

  const bodyText = `<span lang="${Config.locale}">${body}</span>`;

  return {
    cta,
    img,
    bodyText,
  };
});
