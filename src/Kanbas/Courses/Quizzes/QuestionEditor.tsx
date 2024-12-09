import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TrueOrFalse from './QuestionTypes/TrueOrFalse';
import FillInTheBlanks from './QuestionTypes/FillInTheBlanks';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import { useDispatch } from 'react-redux';
import { setQuestion, addQuestion, deleteQuestion, updateQuestion } from './questionReducer';
import * as quizClient from './client';


export default function QuestionEditor() {
    const navigate = useNavigate();
    const { cid, qid } = useParams();

    const [questionType, setQuestionType] = useState('True/False');
    const [questionTitle, setQuestionTitle] = useState('');
    const [points, setPoints] = useState(0);
    const [questionText, setQuestionText] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [options, setOptions] = useState<string[]>(['']);

    const [questionName, setQuestionName] = useState("");
    const dispatch = useDispatch();

    const handleSave = async () => {
        await createQuestionForQuiz();
        console.log('Question saved');
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`); // Navigate back to the QuestionControl screen
    };

    const handleCancel = () => {
        // Logic to cancel the operation
        console.log('Operation cancelled');
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`); // Navigate back to the QuestionControl screen
    };

    const createQuestionForQuiz = async () => {
        if (!qid) return;
        const newQuestion = { name: questionName, quiz: qid };
        const question = await quizClient.createQuestionForQuiz(qid, newQuestion);
        dispatch(addQuestion(question));
    };

    return (
        <div className="container">
            <h1>Question Editor</h1>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="question-title" className="form-label">Title</label>
                    <input
                        id="question-title"
                        type="text"
                        className="form-control"
                        value={questionTitle}
                        onChange={(e) => setQuestionTitle(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="question-type" className="form-label">Question Type</label>
                    <select
                        id="question-type"
                        className="form-control"
                        value={questionType}
                        onChange={(e) => setQuestionType(e.target.value)}
                    >
                        <option value="True/False">True/False</option>
                        <option value="Fill in the blank">Fill in the blank</option>
                        <option value="Multiple Choice">Multiple Choice</option>
                    </select>
                </div>
            </div>
            {questionType === 'True/False' && (
                <TrueOrFalse
                    questionTitle={questionTitle}
                    setQuestionTitle={setQuestionTitle}
                    points={points}
                    setPoints={setPoints}
                    questionText={questionText}
                    setQuestionText={setQuestionText}
                    correctAnswer={correctAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                />
            )}
            {questionType === 'Fill in the blank' && (
                <FillInTheBlanks
                    questionTitle={questionTitle}
                    setQuestionTitle={setQuestionTitle}
                    points={points}
                    setPoints={setPoints}
                    questionText={questionText}
                    setQuestionText={setQuestionText}
                    correctAnswer={correctAnswer}
                    setCorrectAnswer={setCorrectAnswer}
                />
            )}
            {questionType === 'Multiple Choice' && (
               <MultipleChoice
               questionTitle={questionTitle}
               setQuestionTitle={setQuestionTitle}
               points={points}
               setPoints={setPoints}
               questionText={questionText}
               setQuestionText={setQuestionText}
               correctAnswer={correctAnswer}
               setCorrectAnswer={setCorrectAnswer}
               options={options}
               setOptions={setOptions}
           />
            )}
            <hr />


            <div className="d-flex justify-content-end">
                <button
                    className="btn btn-lg"
                    style={{ backgroundColor: 'transparent', color: 'red', border: 'none' }}
                    onClick={() => console.log('Adding question')}
                >
                    + New Question
                </button>
            </div>
            <hr />
            <div className="d-flex justify-content-start">
                <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}