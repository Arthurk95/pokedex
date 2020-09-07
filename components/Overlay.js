export default function Overlay(props) {
  const { text, hover, hide } = props;

  let classes = hover ? "overlay active" : "overlay";

  if (hide) {
    classes += " hide";
  }

  return (
    <div className={classes}>
      <p>{text}</p>
    </div>
  );
}
