const Pokemon = ({ props }) => {
  const hero = props?.sprites?.front_default ?? "../assets/poke-shadow.png";
  return (
    <div className="poke-card">
      <div className="poke-name">{props.name}</div>
      <div className="img-container">
        <img
          className="poke-img"
          src={hero}
          alt="pokemon"
          data-color={props.types[0].type.name}
        />
      </div>
      <div className="poke-types">
        {props.types.map((type) => {
          return (
            <div
              key={type.type.name}
              style={{
                color: `var(--${type.type.name})`,
                borderColor: `var(--${type.type.name})`,
              }}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <div className="poke-stats">
        {props.stats.map((stat) => {
          return (
            <div key={stat.stat.name}>
              <div>{stat.stat.name}</div>
              <div>{stat.base_stat}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
