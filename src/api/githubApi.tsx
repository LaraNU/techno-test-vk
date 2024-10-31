export type Repositories = {
  id: number;
  name: string;
  description: string;
  owner: {
    avatar_url: string;
  };
};

const getRepositories = async (page: string) => {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=javascript&sort=stars&order=desc&page=${page}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  const data = await response.json();
  return data.items;
};

export default getRepositories;
