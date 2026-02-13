import type { ReactNode } from "react";
import { getUserProfileFromSessionCookie } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SignOutButton from "@/components/SignOutButton";

async function RootLayout({ children }: { children: ReactNode }) {
  const user = await getUserProfileFromSessionCookie();

  if (!user) redirect("/sign-in");

  return (
    <div className="root-layout">
      <header>
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Hire-Wise logo"
                width={38}
                height={32}
              />

              <h2 className="text-primary-100">Hire-Wise</h2>
            </Link>

            <Link
              href="/about"
              className="text-sm text-gray-300 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          <SignOutButton userId={user.id} />
        </nav>
      </header>

      {/* Min height = 100dvh - margin-top - header height */}
      {/* This is set specifically for centering the Spinner component  */}
      <main className="min-h-[calc(100dvh-2rem-36px)] sm:min-h-[calc(100dvh-3rem-36px)] relative">
        {children}
      </main>
    </div>
  );
}

export default RootLayout;
