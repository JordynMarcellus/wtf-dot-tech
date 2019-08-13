const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://learn.hasura.io",
    gaTrackingId: null,
  },
  header: {
    logo:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    logoLink: "https://learn.hasura.io",
    title: "WTF.tech",
    githubUrl: "https://github.com/hasura/gatsby-gitbook-boilerplate",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
  },
  sidebar: {
    forcedNavOrder: ["/introduction", "/codeblock"],
    links: [{ text: "WTF?", link: "/" }],
    frontline: false,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: "WTF? Technology buzzword buster",
    description:
      "A place for busting technology buzzwords. Editable by you on Github!",
    ogImage: null,
    docsLocation:
      "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg",
  },
};

module.exports = config;
