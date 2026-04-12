import { getTaskTypes } from "@/prisma/prisma-db";

export default async function about() {
  const taskTypes = await getTaskTypes();

  return (
    <div>
      <h1>About Page</h1>
      <ul>
        {taskTypes.map((type) => (
          <li key={type.TASK_NAME}>{type.TASK_NAME}</li>
        ))}
      </ul>
    </div>
  );
}
