function StudyCard({ study, onComplete }) {
  return (
    <li style={styles.item}>
      <strong>{study.subject}</strong>
      <p>{study.description}</p>

      <span>
        Status: {study.completed ? "Estudado ✅" : "Pendente ⏳"}
      </span>

      {!study.completed && (
        <button
          style={styles.button}
          onClick={() => onComplete(study.id)}
        >
          Marcar como estudado
        </button>
      )}
    </li>
  );
}

const styles = {
  item: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "16px",
    marginBottom: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  button: {
    marginTop: "10px",
    alignSelf: "flex-start",
    padding: "8px 18px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#d9b79a",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default StudyCard;
