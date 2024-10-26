import CourseGoal from "./CourseGoal";
import { CourseGoal as CGoal } from "../App";

interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}
const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  return (
    <>
      <ul>
        {goals.map((goals) => (
          <li key={goals.id}>
            <CourseGoal
              id={goals.id}
              title={goals.title}
              onDelete={onDeleteGoal}
            >
              <p>{goals.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
