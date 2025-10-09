const defaults = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
};

export const CONFIG = {
  ...defaults,
};

// Places

// 1. gh trending page
// 2. discord coss community
// 3. YC opensource startups
// 4. Algora.io

export const projectsOfTheWeek = [
  {
    id: "1",
    name: "Opensox AI",
    description: "Find the perfect open source project to contribute",
    url: "https://github.com/apsinghdev/opensox",
    avatarUrl: "https://avatars.githubusercontent.com/u/109718740?s=48&v=4",
    totalIssueCount: 13,
    primaryLanguage: "Typescript",
    popularity: "Higher",
    stage: "Early",
    competition: "Low",
    activity: "Highest",
  },
  {
    id: "2",
    name: "awesome-sass",
    description:
      "Collection of templates using the Alchemyst AI Platform for your next big AI app.",
    url: "https://github.com/nocodb/nocodb",
    avatarUrl: "https://avatars.githubusercontent.com/u/155486959?s=48&v=4",
    totalIssueCount: 22,
    primaryLanguage: "Typescript",
    popularity: "Highest",
    stage: "Established",
    competition: "High",
    activity: "Highest",
  },
  {
    id: "3",
    name: "openchangelog",
    description: "Easy to configure & self hostable Changelog Website",
    url: "https://github.com/jonashiltl/openchangelog",
    avatarUrl: "https://avatars.githubusercontent.com/u/71456708?s=48&v=4",
    totalIssueCount: 4,
    primaryLanguage: "Go",
    popularity: "Lowest",
    stage: "Very early",
    competition: "Very low",
    activity: "Normal",
  },
  {
    id: "4",
    name: "unsend",
    description: "Open source alternative to Resend,Sendgrid, Postmark etc.",
    url: "https://github.com/unsend-dev/unsend",
    avatarUrl: "https://avatars.githubusercontent.com/u/165773289?s=48&v=4",
    totalIssueCount: 11,
    primaryLanguage: "Typescript",
    popularity: "Very low",
    stage: "Very early",
    competition: "Very low",
    activity: "High",
  },
  {
    id: "5",
    name: "middleware",
    description:
      "✨ Open-source DORA metrics platform for engineering teams ✨",
    url: "https://github.com/middlewarehq/middleware",
    avatarUrl: "https://avatars.githubusercontent.com/u/99589860?s=48&v=4",
    totalIssueCount: 26,
    primaryLanguage: "Typescript",
    popularity: "Low",
    stage: "Very early",
    competition: "Very low",
    activity: "Low",
  },
  {
    id: "6",
    name: "nativelink",
    description:
      "NativeLink is an open source high-performance build cache and remote execution server, compatible with Bazel, Buck2, Reclient, and other RBE-compatible build systems. It offers drastically faster builds, reduced test flakiness, and specialized hardware.",
    url: "https://github.com/TraceMachina/nativelink",
    avatarUrl: "https://avatars.githubusercontent.com/u/144973251?s=48&v=4",
    totalIssueCount: 81,
    primaryLanguage: "Rust",
    popularity: "Lowest",
    stage: "Early",
    competition: "Very low",
    activity: "Highest",
  },
  {
    id: "7",
    name: "bolt.new",
    description: "Prompt, run, edit, and deploy full-stack web applications",
    url: "https://github.com/stackblitz/bolt.new",
    avatarUrl: "https://avatars.githubusercontent.com/u/28635252?s=200&v=4",
    totalIssueCount: 2500,
    primaryLanguage: "Typescript",
    popularity: "Highest",
    stage: "Emerging",
    competition: "High",
    activity: "High",
  },
  {
    id: "8",
    name: "hatchet",
    description: "A distributed, fault-tolerant task queue",
    url: "https://github.com/hatchet-dev/hatchet",
    avatarUrl: "https://avatars.githubusercontent.com/u/118301880?s=48&v=4",
    totalIssueCount: 25,
    primaryLanguage: "Go",
    popularity: "Moderate",
    stage: "Emerging",
    competition: "Very low",
    activity: "Highest",
  },
  {
    id: "9",
    name: "evidently",
    description:
      "Evidently is ​an open-source ML and LLM observability framework. Evaluate, test, and monitor any AI-powered system or data pipeline. From tabular data to Gen AI. 100+ metrics.",
    url: "https://github.com/evidentlyai/evidently",
    avatarUrl: "https://avatars.githubusercontent.com/u/75031056?s=48&v=4",
    totalIssueCount: 179,
    primaryLanguage: "Python",
    popularity: "Moderate",
    stage: "Early",
    competition: "Low",
    activity: "Highest",
  },
  {
    id: "10",
    name: "golem",
    description:
      "Golem is an open source durable computing platform that makes it easy to build and deploy highly reliable distributed systems.",
    url: "https://github.com/golemcloud/golem",
    avatarUrl: "https://avatars.githubusercontent.com/u/133607167?s=48&v=4",
    totalIssueCount: 120,
    primaryLanguage: "Rust",
    popularity: "Very low",
    stage: "Very early",
    competition: "Very low",
    activity: "Highest",
  },
];
