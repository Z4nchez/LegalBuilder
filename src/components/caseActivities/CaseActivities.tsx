import { ButtonB } from '../../app/globalComponents/ButtonB';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useState } from 'react';
import Task from '../task/Task';
import NewActivitie from '../newActivitie/NewActivitie';
import UpdateActivitie from '../updateActivitie/UpdateActivitie';
import {motion} from 'framer-motion'

interface taskInter {
  idT: number;
  titleT: String;
  bodyT: String;
  statusT: number;
  case: string
}
interface caseActInter extends React.HTMLAttributes<HTMLDivElement>{
  lA: taskInter[],
  lAA: taskInter[],
}

function CaseActivities(props: caseActInter) {
  const [lTasks, setLTasks] = useState<taskInter[]>(props.lA);
  const [taskAction, setTaskAction] = useState<number>(0)
  const [actualTask, setActualTask] = useState<number>(-1)

  function handleDrop (result:any){
    if(result.source.droppableId !== result.destination.droppableId){
      if(result.destination.droppableId === "state0"){
        setLTasks(lTasks.map((task) => task.idT === Number.parseInt(result.draggableId, 10) ? {...task, statusT: 0} : task))
      }
      if(result.destination.droppableId === "state1"){
        setLTasks(lTasks.map((task) => task.idT === Number.parseInt(result.draggableId, 10) ? {...task, statusT: 1} : task))
      }
      if(result.destination.droppableId === "state2"){
        setLTasks(lTasks.map((task) => task.idT === Number.parseInt(result.draggableId, 10) ? {...task, statusT: 2} : task))
      }
      if(result.destination.droppableId === "state3"){
        setLTasks(lTasks.map((task) => task.idT === Number.parseInt(result.draggableId, 10) ? {...task, statusT: 3} : task))
      }
    }
  }

  return (
    <DragDropContext onDragEnd={(result) => handleDrop(result)}>
      <motion.div className="w-full h-[90%] bg-grey rounded-lg text-darkPurple" initial={{opacity: 0.7, scale:0.95}} animate={{opacity: 1, scale:1}} transition={{ ease: "easeOut", duration: 0.3 }}>
        <div className="w-full h-[6%] bg-aura flex justify-center items-center font-bold">Activities</div>
        {taskAction === 0 && <div className="w-full h-[84%] flex items-center justify-center gap-8">
          <article className="w-[20%] h-[90%] border-2 border-brown flex flex-col">
            <header className="w-full h-[10%] bg-lightBrown text-brown flex justify-center items-center font-bold">
              Open
            </header>
            <div className="w-full h-[90%] flex justify-center items-center">
              <Droppable droppableId="state0">
                {(droppableProvider) => (
                  <div
                    {...droppableProvider.droppableProps}
                    ref={droppableProvider.innerRef}
                    className="w-[calc(100%-2vh)] h-[calc(100%-2vh)] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-webkit"
                  >
                    {lTasks.map((task, index) =>
                      task.statusT === 0 ? (
                        <Task
                          task={task}
                          key={lTasks.indexOf(task)}
                          index={index}
                          lTasks={lTasks}
                          setTasks={setLTasks}
                          setActualID={setActualTask}
                          setActTask={setTaskAction}
                        ></Task>
                      ) : null
                    )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </article>

          <article className="w-[20%] h-[90%] border-2 border-blue flex flex-col">
            <header className="w-full h-[10%] bg-lightBlue text-blue flex justify-center items-center font-bold">
              In Progress
            </header>
            <div className="w-full h-[90%] flex justify-center items-center">
              <Droppable droppableId="state1">
                {(droppableProvider) => (
                  <div
                    {...droppableProvider.droppableProps}
                    ref={droppableProvider.innerRef}
                    className="w-[calc(100%-2vh)] h-[calc(100%-2vh)] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-webkit"
                  >
                    {lTasks.map((task, index) =>
                      task.statusT === 1 ? (
                        <Task
                          task={task}
                          key={lTasks.indexOf(task)}
                          index={index}
                          lTasks={lTasks}
                          setTasks={setLTasks}
                          setActualID={setActualTask}
                          setActTask={setTaskAction}
                        ></Task>
                      ) : null
                    )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </article>
          <article className="w-[20%] h-[90%] border-2 border-violet flex flex-col">
            <header className="w-full h-[10%] bg-lightViolet text-violet flex justify-center items-center font-bold">
              Review
            </header>
            <div className="w-full h-[90%] flex justify-center items-center">
              <Droppable droppableId="state2">
                {(droppableProvider) => (
                  <div
                    {...droppableProvider.droppableProps}
                    ref={droppableProvider.innerRef}
                    className="w-[calc(100%-2vh)] h-[calc(100%-2vh)] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-webkit"
                  >
                    {lTasks.map((task, index) =>
                      task.statusT === 2 ? (
                        <Task
                          task={task}
                          key={lTasks.indexOf(task)}
                          index={index}
                          lTasks={lTasks}
                          setTasks={setLTasks}
                          setActualID={setActualTask}
                          setActTask={setTaskAction}
                        ></Task>
                      ) : null
                    )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </article>
          <article className="w-[20%] h-[90%] border-2 border-green flex flex-col">
            <header className="w-full h-[10%] bg-lightGreen text-green flex justify-center items-center font-bold">
              Closed
            </header>
            <div className="w-full h-[90%] flex justify-center items-center">
              <Droppable droppableId="state3">
                {(droppableProvider) => (
                  <div
                    {...droppableProvider.droppableProps}
                    ref={droppableProvider.innerRef}
                    className="w-[calc(100%-2vh)] h-[calc(100%-2vh)] overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-webkit"
                  >
                    {lTasks.map((task, index) =>
                      task.statusT === 3 ? (
                        <Task
                          task={task}
                          key={lTasks.indexOf(task)}
                          index={index}
                          lTasks={lTasks}
                          setTasks={setLTasks}
                          setActualID={setActualTask}
                          setActTask={setTaskAction}
                        ></Task>
                      ) : null
                    )}
                    {droppableProvider.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </article>
        </div>}
        {taskAction === 1 && <NewActivitie lTasks={props.lAA} caseID={props.lA[0].case} setActTasks={setTaskAction}></NewActivitie>}
        {taskAction === 2 && <UpdateActivitie idTask={actualTask} setLTasks={setLTasks} lTasks={lTasks} setActTasks={setTaskAction}></UpdateActivitie>}        
        <div className="w-full h-[10%] bg-aura flex justify-end items-center">
          {taskAction === 0 && <ButtonB style={{ marginRight: '12px' }} onClick={() => setTaskAction(1)}>New Task</ButtonB>}
        </div>
      </motion.div>
    </DragDropContext>
  );
}

export default CaseActivities;
