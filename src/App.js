import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the size of these Melons?',
			answerOptions: [
				{ answerText: 'Where art thou', isCorrect: 1 },
				{ answerText: 'Kansas flat', isCorrect: 2 },
				{ answerText: 'Eh', isCorrect: 4 },
				{ answerText: 'Petite', isCorrect: 6},
				{ answerText: 'Average You Say?', isCorrect: 7 },
				{ answerText: 'Definitly some Melons', isCorrect: 6 },
				{ answerText: 'MILF Level', isCorrect: 4 },
				{ answerText: 'Suffocation is Possible', isCorrect: 4 },
				{ answerText: 'Freakin Milkers', isCorrect: 3 }
			],
		},
		{
			questionText: 'Lets talk about Perkiness/Sag, what say you?',
			answerOptions: [
				{ answerText: 'Freakin Eifle Tower', isCorrect: 5 },
				{ answerText: 'It must be below Zero Out', isCorrect: 7 },
				{ answerText: 'Honestly Noice', isCorrect: 7 },
				{ answerText: 'I can work with these', isCorrect: 5 },
				{ answerText: 'Average You Say?', isCorrect: 4 },
				{ answerText: 'Back issues may be there', isCorrect: 4 },
				{ answerText: 'MILF Level', isCorrect: 5 },
				{ answerText: 'Old Lady', isCorrect: 2 },
				{ answerText: 'Basically an udder', isCorrect: 2 }
			],
		},
		{
			questionText: 'Hows thee Nipples?',
			answerOptions: [
				{ answerText: 'Dots', isCorrect: 1 },
				{ answerText: 'Hairy', isCorrect: 0 },
				{ answerText: 'Normal', isCorrect: 3 },
				{ answerText: 'Pokey', isCorrect: 7 },
				{ answerText: 'Honkers', isCorrect: 7 }
			],
		},
		{
			questionText: 'Natural or Not?',
			answerOptions: [
				{ answerText: 'Yee', isCorrect: 9 },
				{ answerText: 'Nah', isCorrect: 2 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + isCorrect);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {30}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
