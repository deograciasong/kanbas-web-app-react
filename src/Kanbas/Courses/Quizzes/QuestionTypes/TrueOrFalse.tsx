import { useState } from "react";

export default function TrueOrFalse({
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
                        <label className="form-label">Correct Answer</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="correctAnswer"
                                    id="true"
                                    value="True"
                                    checked={correctAnswer === 'True'}
                                    onChange={(e) => setCorrectAnswer(e.target.value)}
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
                                    checked={correctAnswer === 'False'}
                                    onChange={(e) => setCorrectAnswer(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="false">False</label>
                            </div>
                        </div>
                    </div>
                </div>
                );}
