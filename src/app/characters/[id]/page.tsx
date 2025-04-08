


import React from 'react'

import Link from 'next/link'
import { notFound } from 'next/navigation';
import Image from 'next/image';

import { getCharacterById } from '@/services/characters.service';
import { Header } from '@/components/Header'

interface ICharacterPageProps {
    params: { id: string }
}


export default async function CharacterPage({ params }: ICharacterPageProps) {

    const { id } = await params;
    const character = await getCharacterById(id)

    if(character.id === undefined) {
        notFound();
    }

    return (
        <div className="max-w-11/12 sm:max-w-10/12 mx-auto">
            <Header />
            <section className="max-w-3xl mx-auto pb-2">
                <div className="flex flex-col sm:flex-row">
                    <Image 
                        src={character.image}
                        alt={character.name} 
                        title={character.name}
                        width={500}
                        height={500}
                        className="h-60 object-contain mx-auto" />
                    <div className="max-w-1/2">
                        <h1 className="text-green-500 text-3xl font-bold">{character.name}
                            <small className="text-slate-400 text-lg font-thin"> {character.race}</small>
                        </h1>
                        <p className="mt-3">{character.description}</p>
                    </div>
                </div>
            </section>
            <hr />
            <section className="flex justify-center items-center mt-2">
                <Link href={"/"} className="bg-blue-100 hover:bg-blue-200 border-2 border-blue-400 text-blue-400 hover:text-blue-600 py-2 px-5 rounded">Volver</Link>
            </section>
        </div>
    )
}
