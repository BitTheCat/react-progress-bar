export default function ProgressBar(props) {
  return (
    <div>
    <h1>Progress Bar</h1>
    <div style={{ width: "100%", backgroundColor: "#e0e0e0", borderRadius: "12px" }}>
        <div
        style={{
            width: `${props.progress}%`,
            backgroundColor: "#ff5733",
            height: "24px",
            borderRadius: "12px",
        }}
        ></div>
    </div>
    <p>{props.progress}% Complete</p>
    </div>
  );
}