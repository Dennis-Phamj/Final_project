import about_img from "./assets/icons_assets/about.svg";

export default function History() {
  return (
    <article className="about">
      <div className="about_content">
        <div className="about_title">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <img src={about_img} alt="about LL" />
    </article>
  );
}
