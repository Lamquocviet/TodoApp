import TaskCard from "./TaskCard";
import TaskEmptyState from "./TaskEmptyState"

const TaskList = ({filteredTasks, filter, handleTaskChange})=>{
  // console.log(filter)
  // let filter = "all";
  // const filteredTasks= [
  //   {
  //     _id: "1",
  //     title: "Learn ReactJS",
  //     status: "active",
  //     completedAt: null,
  //     createdAt: new Date()
  //   },
  //   {
  //     _id: "2",
  //     title: "Learn Javascript",
  //     status: "complete",
  //     completedAt: new Date(),
  //     createdAt: new Date()

  //   },
  // ]
  if(!filteredTasks || filteredTasks.length === 0)
  {
    return <TaskEmptyState filter={filter}/>
  }
  return(
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <TaskCard
          key={task._id ?? index}
          task={task}
          index={index}
          handleTaskChange={handleTaskChange}
          
        />
      ))}
    </div>
  )
}
export default TaskList