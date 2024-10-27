import { ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  id: number;
  children: ReactNode;
  onDelete: (id: number) => void;
}

const CourseGoal = ({ title, id, children, onDelete }: CourseGoalProps) => {
  return (
    <>
      <article>
        <div>
          <h1>{title}</h1>
          {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </article>
    </>
  );
};

export default CourseGoal;
