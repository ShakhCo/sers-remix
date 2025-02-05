import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Home } from "@/containers/home";
import { About } from "@/containers/about";
import { Background } from "@/containers/background";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to SERS!" },
    { name: "description", content: "Welcome to SERS!" },
  ];
};

export default function Index() {

  return <section className="">
    <div className="max-w-[100rem] mx-auto px-8">
      <Home />
      <About />
    </div>
    <Background />
  </section>

}
