type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

// basic props
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `   Welcome on board ${props.name}! You have ${props.messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};
