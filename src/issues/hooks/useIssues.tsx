import { useQuery } from "@tanstack/react-query";
import { getIssues } from "../actions";
import { State } from "../interfaces";
import { useEffect, useState } from "react";

interface Props {
  state: State;
  selectedLabels: string[];
}

export const useIssues = ({ state, selectedLabels }: Props) => {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ["issues", { state, selectedLabels, page }],
    queryFn: () => getIssues(state, selectedLabels, page),
    staleTime: 60000,
  });

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabels]);

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) {
      return;
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage((prevPage) => prevPage - 1);
  };

  return {
    issuesQuery,
    nextPage,
    prevPage,
    page,
  };
};
