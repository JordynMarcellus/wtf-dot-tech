const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://wtf-techsplainer.io",
    gaTrackingId: null,
  },
  header: {
    logo:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    logoLink: "https://wtf-techsplainer.io",
    title: "WTF.tech",
    githubUrl: "https://github.com/JordynMarcellus/wtf-dot-tech",
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
      "https://github.com/JordynMarcellus/wtf-dot-tech/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg",
  },
};

module.exports = config;
