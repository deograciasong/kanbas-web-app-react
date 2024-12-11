import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as quizClient from './client';
import * as resultsClient from '../Results/client';
import { useDispatch, useSelector } from 'react-redux';
import { addResult, updateResult, setResult } from '../Results/reducer';

export default function TakeQuiz() {
    const { cid, qid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [totalPoints, setTotalPoints] = useState(0);

    const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
    const currentUserId = currentUser?._id;
    const { results } = useSelector((state: any) => state.resultsReducer);
    const isRetaking = results.some((result: any) => result.user === currentUserId);
    const result = results.find((result: any) => result.user === currentUserId)
    const attempts = result?.attempts;
    const resultId = result?._id;
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                console.log('No Error', qid);
                const fetchedQuestions = await quizClient.findQuestionsForQuiz(qid as string);
                setQuestions(fetchedQuestions);
                setAnswers(new Array(fetchedQuestions.length).fill(''));
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };
        if (qid && currentUserId) {
            fetchQuestions();
            getAllResults();
        }
    }, [qid, currentUserId]);

    const getAllResults = async () => {
        const userResults = await quizClient.findResultsForQuiz(qid as string);
        dispatch(setResult(userResults))
    }

    // const fetchResult = async () => {
    //     const quiz = await quizClient.findQuizById(qid);
    //     setQuiz(quiz);
    // }

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = e.target.value;
        setAnswers(newAnswers);
    };

    const handleSubmit = async () => {
        let total = 0;
        let possiblePoints = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correctAnswer) {
                total += question.points;
            }
            possiblePoints += question.points;
        });
        setTotalPoints(total);

        
        const result = {
            _id: resultId,
            quiz: qid,
            user: currentUserId,
            score: total,
            answers: answers,
            attempts: isRetaking ? attempts + 1 : 1,
        };

        

        try {
            if (isRetaking) {
                console.log('Retaking quiz');
                console.log('result:', result);
                const updatedResult = await resultsClient.updateResult(result);
                dispatch(updateResult({ ...updatedResult, _id: resultId }));
            } else {
                console.log('Saving quiz');
                const newResult = await resultsClient.saveResult(qid, result);
                dispatch(addResult(newResult));
            }
            navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}/results`);
        } catch (error) {
            console.error("Error saving/updating result:", error);
        }
    };

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="container">
            <h1>Take Quiz</h1>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{currentQuestion.title}</h5>
                    <p className="card-text">{currentQuestion.text}</p>
                    {currentQuestion.type === 'Multiple Choice' && (
                        <div>
                            {currentQuestion.choices.map((choice: string, index: number) => (
                                <div key={index} className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`choice-${currentQuestionIndex}`}
                                        id={`choice-${index}`}
                                        value={choice}
                                        checked={answers[currentQuestionIndex] === choice}
                                        onChange={handleAnswerChange}
                                    />
                                    <label className="form-check-label" htmlFor={`choice-${index}`}>
                                        {choice}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {currentQuestion.type === 'Fill in the blank' && (
                        <div className="mb-3">
                            <label htmlFor={`fill-blank-${currentQuestionIndex}`} className="form-label">Your Answer</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`fill-blank-${currentQuestionIndex}`}
                                value={answers[currentQuestionIndex] || ''}
                                onChange={handleAnswerChange}
                            />
                        </div>
                    )}
                    {currentQuestion.type === 'True/False' && (
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`choice-${currentQuestionIndex}`}
                                    id={`true-${currentQuestionIndex}`}
                                    value="True"
                                    checked={answers[currentQuestionIndex] === 'True'}
                                    onChange={handleAnswerChange}
                                />
                                <label className="form-check-label" htmlFor={`true-${currentQuestionIndex}`}>
                                    True
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`choice-${currentQuestionIndex}`}
                                    id={`false-${currentQuestionIndex}`}
                                    value="False"
                                    checked={answers[currentQuestionIndex] === 'False'}
                                    onChange={handleAnswerChange}
                                />
                                <label className="form-check-label" htmlFor={`false-${currentQuestionIndex}`}>
                                    False
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handleBack} disabled={currentQuestionIndex === 0}>
                    Back
                </button>
                {currentQuestionIndex < questions.length - 1 ? (
                    <button className="btn btn-danger" onClick={handleNext}>
                        Next
                    </button>
                ) : (
                    <button className="btn btn-danger" onClick={handleSubmit}>
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
}