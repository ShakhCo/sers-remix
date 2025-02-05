import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Home from "@/containers/home";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to SERS!" },
    { name: "description", content: "Welcome to SERS!" },
  ];
};

export default function Index() {

  return <>
    <Home />
  </>

}
