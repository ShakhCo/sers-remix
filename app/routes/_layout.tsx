import { Outlet } from "@remix-run/react";
import Header from "@/components/header";

export default function Layout() {
    return (
        <main className="min-h-screen 2xl:pt-8">
            <Header />
            <Outlet />
        </main>
    )
}
