export const getAllTodos = ({ todos }) => (
	Object.values(todos)//NEWER EASIER SYNTAX ES8
);

window.getAllTodos = getAllTodos;