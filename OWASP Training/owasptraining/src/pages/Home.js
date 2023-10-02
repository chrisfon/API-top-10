import lessons from "../LessonsInfo";
import LessonSum from "./components/LessonSum";

function Home(){

    return(

        <div className="Welcome">
        <header>
          <h1>OWASP API Security Top 10 </h1>
        </header>
        {lessons.map((lesson) => (
          <LessonSum lesson={lesson} key={lesson.id} />
        ))}
      </div>
    )

}
export default Home;