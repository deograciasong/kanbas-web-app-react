import React from 'react';

export default function FillInTheBlanks({
    questionTitle,
    setQuestionTitle,
    points,
    setPoints,
    questionText,
    setQuestionText,
    correctAnswer,
    setCorrectAnswer
}: {
    questionTitle: string;
    setQuestionTitle: (title: string) => void;
    points: number;
    setPoints: (points: number) => void;
    questionText: string;
    setQuestionText: (text: string) => void;
    correctAnswer: string;
    setCorrectAnswer: (answer: string) => void;
}) {
    return (
        <div>
            <div className="mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input
                    id="points"
                    type="number"
                    className="form-control"
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="question-text" className="form-label">Question</label>
                <textarea
                    id="question-text"
                    className="form-control"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="correct-answer" className="form-label">Correct Answer</label>
                <input
                    id="correct-answer"
                    type="text"
                    className="form-control"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                />
            </div>
        </div>
    );
}