import Loader from "@/components/loader";
import ProductDetail from "@/components/product-detail";
import { getProductBySlug } from "@/lib/strapi";
import { Suspense } from "react";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function ProductDetailContent({ params }: PageProps) {
   const { slug } = await params;
  const productDetail = await getProductBySlug(slug);
  if (!productDetail) return <div>Producto no encontrado</div>;
  return <ProductDetail productDetail={productDetail}/>;
}

export default function ProductDetailPage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <ProductDetailContent {...props} />
    </Suspense>
  );
}
