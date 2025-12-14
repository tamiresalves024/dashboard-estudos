import { useState } from "react";
import initialStudies from "./data/studies";
import StudyCard from "./components/StudyCard";

function App() {
  const [studies, setStudies] = useState(initialStudies);
  const [filter, setFilter] = useState("all");


  function markAsCompleted(id) {
    setStudies(
      filteredStudies.map((study) =>
        study.id === id
          ? { ...study, completed: true }
          : study
      )
    );
  }
  const filteredStudies = studies.filter((study) => {
  if (filter === "completed") return study.completed;
  if (filter === "pending") return !study.completed;
  return true;
});
  const completedCount = studies.filter(
  (study) => study.completed
).length;

const pendingCount = studies.filter(
  (study) => !study.completed
).length;
   
  return (
    <div style={styles.page}>
      <h1>Dashboard de Estudos</h1>
      <div style={styles.filters}>
  <button style={filter === "all" ? activeButton : button} onClick={() => setFilter("all")}>
    Todos
  </button>
  <button style={filter === "pending" ? activeButton : button} onClick={() => setFilter("pending")}>
    Pendentes
  </button>
  <button style={filter === "completed" ? activeButton : button} onClick={() => setFilter("completed")}>
    Estudados
  </button>
</div>

      <div style={styles.counters}>
  <span>📘 Pendentes: {pendingCount}</span>
  <span>✅ Estudados: {completedCount}</span>
      </div>


      <ul style={styles.list}>
        {studies.map((study) => (
          <StudyCard
            key={study.id}
            study={study}
            onComplete={markAsCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

const styles = {
  page: {
    padding: "60px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    fontFamily: "'Nunito', sans-serif",
  },

  filters: {
    display: "flex",
    gap: "12px",
    marginTop: "24px",
    flexWrap: "wrap",
  },

  counters: {
    marginTop: "16px",
    display: "flex",
    gap: "20px",
    fontWeight: "600",
    color: "#4b2e21",
  },

  list: {
    marginTop: "32px",
    padding: 0,
    listStyle: "none",
  },
  
};
const button = {
  padding: "8px 16px",
  borderRadius: "8px",
  border: "1px solid #d9b79a",
  backgroundColor: "transparent",
  cursor: "pointer",
  fontWeight: "600",
};

const activeButton = {
  ...button,
  backgroundColor: "#d9b79a",
};

export default App;
