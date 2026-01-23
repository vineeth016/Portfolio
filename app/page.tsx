export default function Home() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px", fontFamily: "system-ui" }}>
      <section style={{ display: "grid", gap: 12 }}>
        <h1 style={{ fontSize: 44, margin: 0, lineHeight: 1.05 }}>Vinny — Java Backend Engineer</h1>

        <p style={{ fontSize: 18, color: "#444", margin: 0, maxWidth: 760 }}>
          I build scalable backend services using <b>Java + Spring Boot</b>, focused on{" "}
          <b>REST APIs, microservices, Kafka, Redis, SQL</b>, and clean system design.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <a href="https://github.com/VineethGolla" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/vineeth-golla/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:vineethgolla1@gmail.com">Email</a>
          <a href="/resume.pdf">Resume (PDF)</a>
        </div>
      </section>

      <hr style={{ margin: "34px 0", border: "none", borderTop: "1px solid #eee" }} />

      <section>
        <h2 style={{ margin: "0 0 14px", fontSize: 22 }}>Featured Projects</h2>
        <ul style={{ paddingLeft: 18, color: "#444", lineHeight: 1.8 }}>
          <li><b>User Service</b> — Authentication + user management APIs (JWT)</li>
          <li><b>Product Service</b> — CRUD APIs with pagination + sorting</li>
          <li><b>Payment Service</b> — Stripe payments + webhook handling</li>
          <li><b>Kafka Demo</b> — Event-driven producer/consumer</li>
          <li><b>Redis Demo</b> — Caching + idempotency patterns</li>
          <li><b>Parking Lot (LLD)</b> — Object-oriented system design</li>
        </ul>
      </section>

      <hr style={{ margin: "34px 0", border: "none", borderTop: "1px solid #eee" }} />

      <section>
        <h2 style={{ margin: "0 0 14px", fontSize: 22 }}>About</h2>
        <p style={{ margin: 0, color: "#444", maxWidth: 820, lineHeight: 1.6 }}>
          Backend-focused engineer with strong fundamentals in Java and Spring Boot. I enjoy building clean APIs,
          designing scalable microservices, and explaining systems clearly with flows and trade-offs.
        </p>
      </section>

      <footer style={{ marginTop: 50, color: "#666" }}>
        © {new Date().getFullYear()} Vinny · Kansas City, MO
      </footer>
    </main>
  );
}