import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
//con estos dos componentes son necesarios en Nextjs
//Para hacer la conexion con la base de datos
export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session == null) {
    redirect("/login");
  }

  const { data: post } = await supabase
    .from("post")
    .select("*, users(name, avatar_url, user_name)");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer /> Hola XXXXXXXXX 🙋🏻‍♂️👋🏻
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </main>
  );
}
