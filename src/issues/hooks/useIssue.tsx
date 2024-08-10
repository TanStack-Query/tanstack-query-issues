import { useQuery } from "@tanstack/react-query";
import { getIssue, getIssueComments } from "../actions";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 60000,
  });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueNumber, "comments"],
    queryFn: () => getIssueComments(issueNumber),
    staleTime: 60000,
  });

  return { issueQuery, commentsQuery };
};
