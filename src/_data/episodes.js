module.exports = async () => {
  return [];
}

/*
require("dotenv").config();
const sanityClient = require("@sanity/client");

const projectId = process.env.SANITY_PROJECT;
const dataset = process.env.SANITY_DATASET;
const token = process.env.SANITY_TOKEN;

console.log({ projectId, dataset, token, useCdn: true });

const client = sanityClient({ projectId, dataset, token });

module.exports = async () => {
  const query = `
    *[ _type == "episode" && !(_id in path("drafts.**")) ]{
      title,
      number,
      embed,
      publishedAt,
      body,
    } | order(number asc)
  `;

  const params = {};

  const episodes = await client.fetch(query, params);

  episodes.forEach((episode) => {
    const date = new Date(episode.publishedAt);

    episode.date = date;
    episode.path = `episode-${episode.number}`;
  });

  return episodes;
};
*/
