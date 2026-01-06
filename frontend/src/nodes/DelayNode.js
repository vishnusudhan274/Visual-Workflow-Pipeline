import BaseNode from "./BaseNode";

export default function DelayNode() {
  return (
    <BaseNode title="Delay" inputs={["input"]} outputs={["output"]}>
      <p>Delays data</p>
    </BaseNode>
  );
}
