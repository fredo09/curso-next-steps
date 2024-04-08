/**
 *  estructura layout pages
 * (_NOMBE_FILE_) -> ayuda a que se cargue o agrupe las pages y que no se cuente la carpeta que tiene esa agrupacion. 
 */

import { Navbar } from "@/components";

export default function PublicLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hi Page</span>
        {children}
      </main>
    </>
  );
}
