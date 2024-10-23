import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Profile Section",
  description: "Profile section is here",
};

export default function profile({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  )
}
