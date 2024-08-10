import { useQuery } from "@tanstack/react-query";
import { getIssue } from "../actions";

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 60000,
  });

  return { issueQuery };
};
