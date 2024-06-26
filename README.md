# TCFTeam_GenAIHackathon2024

Sử dụng trí tuệ nhân tạo (AI) để tự động ra đề thi Tiếng anh THPT Quốc Gia và cá nhân hóa quá trình học tập môn Tiếng anh

### Folder structure

```
TCFTEAM_GENAIHACKATHON2024/
├── config/
├── controllers/
├── data/
├── frontend/
│ ├── node_modules/
│ ├── public/
│ └── src/
│   ├── components/
│   ├── screens/
│   ├── slices/
│   └── utils/
│ ├── App.js
│ ├── constants.js
│ ├── index.js
│ ├── store.js
│ ├── package-lock.json
│ ├── package.json
│ └── README.md
├── middleware/
├── models/
├── node_modules/
├── routes/
├── utils/
├── .env
├── .gitignore
├── .prettierrc
├── example.env
├── index.js
├── package-lock.json
├── package.json
├── README.md
└── seeder.js
```

### Main files and folders

- _config/_: Configuration files for environment variables and database connections.
- _controllers/_: Logic for processing requests and returning responses.
- _data/_: Initial data sets or database seeds.
- _frontend/_: Frontend application source code.
  - _public/_: Public assets like HTML files and images.
  - _src/_: React application source code (components, screens, state management, utilities).
    - _components/_: Reusable React components.
    - _screens/_: Components representing different screens or pages of the application.
    - _slices/_: Redux slices for state management.
    - _utils/_: Utility functions and helper methods.
  - _App.js_: Root component of the React application.
  - _index.js_: Entry point for the React application.
  - _store.js_: Redux store configuration.
  - _package.json_: Frontend dependencies and scripts.
- _middleware/_: Custom middleware functions.
- _models/_: Data models and schemas.
- _routes/_: API endpoints and route definitions.
- _utils/_: Utility functions and helper methods.
- _.env_: Environment variables.
- _.gitignore_: Specifies files and directories to be ignored by Git.
- _index.js_: Entry point for the backend application.
- _package.json_: Backend dependencies and scripts.
- _README.md:_ Project documentation.
- _seeder.js_: Script to seed the database with initial data.
