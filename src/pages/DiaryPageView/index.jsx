import React, { useEffect, useSelector } from 'react';
import { diaryOperations, diarySelectors } from '../../redux/diary';
import { useDispatch } from 'react-redux';

import ContainerForDiary from '../../components/ContainerForDiary';
import DiaryDateСalendar from '../../components/DiaryDateСalendar';
import DiaryAddProductForm from '../../components/DiaryAddProductForm';
import DiaryProductsList from '../../components/DiaryProductsList';
import Sidebar from '../../components/Sidebar';
import './styles.css';
import Header from '../../components/Header';

export default function DiaryPageView() {
  // const dispatch = useDispatch();

  // const date = new Date().toLocaleDateString().split('.').reverse().join('-');
  // useEffect(() => {
  //   dispatch(diaryOperations.fetchHistory({ date }));
  // }, []);

  return (
    <div className="bg-wrapper__diary">
      <Header />
      <div className="diarypage-container">
        <ContainerForDiary>
          <DiaryDateСalendar />
          <DiaryAddProductForm />
          <DiaryProductsList />
        </ContainerForDiary>
        <Sidebar />
      </div>
    </div>
  );
}
