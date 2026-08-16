import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { MedicationProvider } from './context/MedicationContext';
import { AuthGate } from './components/AuthGate';
import { Layout } from './components/Layout';
import { DayPage } from './pages/DayPage';
import { CalendarPage } from './pages/CalendarPage';
import { MedicationsListPage } from './pages/MedicationsListPage';
import { AddEditMedicationPage } from './pages/AddEditMedicationPage';
import { todayISO } from './utils/date';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AuthGate>
          <MedicationProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Navigate to={`/day/${todayISO()}`} replace />} />
                <Route path="/day/:date" element={<DayPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/medications" element={<MedicationsListPage />} />
                <Route path="/medications/new" element={<AddEditMedicationPage />} />
                <Route path="/medications/:id/edit" element={<AddEditMedicationPage />} />
                <Route path="*" element={<Navigate to={`/day/${todayISO()}`} replace />} />
              </Route>
            </Routes>
          </MedicationProvider>
        </AuthGate>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
