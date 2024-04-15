export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age ? (
        <p className="Person__age">{`I am ${person.age}`}</p>
      ) : null}
      {person.isMarried === false ? (
        <p className="Person__partner">I am not married</p>
      ) : (
        <p className="Person__partner">
          {person.sex === 'm'
            ? `${person.partnerName} is my wife`
            : `${person.partnerName} is my husband`}
        </p>
      )}
    </section>
  );
};
