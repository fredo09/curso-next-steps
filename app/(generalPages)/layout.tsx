
/**
 *  estructura layout pages
 * (_NOMBE_FILE_) -> ayuda a que se cargue o agrupe las pages y que no se cuente la carpeta que tiene esa agrupacion. 
 */

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg"> hola mundo</span>
      { children }
    </main>
  );
}
