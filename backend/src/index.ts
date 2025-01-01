import { Hono } from "hono";

const app = new Hono();

app.get("/app/v1/signup", (c) => {
  return c.text("");
});

app.post("/app/v1/signin", (c) => {
  return c.text("");
});
app.post("/app/v1/blog", (c) => {
  return c.text("");
});
app.put("/app/v1/blog", (c) => {
  return c.text("");
});
app.get("/app/v1/blog:id", (c) => {
  return c.text("");
});
export default app;
