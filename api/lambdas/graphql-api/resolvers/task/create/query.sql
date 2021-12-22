INSERT INTO task(title, content, status, priority, project_id, due_date)
VALUES($1, $2, 'backlog', $3, $4, $5::timestamp)
RETURNING task.id;
