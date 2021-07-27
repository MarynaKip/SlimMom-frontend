import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
// import './styles.css';
const DiaryPageView = () => {
  return (
    <div>
      <ContainerForDiary>
        <DiaryDateСalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </ContainerForDiary>
    </div>
  );
};
export default DiaryPageView;
