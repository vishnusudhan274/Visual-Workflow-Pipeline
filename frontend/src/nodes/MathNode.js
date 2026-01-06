import BaseNode from "./BaseNode";

export default function MathNode() {
  return (
    <BaseNode title="Math" inputs={["a", "b"]} outputs={["result"]}>
      <p>Adds numbers</p>
    </BaseNode>
  );
}
