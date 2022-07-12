import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "0ghmdpur",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skUdHyWliJ9OM8OFM0eYvkqBsCHkbNdoWf6VQYVJvoqy5l3LHl26w66MzTiZMu1ZzoVpOJFJXnq4pu1QzIIDTmElpKjSZoL0A1lQdRmlvebUx0DSPQpeHaTqrSwOwOSO7Nja6tAC0zNQ8zWRBvNtH2GBdGmLxEw9LWVp6UJA9vTqqC9TsP4g",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
