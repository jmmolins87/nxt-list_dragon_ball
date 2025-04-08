



import Link from 'next/link'
import React from 'react'

import { Header } from '@/components/Header'


export default function NotFound() {
  return (
    <>
        <Header />
        <section className="max-w-1/2 mx-auto bg-red-100 text-red-500 border-2 border-red-500 text-center rounded p-2">
            <h1 className="text-2xl">No encontrado</h1>
        </section>
        <section className="flex justify-center items-center mt-2">
            <Link href={"/"} className="bg-blue-100 hover:bg-blue-200 border-2 border-blue-400 text-blue-400 hover:text-blue-600 py-2 px-5 rounded">Volver</Link>
        </section>
    </>
  )
}
