import { useParams } from 'react-router-dom';
import lessons from '../LessonsInfo';
import { Link } from "react-router-dom";
import SublessonSum from "./components/SublessonSum";
import ContinueButton from './components/ContinueButton';

function Sublesson() {
  const { lessonId, sublessonId } = useParams();
  const lesson = lessons.find(lessons => lessons.id === parseInt(lessonId));
  const sublesson = lesson.sublessons.find(sublesson => sublesson.id === parseInt(sublessonId));
  const nextLessonId = () =>{
    const current = lesson.sublessons.indexOf(sublesson)
    const next = (current +1) % lesson.sublessons.length;
    return lesson.sublessons[next].id;
        
  }

  return (
    <div className="Course page">
      <header>
        <p>
          <Link to={'/'}>Back</Link>
        </p>
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
        <h1>{sublesson.title}</h1>
        <p>{sublesson.description}</p>
        <p>{sublesson.content}</p>
        <p>{sublesson.video}</p>
      
      </header>
      <ContinueButton
      lessonId = {lessonId}
      sublessonId={nextLessonId()}
      />
    </div>
  )
}

export default Sublesson
