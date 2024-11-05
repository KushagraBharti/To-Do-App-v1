import Auth from './components/Auth';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar';
import TickIcon from './components/TickIcon';

import { useEffect, useState } from 'react';

function App() {

  const UserEmail = 'kushagrabharti@gmail.com'

  const[tasks, setTasks] = useState([])

  const getData = async () => {

    try {

      const response = await fetch(`http://localhost:8000/todos/${UserEmail}`)
      const json = await response.json()
      setTasks(json)

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])

  console.log(tasks)

  // Sort by Date

  const sortedTasks = tasks?.sort((a, b) => new Date(a.due_date) - new Date(b.due_date))

  return (
    <div className="App">
      <Auth />
      <ListHeader listName = {'✈️Holiday Tick List'}/>
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task}/>)}
      <ListItem />
      <Modal />
      <ProgressBar />
      <TickIcon />
    </div>
  );
}

export default App;
