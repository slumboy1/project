import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [statusValue, setStatusValue] = useState(75); // 임의의 상태 값을 설정합니다.
  
  function updateDateDisplay() {
    return currentDate.toISOString().split('T')[0];
  }

  function handlePrevDate() {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  }

  function handleNextDate() {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  }

  function getStatusEmoji(value) {
    if (value > 80) return "😎"; // 상태 값이 80보다 크면 '최고'
    if (value > 60) return "😊"; // 상태 값이 60보다 크면 '좋음'
    if (value > 40) return "😐"; // 상태 값이 40보다 크면 '보통'
    return "😟"; // 상태 값이 40 이하이면 '나쁨'
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* 좌측 상단 정렬 버튼 그룹 */}
        <div className="button-container">
          <button className="button">1. 자외선</button>
          <button className="button">2. 체감온도</button>
        </div>
        
        {/* 중앙 정렬 버튼 그룹 */}
        <div className="button-container center">
          <button className="button">오전</button>
          <button className="button">오후</button>
          <button className="button">저녁</button>

          <div className="status-box">
            <span className="status-text">오늘 지수/ 온도는</span>
            <span className="status-emoji">{getStatusEmoji(statusValue)}</span>
          </div>
        </div>

        <img src={logo} className="App-logo" alt="React Logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* 날짜 관련 요소들 */}
        <div>
          <button id="prev-date" onClick={handlePrevDate}>Previous Date</button>
          <span id="current-date">{updateDateDisplay()}</span>
          <button id="next-date" onClick={handleNextDate}>Next Date</button>
        </div>
      </header>
    </div>
  );
}

export default App;
