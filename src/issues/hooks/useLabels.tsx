import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
// import { GitHubLabel } from "../interfaces/label.interface";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    // placeholderData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    //   {
    //     id: 1155972012,
    //     node_id: "MDU6TGFiZWwxMTU1OTcyMDEy",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler",
    //     name: "Component: Scheduler",
    //     color: "9de8f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    // ],
    // initialData: [
    //   {
    //     id: 739777675,
    //     node_id: "MDU6TGFiZWw3Mzk3Nzc2NzU=",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Component%20API",
    //     name: "Component: Component API",
    //     color: "d4c5f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    //   {
    //     id: 1155972012,
    //     node_id: "MDU6TGFiZWwxMTU1OTcyMDEy",
    //     url: "https://api.github.com/repos/facebook/react/labels/Component:%20Scheduler",
    //     name: "Component: Scheduler",
    //     color: "9de8f9",
    //     default: false,
    //   } satisfies GitHubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
