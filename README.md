# 한성린_프론트엔드 휴멜로 과제


### 요구사항

1. 제공된 API를 통해 ID-이름 목록과 글자 목록을 가져오고 렌더링 해 주세요.
    - [x] 글자 목록은 multi-selection이 가능해야 합니다.
2. 이름 검색을 위한 검색 바를 구현해 주세요.
    - [x] 검색어 매칭 규칙은 정해져 있지 않습니다. 자유롭게 구현해 주세요.
3. ID 필터링 기능을 글자 목록의 숫자, 대문자, 소문자를 이용해 아래의 규칙을 따르도록 구현해 주세요.
    - [x] 같은 카테고리 내에서는 *OR* 조건으로 필터링해 주세요.
    - [x] 다른 카테고리 간에는 *AND* 조건으로 필터링해 주세요.
4. 이름 검색과 ID 필터링을 같이 적용할 수 있게 해 주세요.
    - [x] AND와 OR 조건 중 하나를 선택하실 수 있습니다. **(저는 AND 조건으로 했습니다.)**
5. 필터링 결과 아이템들을 적절한 UI로 표시해 주세요.


## 🕹️ 실행 방법
```ts
$ git clone https://github.com/Sungrinhan/frontend-humelo.git
$ cd 레포지토리 이름
$ yarn install
$ npm run dev
```
## 🛠️ 기술 스택(추가한 것)
<!-- Redux Toolkit -->
<img src="https://img.shields.io/badge/redux tooklit-764ABC?style=for-the-badge&logo=redux&logoColor=white">


## 📂 폴더구조

📦src
 ┣ 📂components
 ┃ ┣ 📜SearchBox.tsx
 ┃ ┗ 📜UserTable.tsx
 ┣ 📂constants
 ┣ 📂hooks
 ┃ ┣ 📜useCheckInput.ts
 ┃ ┣ 📜useGetLetterList.ts
 ┃ ┗ 📜useGetUserList.ts
 ┣ 📂store
 ┃ ┣ 📂reducers
 ┃ ┃ ┗ 📜user.ts
 ┃ ┣ 📂services
 ┃ ┃ ┗ 📜user.ts
 ┃ ┗ 📜index.ts
 ┣ 📂types
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┗ 📜FilteredUserList.ts
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
