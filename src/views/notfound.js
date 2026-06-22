export function NotFoundView() {
  return `
    <section style="max-width:1200px;margin:48px auto;padding:0 24px">
      <div class="article" style="border-left:4px solid var(--red)">
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <p><a href="#/" style="color:var(--navy)">Return to homepage</a></p>
      </div>
    </section>
  `;
}
