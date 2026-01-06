// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

import InputNode from "./nodes/InputNode";
import OutputNode from "./nodes/OutputNode";
import LLMNode from "./nodes/LLMNode";
import TextNode from "./nodes/TextNode";

import MathNode from "./nodes/MathNode";
import DelayNode from "./nodes/DelayNode";
import LoggerNode from "./nodes/LoggerNode";
import ConditionNode from "./nodes/ConditionNode";
import TransformNode from "./nodes/TransformNode";

import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: type };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      const data = event.dataTransfer.getData("application/reactflow");
      if (!data) return;

      const appData = JSON.parse(data);
      const type = appData.nodeType;
      if (!type) return;

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);

      addNode({
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      });
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div ref={reactFlowWrapper} style={{ width: "100vw", height: "70vh" }}>
      <ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  nodesConnectable={true}     
  elementsSelectable={true}
  onDrop={onDrop}
  onDragOver={onDragOver}
  onInit={setReactFlowInstance}
  nodeTypes={nodeTypes}
  proOptions={proOptions}
  snapGrid={[gridSize, gridSize]}
  connectionLineType="smoothstep"
  defaultEdgeOptions={{
  style: {
    stroke: "#2563eb",      
    strokeWidth: 2.5,
  },
}}

connectionLineStyle={{
  stroke: "#2563eb",
  strokeWidth: 2.5,
}}

>

        <Background color="#aaa" gap={gridSize} />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};
