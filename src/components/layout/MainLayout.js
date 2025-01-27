import React from "react";
import Header from "../header/Header";
import SideNav from "../sideNavigation/SideNav";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex min-h-dvh text-black text-base">
        <SideNav />
        <section className=" bg-gray-50 grow p-4 lg:px-10 lg:py-8 ">
          <section className=" container mx-auto ">{children}</section>
        </section>
      </main>
    </>
  );
}

export default MainLayout;
