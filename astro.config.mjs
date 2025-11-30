// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightAutoSidebar from "starlight-auto-sidebar";
import starlightContextualMenu from "starlight-contextual-menu";
import starlightHeadingBadges from "starlight-heading-badges";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "CppDoc",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/cppdoc-cc/cppdoc",
        },
      ],
      sidebar: [
        {
          label: "C++ Language Reference",
          autogenerate: { directory: "cpp/language" },
        },
        {
          label: "C++ Library Reference",
          autogenerate: { directory: "cpp/library" },
        },
        {
          label: "C Language Reference",
          autogenerate: { directory: "c/language" },
        },
        {
          label: "C Library Reference",
          autogenerate: { directory: "c/library" },
        },
        {
          label: "CppDoc Development Guide",
          autogenerate: { directory: "development" },
        },
      ],
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
      },
      components: {
        TableOfContents: "./src/components/starlight/TableOfContents.astro",
      },
      plugins: [
        starlightAutoSidebar(),
        starlightContextualMenu({
          actions: ["chatgpt", "claude", "grok"],
        }),
        starlightHeadingBadges(),
        starlightUtils({
          multiSidebar: {
            switcherStyle: "dropdown",
          },
        }),
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
