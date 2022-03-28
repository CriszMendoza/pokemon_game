import pokemonAPi from '../api/pokemonApi';

const getPokemonOptions = async () => {
    const pokemonsArr = [];

    do {
        const num = Math.floor(Math.random() * 650);
        if (!pokemonsArr.includes(num)) pokemonsArr.push(num);
    } while (pokemonsArr.length < 4);

    return await getPokemonNames(pokemonsArr);
};

const getPokemonNames = async ([a, b, c, d] = []) => {
    const arrPromises = [
        pokemonAPi.get(`/${a}`),
        pokemonAPi.get(`/${b}`),
        pokemonAPi.get(`/${c}`),
        pokemonAPi.get(`/${d}`),
    ];

    const [pk1, pk2, pk3, pk4] = await Promise.all(arrPromises);

    return [
        { name: pk1.data.name, id: pk1.data.id },
        { name: pk2.data.name, id: pk2.data.id },
        { name: pk3.data.name, id: pk3.data.id },
        { name: pk4.data.name, id: pk4.data.id },
    ];
};

export default getPokemonOptions;
