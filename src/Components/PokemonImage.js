export const GetImageUrlFromName = ({pokemonName}) => {
    if(pokemonName === 'pikachu')
        return 'https://amp.24horas.cl/mrf4u/statics/i/ps/www.24horas.cl/incoming/pikachujpg-2525083/ALTERNATES/w700/Pikachu.jpg?width=1200&enable=upscale';
    else if (pokemonName === 'raichu')
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwUcG9kNUWaP4K9seq71SnoLfDwtLtbbzRA&usqp=CAU';
}

export const GetMiniImageUrlFromName = ({pokemonName}) => {
    if(pokemonName === 'pikachu')
        return 'http://www.smashbros.com/images/og/pikachu.jpg';
    else if (pokemonName === 'raichu')
        return 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f17afd5-2d7c-478b-80e7-bb39b9146876/db4ryym-327b3f2d-52bc-4f22-a825-001dd471645a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdmMTdhZmQ1LTJkN2MtNDc4Yi04MGU3LWJiMzliOTE0Njg3NlwvZGI0cnl5bS0zMjdiM2YyZC01MmJjLTRmMjItYTgyNS0wMDFkZDQ3MTY0NWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-pVu8wTCFUc-Dd0a3FI_7MQZrntiHU1fqoGNx-rnsf0';
}