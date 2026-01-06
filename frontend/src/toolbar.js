export function PipelineToolbar() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify({ nodeType })
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        padding: 12,
      }}
    >
      <button
        onDragStart={(e) => onDragStart(e, "customInput")}
        draggable
      >
        Input
      </button>

      <button
        onDragStart={(e) => onDragStart(e, "llm")}
        draggable
      >
        LLM
      </button>

      <button
        onDragStart={(e) => onDragStart(e, "customOutput")}
        draggable
      >
        Output
      </button>

      <button
        onDragStart={(e) => onDragStart(e, "text")}
        draggable
      >
        Text
      </button>
    </div>
  );
}
