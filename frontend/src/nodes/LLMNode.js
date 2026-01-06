import BaseNode from "./BaseNode";

export default function LLMNode({ data }) {
  return (
    <BaseNode
      title="LLM"
      inputs={["in"]}
      outputs={["out"]}
    >
      <div style={{ color: "#555" }}>
        LLM Processing
      </div>
    </BaseNode>
  );
}
