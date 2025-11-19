# pays_dashboard

<프로젝트 소개>

* 결제/가맹점 데이터를 기반으로 매출 분석 및 조회 기능을 제공하는 관리자 대시보드

* 올페이즈 과제전형 제출용


<기술 스택>

* Next.js (App Router)

* TypeScript

* Tailwind CSS

* Material UI (MUI)

* Chart.js

* API 연동: https://recruit.paysbypays.com/api/v1/*


<기능 목록>

1) 대시보드

* 총 매출액 / 총 거래건수 / 가맹점 수 표시

* 결제 성공·실패·환불 수량 표시

* 결제 성공률 차트 시각화

* 최근 거래내역 (스크롤 리스트)

* 가맹점 매출순 Ranking (높은순/낮은순 정렬)

2) 거래내역 조회 페이지

* 상태별 필터 (전체/성공/실패/환불)

* 가맹점별 필터

* 날짜별 조회

* 검색(결제코드/가맹점명)

* 페이지네이션

* URL 쿼리로 상태분기 (예: ?status=SUCCESS)


<실행 방법>

npm install
npm run dev


<프로젝트 구조>

app/
├─ components/
│  ├─ Chart.tsx            
│  └─ Sidebar.tsx          
│
├─ dashboard/
│  └─ page.tsx            
│
├─ transactions/
│  └─ page.tsx            
│
├─ favicon.ico
├─ globals.css             
├─ layout.tsx             
└─ page.tsx 

