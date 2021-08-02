import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import Sidebar from '../../components/Sidebar';
import './styles.css';
import Header from '../../components/Header';
const DiaryPageView = () => {
  return (
    <div className="bg-wrapper__diary">
      <Header />
      <div className="diarypage-container">
        <ContainerForDiary>
          <div className="data-picker">
            <DiaryDateСalendar />
          </div>
          <DiaryAddProductForm />
          <DiaryProductsList />
        </ContainerForDiary>
        <Sidebar />
      </div>
    </div>
  );
};
export default DiaryPageView;
