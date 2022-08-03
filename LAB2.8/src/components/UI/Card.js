import "./Card.css";
function Card(props) {
  // Kết hợp thành 1 string, để có thể hiểu css của của 2 class
  const classes = "card " + props.className;
  // props.children thể hiên thẻ custom có nội dung bên trong, nếu k có thì máy hiểu là rỗng
  return <div className={classes}>{props.children}</div>;
}
export default Card;
