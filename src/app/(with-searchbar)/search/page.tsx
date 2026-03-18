import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div>
      Search 페이지: {q}
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
