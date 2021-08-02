import { diarySelectors } from '../../redux/diary';
import { useSelector } from 'react-redux';

import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import Sidebar from '../../components/Sidebar';
import './styles.css';
import Header from '../../components/Header';

export default function DiaryPageView() {
  const historyDate = useSelector(diarySelectors.getHistoryDate);
  const today = new Date().toLocaleDateString().split('.').reverse().join('-');
  const isToday = historyDate === today;

  return (
    <div className="bg-wrapper__diary">
      <Header />
      <div className="diarypage-container">
        <ContainerForDiary>
          <DiaryAddProductForm />
          <div className="data-picker">
            <DiaryDateСalendar />
          </div>
          {isToday ? <DiaryAddProductForm /> : null}
          <DiaryProductsList />
        </ContainerForDiary>
        <Sidebar />
      </div>
    </div>
  );
}
