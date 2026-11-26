import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Secure by Design",
    pageTitleSuffix: " | PRO203",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "gvargas139.github.io/Secure-by-Design",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#F8F7FC",
          lightgray: "#E2DDEF",
          gray: "#A39AB5",
          darkgray: "#303044",
          dark: "#171729",
          secondary: "#7C3AED",
          tertiary: "#DB2777",
          highlight: "rgba(139, 92, 246, 0.12)",
          textHighlight: "#DDD6FE"
        },
        darkMode: {
          light: "#0D1017",
          lightgray: "#252536",
          gray: "#716985",
          darkgray: "#D8D8E8",
          dark: "#F5F3FF",
          secondary: "#A78BFA",
          tertiary: "#EC4899",
          highlight: "rgba(139, 92, 246, 0.16)",
          textHighlight: "#4C1D95"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
