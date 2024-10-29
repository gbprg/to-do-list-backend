import { FastifyInstance } from 'fastify';
import { CreateTaskController } from '../../controllers/to-doTaskController/CreateTaskController';
import { GetTasksController } from '../../controllers/to-doTaskController/GetTaskController';
import { UpdateTaskController } from '../../controllers/to-doTaskController/UpdateTaskController';
import { DeleteTaskController } from '../../controllers/to-doTaskController/DeleteTaskController';
import { ensureAuthenticated } from '../../middleware/ensureAuthenticated';

export async function TaskRoutes(app: FastifyInstance) {
  const createTaskController = new CreateTaskController();
  const updateTaskController = new UpdateTaskController();
  const deleteTaskController = new DeleteTaskController();
  const getTasksController = new GetTasksController();

  app.post('/tasks', { preHandler: [ensureAuthenticated] }, createTaskController.handle);
  app.put('/tasks/:id', { preHandler: [ensureAuthenticated] }, updateTaskController.handle);
  app.delete('/tasks/:id', { preHandler: [ensureAuthenticated] }, deleteTaskController.handle);
  app.get('/tasks', { preHandler: [ensureAuthenticated] }, getTasksController.handle);
}
