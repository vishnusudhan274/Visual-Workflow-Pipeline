import { useStore } from "./store";

export function SubmitButton() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    console.log("SUBMIT CLICKED");
    console.log("Nodes:", nodes);
    console.log("Edges:", edges);

    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", 
 {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const data = await response.json();
      console.log("Backend response:", data);

      alert(
        `Pipeline Analysis
Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag}`
      );
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Submit failed. Check console.");
    }
  };

  return <button onClick={handleSubmit}>Submit</button>;
}
