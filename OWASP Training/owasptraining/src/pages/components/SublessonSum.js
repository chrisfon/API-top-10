import { Link } from 'react-router-dom'

function SublessonSum(props) {
  return (
    <section key={props.sublesson.id} className="summary">
      <div>
        <div className="title">
          <h2>
            <Link
              className="no-underline cursor-pointer"
              to={'/lessons/' + props.lessonId + '/sublessons/' + props.sublesson.id}
            >
              {props.num}. {props.sublesson.title}
            </Link>
          </h2>
        </div>
        <p>
          <Link
            className="no-underline cursor-pointer"
            to={'/lessons/' + props.lessonId + '/sublessons/' + props.sublesson.id}
          >
            
          </Link>
        </p>
      </div>
    </section>
  )
}

export default SublessonSum
