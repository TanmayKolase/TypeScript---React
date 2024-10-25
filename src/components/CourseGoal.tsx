interface CourseGoalProps {
  title: string;
  description: string;
}
const CourseGoal = ({ title, description }: CourseGoalProps) => {
  return (
    <>
      <article>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <button>Delete</button>
      </article>
    </>
  );
};

export default CourseGoal;
