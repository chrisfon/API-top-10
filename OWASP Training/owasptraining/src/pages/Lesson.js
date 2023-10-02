import { useParams } from "react-router-dom";
import lessons from '../LessonsInfo';
import { Link } from "react-router-dom";
import SublessonSum from "./components/SublessonSum";


function Lesson(){
    const {lessonId} = useParams();
    const lesson = lessons.find(lesson => lesson.id == lessonId); 
    //mi ide me obliga a usar == no ===.........porque?

    

    return (
        <div className="Course page">
          <header>
            <p>
              <Link to={'/'}>Back</Link>
            </p>
            <h1>{lesson.title}</h1>
            <p>{lesson.description}</p>
            <Link 
              className="button primary icon" 
              to={`/lessons/${lessonId}/sublessons/${lesson.sublessons[0].id}`}
            >
              Start Lesson
            </Link>
          </header>
          <div>
            {lesson.sublessons.map((sublesson, index) => (
              <SublessonSum
                lessonId={lessonId}
                sublesson={sublesson}
                num={index + 1}
                key={sublesson.id}
              />
            ))}
          </div>
        </div>
      )
}

export default Lesson;