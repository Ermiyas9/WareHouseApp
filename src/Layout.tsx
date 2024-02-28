import React from "react";

const Layout: React.FC = (
  {
    /* children */
  }
) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <header
        style={{
          backgroundColor: "#001f3f",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1>Header</h1>
      </header>
      <main style={{ flex: 1, padding: "20px" }}>{/* children */}</main>
      <footer
        style={{
          backgroundColor: "#001f3f",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
