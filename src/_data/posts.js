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
    *[ _type == "post" && !(_id in path("drafts.**")) ]{
      title,
      slug { current },
      publishedAt,
      body,
    } | order(publishedAt desc)
  `;

  const params = {};

  const posts = await client.fetch(query, params);

  posts.forEach((post) => {
    const date = new Date(post.publishedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    post.date = date;
    post.path = `${year}/${month < 10 ? `0${month}` : month}/${
      day < 10 ? `0${day}` : day
    }-${post.slug.current}`;
  });

  return posts;
};
*/
