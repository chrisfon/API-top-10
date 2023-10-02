import {Link} from 'react-router-dom';

function LessonSum(props){
    return(
        <section key={props.lesson.id} className="sum">
        <div>
          <div className="title">
            <h2>
              <Link
               
                to={'/lessons/' + props.lesson.id}
              >
                {props.lesson.title}
              </Link>
            </h2>
          </div>
          <p>
            <Link
              
              to={'/lessons/' + props.lesson.id}
            >
              {props.lesson.description}
            </Link>
          </p>
        </div>
      </section>
    )
}
export default LessonSum;