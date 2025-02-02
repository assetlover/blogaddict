import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: { userId: string };
}>();
blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("Authorization") || " ";
  const token = header.split(" ")[1];
  const response = await verify(token, c.env.JWT_SECRET);
  if (response) {
    c.set("userId", String(response.id));
    await next();
  } else {
    c.status(403);
    return c.json({ msg: "Not logged in " });
  }
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const userId = c.get("userId");
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userId,
      },
    });
    c.status(200);
    return c.json({ id: blog.id });
  } catch (e) {}
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();
    const blog = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: { title: body.title, content: body.content },
    });
    c.status(200);
    return c.json({ id: blog.id });
  } catch (e) {}
});

//Add : pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blogs = await prisma.post.findMany({
    select: {
      content: true,
      title: true,
      published: true,
      id: true,
      author: {
        select: { name: true },
      },
    },
  });
  return c.json({
    blogs,
  });
});
blogRouter.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const id = c.req.param("id");

    const blog = await prisma.post.findFirst({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: { name: true },
        },
      },
    });
    console.log(blog);
    c.status(200);
    return c.json({
      title: blog?.title,
      content: blog?.content,
      authorName: blog?.author.name,
      id: blog?.id,
    });
  } catch (e) {
    c.status(411);
    return c.json({ msg: "error while fetching blog post" });
  }
});
