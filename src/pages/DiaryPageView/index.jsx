import { diarySelectors } from '../../redux/diary';
import { useSelector } from 'react-redux';

import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import Sidebar from '../../components/Sidebar';
// import Spinner from '../../components/Spinner';
import './styles.css';
import Header from '../../components/Header';

export default function DiaryPageView() {
  const historyDate = useSelector(diarySelectors.getHistoryDate);
  const today = useSelector(diarySelectors.getToday);
  const renderForm = historyDate === today;

  return (
    <div className="bg-wrapper__diary">
      <Header />
      <div className="diarypage-container">
        <ContainerForDiary>
          <DiaryDateСalendar />
          {renderForm ? <DiaryAddProductForm /> : null}
          <DiaryProductsList />
        </ContainerForDiary>
        <Sidebar />
      </div>
    </div>
  );
}
