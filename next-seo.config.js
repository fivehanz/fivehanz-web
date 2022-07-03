/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "fivehanz",
  titleTemplate: "%s | fivehanz",
  defaultTitle: "fivehanz",
  description: "TBD",
  canonical: "https://fivehanz.xyz",
  openGraph: {
    url: "https://fivehanz.xyz",
    title: "fivehanz",
    description: "TBD",
    // images: [
    //   {
    //     url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
    //     alt: "nextarter-chakra.sznm.dev og-image",
    //   },
    // ],
    site_name: "fivehanz",
  },
  twitter: {
    handle: "@fivehanz",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
