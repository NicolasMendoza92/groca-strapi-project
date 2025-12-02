import { ElManualData } from "@/types";
import Productos from "./products";
import { getProducts } from "@/lib/strapi";

export default async function ManualContent({ data }: { data: ElManualData }) {
  const { title, description } = data || {};
  const products = await getProducts();
  return (
    <div className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-serif text-5xl font-light text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>
          <Productos books={products} />
      </div>
    </div>
  );
}
