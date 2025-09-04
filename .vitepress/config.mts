import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import bracketed_spans_plugin from "markdown-it-bracketed-spans"
import container_plugin from "markdown-it-container"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Flowstom",
  description:
    "A fork of Minestom aimed at simplifying the process of adding custom server-side content. ",
  markdown: {
    breaks: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
      md.use(bracketed_spans_plugin)
      md.use(container_plugin, 'alert', {
        render(tokens, idx) {
          const token = tokens[idx]
          const type = token.info.trim().split(' ')[1] || 'info'
          if (token.nesting === 1) {
            return `<div class="alert alert-${type}">
                      <div class="alert-header">${type.toUpperCase()}</div>
                        <div class="alert-content">\n`
          } else {
            return `</div></div>\n`
          }
        }
      })
    }
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "theme-color", content: "#d332ff" }],
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local"
    },
    logo: "/flowstom-logo.png",
    nav: [
      { text: "Docs", link: "/docs/getting-started" },
      { text: "Javadoc", link: "https://javadoc.flowstom.net" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "Getting Started",
          link: "/docs/getting-started",
        },
        {
          text: "Project Setup",
          link: "/docs/project-setup"
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Flowstom/Flowstom",
      },
      {
        icon: "discord",
        link: "https://discord.gg/ytFkQ7SjGw",
      },
    ],
  },
});
