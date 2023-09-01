export const gitFetchDataF = async <T>(
  owner: string,
  repo: string,
  path: string
): Promise<T | null> => {
  interface Content {
    content: string;
    sha: string;
  }
  let data = await $fetch<Content>(
    `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
  );

  let data2 = await $fetch<Content>(
    `https://api.github.com/repos/${owner}/${repo}/git/blobs/${data.sha}`
  );
  if (data2.content) {
    let data3 = JSON.parse(atob(data2.content)) as T;

    return data3;
  }
  return null;
};
