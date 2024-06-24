import { collection, doc, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../firebase/Firebase';
import DragDropWrapper from '../components/completed/DragDropWrapper';
import Loader from '../components/common/Loader';

function Completed() {
  const [projectIds, setProjectIds] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  console.log("tasks", tasks)

  const user = JSON.parse(localStorage.getItem('todoist_user'));
  const userRef = doc(db, 'user', user.id);
  const projectCollectionRef = collection(userRef, 'project');

  async function fetchProjectIds() {
    const snapShot = await getDocs(projectCollectionRef);
    const tempProjectIds = snapShot.docs.map((doc) => doc.id);
    setProjectIds(['inbox', ...tempProjectIds]);
  }

  useEffect(() => {
    fetchProjectIds();
  }, []);

  useEffect(() => {
    async function fetchTasks() {
      try {
        setIsLoading(true)
        const tempTasks = [];
        for (const projectId of projectIds) {
          const projectDocRef = doc(projectCollectionRef, projectId);
          const sectionCollectionRef = collection(projectDocRef, 'section');

          const sectionSnapShot = await getDocs(sectionCollectionRef);
          for (const sectionDoc of sectionSnapShot.docs) {
            const sectionDocRef = doc(sectionCollectionRef, sectionDoc.id);
            const taskCollectionRef = collection(sectionDocRef, 'task');

            const taskSnapShot = await getDocs(taskCollectionRef);
            taskSnapShot.forEach((taskDoc) => {
              tempTasks.push({ task_id: taskDoc.id, ...taskDoc.data() });
            });
          }
        }

        setTasks(tempTasks.filter((task) => task.completed));
      } catch (error) {
        console.log("Error: At completed task page.")
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    if (projectIds.length > 0) {
      fetchTasks();
    }
  }, [projectIds]);

  return (
    <div className="scrollbar md:w-[calc(100% - 64px)] lg:w-[calc(100% - 160px)] xl:w-[calc(100% - 384px)] flex h-full max-h-screen flex-col gap-2 overflow-y-scroll px-8 py-3 sm:px-12 md:px-8 lg:px-20 xl:px-48">
      <h2 className="my-3 self-start text-2xl font-bold">Completed Tasks</h2>
      {(!error && isLoading) ? <Loader /> : tasks.length === 0 ? <p>NO COMPLETED TASK</p> : <DragDropWrapper data={tasks} />}
    </div>
  );
}

export default Completed;
