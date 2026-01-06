import BaseNode from "./BaseNode";

export default function OutputNode({ data }) {
  return (
    <BaseNode
      title="Output"
      inputs={["in"]}
    >
      <div style={{ fontSize: 14, opacity: 0.8 }}>
        Final Output
      </div>
    </BaseNode>
  );
}
