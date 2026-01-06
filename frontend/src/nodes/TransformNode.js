import BaseNode from "./BaseNode";

export default function TransformNode() {
  return (
    <BaseNode title="Transform" inputs={["input"]} outputs={["output"]}>
      <p>Transforms data</p>
    </BaseNode>
  );
}
