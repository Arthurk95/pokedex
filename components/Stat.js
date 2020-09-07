import Title from "../components/Title";

export default function Stat(props) {
  const { title, value } = props;

  return (
    <div className="stat">
      <Title
        text={title}
        additionalStyles={{
          sizeMultiplier: 1,
          center: false,
          otherClasses: "text-accent2",
        }}
      />
      <p>{value}</p>
    </div>
  );
}
