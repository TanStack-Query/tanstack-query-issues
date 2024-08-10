import { sleep } from "../../helpers";
import { githubApi } from "../../api";
import { GitHubIssue } from "../interfaces";

export const getIssues = async (): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GitHubIssue[]>("/issues");

  return data;
};
