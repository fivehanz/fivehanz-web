const Card = (props: Project) => {
  const { name, subtitle, description, tags } = props;
  return (
    <div className="card">
      <div className="thumb-box">
        <div className="thumb"></div>
        <div className="tags">
          {tags.map((tag: Tag) => (
            <span key={tag.id} className="tag">
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="card-desc">
        <div className="titles">
          <h2 className="title">{name}</h2>
          <h3 className="subtitle">{subtitle}</h3>
        </div>

        <p className="paragraph">{description}</p>

        <div className="cta">CTA</div>
      </div>
    </div>
  );
};

export default Card;
