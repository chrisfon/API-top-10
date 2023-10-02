import { useNavigate } from 'react-router-dom'

function ContinueButton(props) {
  const navigate = useNavigate()
  function Continue () {
    navigate(`/lessons/${props.lessonId}/sublessons/${props.sublessonId}`)
  }
  return (
    <button className="button primary" onClick={Continue}>
      Continue
    </button>
  )
}

export default ContinueButton
