export interface ITag {
  text: string;
  image: string;
}

function TagItem(props: ITag) {
  return (
    <p className="tag-item">
      {props.text} <img src={props.image} alt={props.text} />
    </p>
  );
}

export default TagItem;
