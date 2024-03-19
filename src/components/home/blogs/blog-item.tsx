interface Props {
  title: string;
  description: React.ReactNode;
  image: string;
}

function BlogItem(props: Props) {
  return (
    <div className="flex flex-row blog-item">
      <div className="picture">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="right">
        <h3>{props.title}</h3>
        {props.description}
      </div>
    </div>
  );
}

export default BlogItem;
