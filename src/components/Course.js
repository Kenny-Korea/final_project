import { useState, React } from "react";
import "../css(react)/course.css";

const Course = () => {
  let [course, setCourse] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <>
      <div className="test">
        {course.map((a, i) => {
          return <div className="testDiv">{a}</div>;
        })}
      </div>
    </>
  );
};

export default Course;
