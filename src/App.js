import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import JobPage from './pages/JobPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />}/>
          <Route path='/jobs' element={<JobsPage />}/>
          <Route path='/reactjobsfrontend' element={<HomePage/>}/>
          <Route path='/add-job' element={<AddJobPage />} />
          <Route path='/jobs/:id' element={<JobPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
    </Routes>
  );
}

export default App;
