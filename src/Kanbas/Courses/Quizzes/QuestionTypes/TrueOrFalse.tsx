import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function TrueOrFalse({
    question,
    setQuestion
}: {
    question: any;
    setQuestion: React.Dispatch<React.SetStateAction<any>>;
}) {
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
                <label className="form-label">Correct Answer</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="correctAnswer"
                            id="true"
                            value="True"
                            checked={question.correctAnswer === 'True'}
                            onChange={(e) => setQuestion((prev: any) => ({ ...prev, correctAnswer: e.target.value }))}
                        />
                        <label className="form-check-label" htmlFor="true">True</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="correctAnswer"
                            id="false"
                            value="False"
                            checked={question.correctAnswer === 'False'}
                            onChange={(e) => setQuestion((prev: any) => ({ ...prev, correctAnswer: e.target.value }))}
                        />
                        <label className="form-check-label" htmlFor="false">False</label>
                    </div>
                </div>
            </div>
        </div>
    );
}