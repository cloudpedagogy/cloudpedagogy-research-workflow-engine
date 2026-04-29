# Running the System Locally

To view the application locally, follow these steps:

### 1. Build the project
If you haven't already, install dependencies and build the project:
```bash
npm install
npm run build
```

### 2. View Locally
Run the following command to start a local server and view the built application:
```bash
python3 -m http.server 8000 --directory dist
```
Then open your browser to `http://localhost:8000`.
