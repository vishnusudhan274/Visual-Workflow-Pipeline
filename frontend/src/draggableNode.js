export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    const appData = { nodeType: type };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={onDragStart}
      draggable
      style={{
        cursor: "grab",
        width: "100px",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        backgroundColor: "#1C2536",
        color: "#fff",
        fontWeight: 500,
        userSelect: "none",
      }}
    >
      {label}
    </div>
  );
};
