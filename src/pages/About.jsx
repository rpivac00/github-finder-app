function About() {
  return (
    <div>
      <h1 className="text-6xl mb-6 text-center">Github Finder</h1>

      <p className="mb-4 text-2xl font-light text-center">
        A React app to search GitHub profiles and see profile details.<br></br>
        This project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-center">
        Version <span className="text">1.0.0</span>
      </p>
    </div>
  );
}

export default About;
