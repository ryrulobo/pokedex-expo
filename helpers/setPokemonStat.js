export const setPokemonId = (number) => {
  const formattedNumber = String(number).padStart(3, "0");
  return `#${formattedNumber}`;
};

export function setPokemonWeight(hg) {
  const lbs = hg * 0.220462;
  const kg = hg / 10;
  return `${lbs.toFixed(2)} lbs (${kg.toFixed(2)} kg)`;
}

export function setPokemonHeight(dm) {
  const totalInches = dm * 3.93701;
  const feet = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  const m = dm / 10;
  return `${feet}'${inches.toFixed(2)}" (${m} m)`;
}

export function setPokemonAbilities(abilities) {
  const result = abilities.map((el) =>
    el.ability.name.replace(/\b\w/g, (match) => match.toUpperCase())
  );
  return result.join(", ");
}

export function setPokemonMoves(moves) {
  const result = [];

  for (const item of moves) {
    const moveName = item.move.name;
    result.push(moveName.charAt(0).toUpperCase() + moveName.slice(1));
  }

  return result;
}

export function setPokemonBaseStat(stats) {
  const pokemonStats = {};

  stats.forEach((stat) => {
    const {
      base_stat,
      stat: { name },
    } = stat;

    const formattedName = name.replace(/-/g, "");
    pokemonStats[formattedName] = base_stat;
  });

  return pokemonStats;
}
