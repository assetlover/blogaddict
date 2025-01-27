import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    console.log(body);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
        username: body.username,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ msg: "Invalid" });
  }
});

userRouter.get("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ msg: "User not found" });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      token,
    });
  } catch (e) {
    c.status(411);
    return c.json({ msg: "Invalid" });
  }
});
