export default function Title(props) {
  const { text, size, center, otherClasses } = props;
  if (size === undefined) {
    size = 1;
  }

  let cssStyles = {
    fontSize: size.toString() + "em",
  };

  let cssClasses = center ? "title center-text" : "title";
  cssClasses += " " + otherClasses;
  return (
    <h3 className={cssClasses} style={cssStyles}>
      {text}
    </h3>
  );
}
