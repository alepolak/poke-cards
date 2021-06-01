const grass = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/grass.png";
const fire = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/fire.png";
const water = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/water.png";
const lightning = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/electric.png";
const psychic = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/psychic.png";
const fighting = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/fightning.png";
const darkness = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/dark.png";
const metal = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/steel.png";
const fairy = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/poison.png";
const normal = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/ground.png";

//others
const ghost = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/ghost.png";
const rock = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/rock.png";
const poison = "https://res.cloudinary.com/ahmedagadir/image/upload/v1530730123/pokemon-API/poison.png";

export const getBackgroundImage = (type) => {
    switch (type) {
        case 'grass':
            return grass;
        case 'fire':
            return fire;
        case 'water':
            return water;
        case 'lightning':
            return lightning;
        case 'psychic':
            return psychic;
        case 'fighting':
            return fighting;
        case 'darkness':
            return darkness;
        case 'metal':
            return metal;
        case 'fairy':
            return fairy;
        default:
            return normal;
    }
}