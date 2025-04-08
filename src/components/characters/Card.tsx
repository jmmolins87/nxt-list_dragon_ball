



import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { Character } from '@/models/Character.model';

interface ICharacterCardProp {
  character: Character
}


export const Card = ({ character }: ICharacterCardProp ) => {

  return (
    <Link href={`/../characters/${ character.id }`}>
      <article
        className="text-emerald-500 text-center bg-emerald-50 border-2 border-emerald-500 rounded-lg p-5 group">
        <Image
            src={ character.image }
            alt={ character.name }
            title={ character.name }
            width={100}
            height={100}
            className="h-56 w-56 object-contain mx-auto rounded-lg mb-3 transition-transform duration-300 group-hover:scale-125"
            />
        <h3 className="text-2xl font-bold">{character.name}</h3>
      </article>
    </Link> 
  )
}
