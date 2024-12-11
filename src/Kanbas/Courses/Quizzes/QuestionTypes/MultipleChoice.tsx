import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MultipleChoice({
    question,
    setQuestion
}: {
    question: any;
    setQuestion: React.Dispatch<React.SetStateAction<any>>;
}) {
    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...question.choices];
        newOptions[index] = value;
        setQuestion((prev: any) => ({ ...prev, choices: newOptions }));
    };

    const addOption = () => {
        setQuestion((prev: any) => ({ ...prev, choices: [...prev.choices, ''] }));
    };

    const removeOption = (index: number) => {
        const newOptions = question.choices.filter((_: any, i: any) => i !== index);
        setQuestion((prev: any) => ({ ...prev, choices: newOptions }));
    };

    const handleCorrectAnswerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setQuestion((prev: any) => ({ ...prev, correctAnswer: e.target.value }));
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
                <label className="form-label">Options</label>
                {question.choices.map((option: string, index: number) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                        />
                        <button className="btn btn-danger" onClick={() => removeOption(index)}>Remove</button>
                    </div>
                ))}
                <button className="btn btn-secondary" onClick={addOption}>Add Option</button>
            </div>
            <div className="mb-3">
                <label htmlFor="correct-answer" className="form-label">Correct Answer</label>
                <select
                    id="correct-answer"
                    className="form-control"
                    value={question.correctAnswer}
                    onChange={handleCorrectAnswerChange}
                >
                    <option value="">Select Correct Answer</option>
                    {question.choices.map((option: string, index: number) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}