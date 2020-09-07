export default function Button(props) {
  let { onclick, text, cssClass } = props;

  if (cssClass === undefined) {
    cssClass = "";
  }

  return (
    <button className={cssClass} onClick={onclick}>
      {text}
    </button>
  );
}
