

const Part = ({ part }) => {
    return <p>{part.name} {part.exercises}</p>
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part =>
            <Part key={part.id} part={part} />
        )}
        </div>
    )
    }

export default Content