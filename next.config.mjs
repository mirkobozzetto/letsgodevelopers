import createMDX from "@next/mdx";
import remarkPrism from "remark-prism";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkPrism],
  },
});

export default withMDX({
  pageExtensions: ["js", "jsx", "tsx", "mdx"],
  ...nextConfig,
});
