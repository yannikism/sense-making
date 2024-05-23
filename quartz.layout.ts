import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Footer({
      links: {
        "yannikism": "https://yannikism.github.io/",
        "send feedback": "mailto:yannik.m@posteo.de?subject=Feedback&body=I don't understand why ...",
      },
    })
  ],
  footer: Component.Footer({
    links: {
      "yannikism": "https://yannikism.github.io/",
      "send feedback": "mailto:yannik.m@posteo.de?subject=Feedback&body=I don't understand why ...",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.TagList(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
    Component.RecentNotes({
      title: "Recently Edited",
      limit: 5,
      //linkToMore: "wiki", // full slug to a page that exists
    }),
  ],
  right: [
    Component.TableOfContents(),
    Component.Backlinks(),
    Component.Graph(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer(),
  ],
  right: [],
}
