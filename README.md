# IQ Calculator

A modern web application that evaluates cognitive abilities through interactive questions testing logical reasoning, pattern recognition, and mathematical aptitude.

![IQ Calculator Screenshot](https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2070)

## Features

- **Multiple Question Types**
  - Logical reasoning questions
  - Pattern recognition challenges
  - Mathematical aptitude tests

- **Interactive UI**
  - Real-time progress tracking
  - Smooth transitions between questions
  - Responsive design for all devices
  - Beautiful, clean interface

- **Comprehensive Results**
  - Calculated IQ score
  - Performance breakdown by category
  - Success rate analysis
  - Detailed statistics

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone [https://github.com/CHANDIGARH-UNIVERSITY-DOMAIN-CAMP-2024/project-Ishu154]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server URL provided by Vite

## Project Structure

```
src/
├── components/         # React components
│   ├── Question.tsx   # Question display component
│   └── Results.tsx    # Results display component
├── data/
│   └── questions.ts   # Question database
├── types/
│   └── index.ts       # TypeScript type definitions
├── App.tsx            # Main application component
└── main.tsx          # Application entry point
```

## Usage

1. Start the test by clicking through the questions
2. Select your answer for each question
3. Track your progress through the progress bar
4. View your results, including:
   - IQ score
   - Category performance
   - Overall success rate
5. Retry the test if desired

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Questions

To add new questions, modify the `src/data/questions.ts` file following the existing question format:

```typescript
{
  id: number,
  type: 'logical' | 'pattern' | 'mathematical',
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Brain icon provided by [Lucide Icons](https://lucide.dev)
- UI design inspired by modern cognitive assessment tools
- Test questions designed based on standard IQ test patterns
