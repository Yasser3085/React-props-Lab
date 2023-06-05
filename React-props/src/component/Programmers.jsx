

export default function Programmers(props) {
  return (
    <div className="programmer-div" >
      <h3> Name : {props.name} </h3>
      <h4> Programming Languages : {props.languages} </h4>
      <h4>Experience : {props.exp} </h4>
      <h4> Companies : {props.comp} </h4>
   
    </div>
  )
}
