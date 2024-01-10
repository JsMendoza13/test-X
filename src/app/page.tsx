import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import PostCard from "./components/post.card";
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
    .select("*, user:users(name, avatar_url, user_name)");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />

      {post?.map((post) => {
        const { id, user, content } = post;
        const {
          user_name: userName,
          name: userFullName,
          avatar_url: avatarUrl,
        } = user;
        return (
          <PostCard
            avatarUrl={avatarUrl}
            content={content}
            key={id}
            userFullName={userFullName}
            userName={userName}
          />
        );
      })}
    </main>
  );
}
