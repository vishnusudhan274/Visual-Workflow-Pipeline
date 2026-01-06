import BaseNode from "./BaseNode";

export default function ConditionNode() {
  return (
    <BaseNode title="Condition" inputs={["value"]} outputs={["true", "false"]}>
      <p>Checks condition</p>
    </BaseNode>
  );
}
