import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import Sidebar from '../../components/Sidebar';
import './styles.css';
const DiaryPageView = () => {
  return (
    <div className="diary-view">
      <ContainerForDiary>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </ContainerForDiary>
      <Sidebar />
    </div>
  );
};
export default DiaryPageView;
