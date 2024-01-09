import { AuthButton } from "@/app/components/auto-button";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
//con estos dos componentes son necesarios en Nextjs
//Para hacer la conexion con la base de datos
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: post } = await supabase.from("post").select();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hola XXXXXXXXX 🙋🏻‍♂️👋🏻
      <AuthButton />
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </main>
  );
}
