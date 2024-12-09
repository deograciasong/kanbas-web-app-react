import React from 'react';

export default function MultipleChoice({
    questionTitle,
    setQuestionTitle,
    points,
    setPoints,
    questionText,
    setQuestionText,
    correctAnswer,
    setCorrectAnswer,
    options,
    setOptions
}: {
    questionTitle: string;
    setQuestionTitle: (title: string) => void;
    points: number;
    setPoints: (points: number) => void;
    questionText: string;
    setQuestionText: (text: string) => void;
    correctAnswer: string;
    setCorrectAnswer: (answer: string) => void;
    options: string[];
    setOptions: (options: string[]) => void;
}) {
    const handleOptionChange = (index: number, value: string) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const addOption = () => {
        setOptions([...options, '']);
    };

    const removeOption = (index: number) => {
        const newOptions = options.filter((_, i) => i !== index);
        setOptions(newOptions);
    };

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="question-title" className="form-label">Title</label>
                <input
                    id="question-title"
                    type="text"
                    className="form-control"
                    value={questionTitle}
                    onChange={(e) => setQuestionTitle(e.target.value)}
                />
            </div>
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
                <label className="form-label me-2">Options</label>
                {options.map((option, index) => (
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
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}