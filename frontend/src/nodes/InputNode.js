import BaseNode from "./BaseNode";

export default function InputNode({ data }) {
  return (
    <BaseNode
      title="Input"
      outputs={["out"]}
    >
      <div style={{ fontSize: 14, opacity: 0.8 }}>
        Input Source
      </div>
    </BaseNode>
  );
}
