# Mittal Soham - Portfolio Website (coding_assignment_14)

This is a React portfolio website built using TypeScript, styled-components, and reusable component patterns. The project demonstrates skills in React development, testing, Docker deployment, and CI/CD pipeline setup.

## Features

- **React with TypeScript** for type safety and better development experience
- **Styled Components** for component-scoped styling
- **Reusable Component Architecture** following best practices
- **ESLint and Prettier** for code quality and consistent formatting
- **Husky and lint-staged** for automated pre-commit checks
- **Comprehensive Unit Tests** with React Testing Library
- **Dockerized Deployment** for production-ready containerization
- **CI/CD Pipeline** with GitHub Actions for automated testing and builds

## Portfolio Sections

The portfolio website includes the following sections:

- **Basic Information**: Name, email, and description
- **Work**: Project showcase with title, description, image, link, and tech stack
- **Skills**: List of technical skills with descriptions
- **Languages and Frameworks**: Programming languages and frameworks used
- **Tools**: Development tools and platforms
- **Resources**: Helpful resources with links and summaries
- **Developer Setup**: VSCode setup, terminal configuration, and preferred editor font

## Prerequisites

- Node.js (v18 or later)
- npm (comes with Node.js)
- Docker Desktop (for containerized deployment)

## Installation and Setup

### Local Development

1. Clone or download the project:
   ```bash
   cd ~/Desktop/coding_assignment_14
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to `http://localhost:3000` to view the portfolio site.

### Available Scripts

- **`npm start`**: Runs the app in development mode
- **`npm test`**: Runs the test suite
- **`npm run build`**: Builds the app for production
- **`npm run lint`**: Runs ESLint to check code quality
- **`npm run lint:fix`**: Automatically fixes ESLint errors
- **`npm run format`**: Formats code with Prettier

## Testing

Run the test suite with coverage:

```bash
npm test -- --coverage --watchAll=false
```

All portfolio components have comprehensive unit tests with 100% coverage.

## Docker Deployment

### Build the Docker Image

```bash
docker build -t mittal_soham_coding_assignment14 .
```

### Run the Container

```bash
docker run -d -p 5575:5575 --name mittal_soham_coding_assignment14 mittal_soham_coding_assignment14
```

### Access the Application

Open your browser and navigate to:
- `http://localhost:5575`
- or `http://127.0.0.1:5575`

### Stop and Remove Container

```bash
docker stop mittal_soham_coding_assignment14
docker rm mittal_soham_coding_assignment14
```

## Project Structure

```
coding_assignment_14/
├── public/                 # Static files
├── src/
│   ├── components/         # React components
│   │   ├── BasicInfo/
│   │   ├── Work/
│   │   ├── Skills/
│   │   ├── LanguagesFrameworks/
│   │   ├── Tools/
│   │   ├── Resources/
│   │   ├── DeveloperSetup/
│   │   └── __tests__/      # Component tests
│   ├── App.tsx             # Main application component
│   ├── index.js            # Application entry point
│   └── setupTests.ts       # Test configuration
├── .github/
│   └── workflows/
│       └── ci-cd.yml       # CI/CD pipeline configuration
├── .husky/                 # Git hooks
├── Dockerfile              # Docker configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## CI/CD Pipeline

The project includes a GitHub Actions workflow that:

1. **Lints** the code on every push and pull request
2. **Runs tests** with coverage reporting
3. **Builds** the production bundle
4. Ensures code quality before merging

The pipeline is configured in `.github/workflows/ci-cd.yml`.

## Development Workflow

1. Make changes to the code
2. Pre-commit hooks automatically run:
   - ESLint checks and fixes
   - Prettier formatting
3. Commit your changes
4. Push to GitHub
5. CI/CD pipeline runs automatically
6. Review test results and build status

## Technologies Used

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling
- **React Testing Library** - Component testing
- **Jest** - Test runner
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Docker** - Containerization
- **GitHub Actions** - CI/CD automation

## Assignment Requirements Met

✅ Built a portfolio website highlighting coursework  
✅ Used component library patterns and best practices  
✅ Dockerized create-react-app with production build  
✅ Container runs at localhost:5575 (127.0.0.1:5575)  
✅ Container named "mittal_soham_coding_assignment14"  
✅ Working directory "mittal_soham_final_site"  
✅ Includes all required portfolio sections  
✅ CI/CD pipeline for automated testing and builds  
✅ Comprehensive README with setup instructions  

## Author

Soham Mittal

## License

This project is for educational purposes as part of a coding assignment.
# Mittal_soham_coding_assignment_14
