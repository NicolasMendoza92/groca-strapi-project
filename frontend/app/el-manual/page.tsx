import Loader from "@/components/loader";
import ManualContent from "@/components/manual-content";
import { getManualPage } from "@/lib/strapi";
import { Suspense } from "react";

export async function ManualContentPage() {
  const manualData = await getManualPage();
  return <ManualContent data={manualData} />;
}

export default function ManualPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <ManualContentPage />
    </Suspense>
  );
}
