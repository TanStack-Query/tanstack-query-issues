import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
    staleTime: 60000,
  });

  return { issuesQuery };
};
