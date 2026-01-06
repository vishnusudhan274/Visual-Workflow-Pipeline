# VectorShift Frontend Technical Assessment

## Overview
This project implements a visual, node-based pipeline editor inspired by VectorShift’s
workflow builder. The frontend is built using React and React Flow, while a FastAPI
backend is used to analyze pipelines and validate their structure.

Users can construct pipelines by dragging and connecting nodes, define dynamic
variables inside text nodes, and submit the pipeline for backend validation.

---

## Key Design Decisions

### Node Abstraction
- Introduced a reusable `BaseNode` abstraction to separate shared node structure
  (layout, handles, styling) from node-specific logic.
- This approach eliminates code duplication and allows new node types to be added
  with minimal effort.
- Demonstrated extensibility by implementing multiple node types using the same base
  abstraction.

### Maintainability & Scalability
- All nodes follow a consistent design system.
- Styling and behavior changes can be applied globally through `BaseNode`.
- Node creation logic is centralized, making the system easy to extend.

---

## Text Node Enhancements
- Implemented an auto-resizing textarea to improve readability as text grows.
- Added dynamic input handles generated from variables defined using
  `{{variable_name}}` syntax.
- Each detected variable automatically creates a corresponding input handle,
  enabling flexible data flow into text nodes.

---

## Backend Integration
- On submission, the frontend sends the pipeline’s nodes and edges to a FastAPI backend.
- The backend computes:
  - Total number of nodes
  - Total number of edges
  - Whether the pipeline forms a Directed Acyclic Graph (DAG)
- DAG validation is implemented using topological sorting.
- Results are returned to the frontend and displayed to the user via an alert.

---

## Tech Stack
**Frontend**
- React
- React Flow
- JavaScript

**Backend**
- FastAPI
- Python

---

## How to Run the Project

### Frontend
```bash
cd frontend
npm install
npm start
