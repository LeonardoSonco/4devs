export default function Logo({ size }) {
  const logoStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 700,
    fontSize: "22px",
    color: "#1d8fbd",
    letterSpacing: "3px",
  };

  const spanStyle = {
    fontSize: "20px",
    fontWeight: 900,
  };

  if (size) {
    logoStyle.fontSize = "40px";
    spanStyle.fontSize = "38px";
  }

  return (
    <h1 style={logoStyle}>
      <span style={spanStyle}>{"</>"}</span>4Devs
    </h1>
  );
}
