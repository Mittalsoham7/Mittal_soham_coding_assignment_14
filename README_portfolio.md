# coding_assignment_14 - Portfolio Website

This is a React portfolio website built using TypeScript, styled-components, and reusable component patterns inspired by a UI component library project.

## Features

- React with TypeScript for type safety
- Styled Components for styling
- Reusable component pattern
- ESLint and Prettier for code quality and formatting
- Husky and lint-staged for pre-commit hooks
- Unit tests for components
- Dockerized production build deployment
- CI/CD pipeline for automated testing and deployment (to be configured)

## Portfolio Sections

- Basic Information
- Work (title, description, image, link, tech list)
- Skills
- Languages and Frameworks
- Tools
- Resources
- Developer Setup (VSCode, Terminal, Editor font)

## Developer Setup

### Prerequisites

- Node.js (latest LTS)
- Docker Desktop

### Local Development

1. Clone or download the project
2. Navigate to the project directory:

   ```bash
   cd ~/Desktop/coding_assignment_14
   ```
   
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser to `http://localhost:3000` to view the site.

### Linting and Formatting

- Run ESLint:

  ```bash
  npm run lint
  ```

- Fix lint errors:

  ```bash
  npm run lint:fix
  ```

- Format code with Prettier:

  ```bash
  npm run format
  ```

### Run Tests

```bash
npm test
```

### Docker Deployment

1. Build the Docker image:

   ```bash
   docker build -t lastName_firstName_coding_assignment14 .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 5575:80 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14
   ```

3. Access the site:

   Open your browser and navigate to `http://localhost:5575`

## CI/CD Pipeline

To be configured for automatic testing, building, and deployment on push to repository.
