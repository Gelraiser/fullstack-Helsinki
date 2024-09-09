const Total = ({ parts }) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
    return <p><strong>Total of {total} exercises</strong></p>
}   

export default Total