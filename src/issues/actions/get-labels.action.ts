import { sleep } from "../../helpers";
import { githubApi } from "../../api";
import { GitHubLabel } from "../interfaces";

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GitHubLabel[]>("/labels");

  console.log(data);

  return data;
};
