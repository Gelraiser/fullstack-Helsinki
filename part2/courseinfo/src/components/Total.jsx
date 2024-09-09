const Total = ({ course }) => {
    const initialValue = 0
    const total = course.parts.reduce((sum, part) => sum + part.exercises, initialValue)
    return <p><strong>Total of {total} exercises</strong></p>
}   

export default Total