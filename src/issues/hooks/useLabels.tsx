import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
// import { GitHubLabel } from "../interfaces/label.interface";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
  };
};
