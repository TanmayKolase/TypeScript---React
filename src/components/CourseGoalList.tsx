import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

interface CourseGoalListProps {
  goals: CGoal[];
}
const CourseGoalList = ({ goals }: CourseGoalListProps) => {
  return (
    <>
      <ul>
        {goals.map((goals) => (
          <li key={goals.id}>
            <CourseGoal title={goals.title}>
              <p>{goals.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
