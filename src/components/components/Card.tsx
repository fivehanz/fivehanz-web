const Card = () => {
  return (
    <div className="card">
      <div className="thumb-box">
        <div className="thumb"></div>
      </div>

      <div className="card-desc">
        <div className="titles">
          <h2 className="title">project name</h2>
          <h3 className="subtitle">few lines of project subtitle</h3>
        </div>

        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem velit
          neque asperiores quam maiores sit voluptate itaque similique sint
          voluptatibus rem obcaecati, ea nulla nam quaerat doloremque nihil
          dolores ut.
        </p>

        <div className="cta">CTA</div>
      </div>
    </div>
  );
};

export default Card;
