export default function Title(props) {
  const { text, additionalStyles } = props;
  let { center, sizeMultiplier, otherClasses } = additionalStyles;
  if (sizeMultiplier === undefined) {
    sizeMultiplier = 1;
  }

  if (otherClasses === undefined) {
    otherClasses = "";
  }

  if (center === undefined) {
    center = false;
  }

  let cssStyles = {
    fontSize: sizeMultiplier.toString() + "em",
  };

  let cssClasses = center ? "title center-text" : "title";
  cssClasses += " " + otherClasses;
  return (
    <h3 className={cssClasses} style={cssStyles}>
      {text}
    </h3>
  );
}
