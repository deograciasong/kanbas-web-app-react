import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function FillInTheBlanks({
    question,
    setQuestion
}: {
    question: any;
    setQuestion: React.Dispatch<React.SetStateAction<any>>;
}) {
    const handleCorrectAnswerChange = (index: number, value: string) => {
        const newCorrectAnswers = [...question.correctAnswers];
        newCorrectAnswers[index] = value;
        setQuestion((prev: any) => ({ ...prev, correctAnswers: newCorrectAnswers }));
        console.log(question.correctAnswers);
    };

    const addCorrectAnswer = () => {
        setQuestion((prev: any) => ({ ...prev, correctAnswers: [...prev.correctAnswers, ''] }));
    };

    const removeCorrectAnswer = (index: number) => {
        const newCorrectAnswers = question.correctAnswers.filter((_: any, i: number) => i !== index);
        setQuestion((prev: any) => ({ ...prev, correctAnswers: newCorrectAnswers }));
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="points" className="form-label">Points</label>
                <input
                    id="points"
                    type="number"
                    className="form-control"
                    value={question.points}
                    onChange={(e) => setQuestion((prev: any) => ({ ...prev, points: Number(e.target.value) }))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="question-text" className="form-label">Question</label>
                <ReactQuill
                    id="question-text"
                    value={question.text}
                    onChange={(value) => setQuestion((prev: any) => ({ ...prev, text: value }))}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="correct-answer" className="form-label">Correct Answer</label>
                <input
                    id="correct-answer"
                    type="text"
                    className="form-control"
                    value={question.correctAnswer}
                    onChange={(e) => setQuestion((prev: any) => ({ ...prev, correctAnswer: e.target.value }))}
                />
            </div>
        </div>
    );
}