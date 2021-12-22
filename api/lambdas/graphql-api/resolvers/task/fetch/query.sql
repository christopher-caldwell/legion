select 
  task.id,
  task.title,
  task.content,
  task.status,
  task.priority,
  task.due_date as "dueDate",
  task.created_at as "createdAt",
  task.updated_at as "updatedAt",
  json_build_object(
    'id',
    project.id,
    'name',
    project.name
  )
FROM task
JOIN project ON
  task.project_id = project.id
WHERE
  task.id = $1;
  