import { sleep } from "../../helpers";
import { githubApi } from "../../api";
import { GitHubIssue } from "../interfaces";

export const getIssueComments = async (
  issueNumber: number
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  const { data } = await githubApi.get<GitHubIssue[]>(
    `/issues/${issueNumber}/comments`
  );

  return data;
};
