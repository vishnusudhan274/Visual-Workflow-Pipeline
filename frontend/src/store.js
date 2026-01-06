import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],

  getNodeID: (type) => `${type}_${+new Date()}`,

  addNode: (node) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),

  onNodesChange: (changes) =>
    set((state) => ({
      nodes: applyNodeChanges(changes, state.nodes),
    })),

  onEdgesChange: (changes) =>
    set((state) => ({
      edges: applyEdgeChanges(changes, state.edges),
    })),

  // 🔑 THIS IS THE MOST IMPORTANT PART
  onConnect: (connection) =>
    set((state) => ({
      edges: addEdge(connection, state.edges),
    })),
}));
