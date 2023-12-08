type Props = {
  firstName: string;
};

export default function EmailTemplate({ firstName }: Props) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}
