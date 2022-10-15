type PersonType = {
  data: {
    first: string;
    last: string;
  };
};

export const Person = (props: PersonType) => {
  return (
    <div>
      Firstname: {props.data.first}
      <br></br>
      Lastname: {props.data.last}
    </div>
  );
};
