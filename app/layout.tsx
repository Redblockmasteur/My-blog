import Link from "next/link"; 
import "../styles/globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <div>
      <Image src="/logo.png" width={40} height={40} className="mx-auto" alt={"logo"}/>
        <Link href ="/">
          <h1 className="text-3xl text-white">This is my header</h1>
        </Link> 
        <p className="text-slate-300">mais c'est cool par ici</p>
      </div>
    </header>
  )
 
  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <p>Dévelopé par Antoine</p>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
            {header}
            {children}
            {footer}
        </div>  

      </body>
    </html>
  )
}