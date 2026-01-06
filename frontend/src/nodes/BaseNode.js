import { Handle, Position } from "reactflow";

export default function BaseNode({
  title,
  inputs = [],
  outputs = [],
  children,
}) {
  return (
    <div
      style={{
        position: "relative",
        padding: "16px",
        borderRadius: "14px",
        background: "#ffffff",
        minWidth: "240px",
        border: "1px solid #dbeafe",
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: 600,
          fontSize: "16px",
          marginBottom: "12px",
          color: "#1e3a8a",
        }}
      >
        {title}
      </div>

      {/* Body */}
      <div style={{ fontSize: "14px", color: "#374151" }}>
        {children}
      </div>

      {/* Input handles */}
      {inputs.map((id, index) => (
        <Handle
          key={id}
          id={id}
          type="target"
          position={Position.Left}
          style={{
            top: 50 + index * 22,
            background: "#2563eb",
            width: 10,
            height: 10,
          }}
        />
      ))}

      {/* Output handles */}
      {outputs.map((id, index) => (
        <Handle
          key={id}
          id={id}
          type="source"
          position={Position.Right}
          style={{
            top: 50 + index * 22,
            background: "#2563eb",
            width: 10,
            height: 10,
          }}
        />
      ))}
    </div>
  );
}
