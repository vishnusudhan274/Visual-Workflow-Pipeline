import BaseNode from "./BaseNode";

export default function LoggerNode() {
  return (
    <BaseNode title="Logger" inputs={["input"]}>
      <p>Logs input</p>
    </BaseNode>
  );
}
