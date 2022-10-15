type PersonListType = {
  datas: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListType) => {
  return (
    <div>
      {props.datas.map((data) => {
        return <h2>{data.first} {data.last}</h2>;
      })}
    </div>
  );
};
