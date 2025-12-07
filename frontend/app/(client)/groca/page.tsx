import { Suspense } from "react";
import Loader from "@/components/loader";
import { getGrocaPage } from "@/lib/strapi";
import GrocaContent from "@/components/groca-content";

export async function GrocaContentPage() {
  const grocaData = await getGrocaPage();
  return (
    <>
      <GrocaContent grocaData={grocaData} />
    </>
  );
}

export default function GrocaPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <GrocaContentPage />
    </Suspense>
  );
}
