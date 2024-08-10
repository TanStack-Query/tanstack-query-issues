import { FC } from "react";
import { GitHubIssue, State } from "../interfaces";
import { IssueItem } from "./IssueItem";

interface Props {
  issues: GitHubIssue[];
  state: State;
  onChangeState: (state: State) => void;
}

export const IssueList: FC<Props> = ({ issues, onChangeState, state }) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => onChangeState(State.All)}
          className={`btn ${state === State.All ? "active" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => onChangeState(State.Open)}
          className={`btn ${state === State.Open ? "active" : ""}`}
        >
          Open
        </button>
        <button
          onClick={() => onChangeState(State.Close)}
          className={`btn ${state === State.Close ? "active" : ""}`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </>
  );
};
