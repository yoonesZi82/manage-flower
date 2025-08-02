import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const { productID } = body;

    if (!productID) {
      return Response.json(
        { message: "ProductID is required" },
        { status: 401 }
      );
    }

    const product = await db.product.findFirst({
      where: { id: productID },
    });

    if (!product) {
      return Response.json({ message: "Product Not Found" }, { status: 403 });
    }

    const { id, tags } = product;

    const allProducts = await db.product.findMany({
      where: {
        id: { not: id },
      },
    });

    const matchedProducts = allProducts.filter((p) =>
      p.tags?.some((tag) => tags.includes(tag))
    );

    if (!matchedProducts) {
      return Response.json(
        { message: "otherProducts Not Found" },
        { status: 403 }
      );
    }

    return Response.json(matchedProducts);
  } catch (err) {
    console.log(err);

    return Response.json(
      { message: `Unknown error in other products API --> ${err}` },
      { status: 500 }
    );
  }
}
