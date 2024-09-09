const Total = ({ parts }) => {
    const InitialValue = 0
    const total = parts.reduce((s, p) => s + p.exercises, InitialValue)
    return <p><strong>Total of {total} exercises</strong></p>
}   

export default Total