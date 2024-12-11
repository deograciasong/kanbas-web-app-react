import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TrueOrFalse from './QuestionTypes/TrueOrFalse';
import FillInTheBlanks from './QuestionTypes/FillInTheBlanks';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from './questionReducer';
import * as quizClient from './client';


export default function QuestionEditor() {
    const navigate = useNavigate();
    const { cid, qid, questionId } = useParams();
    const [questions, setQuestions] = useState<any[]>([]);

    const initialQuestion = {
        _id: questionId,
        title: "",
        quiz: qid,
        points: 0,
        choices: [],
        type: "Multiple Choice",
        correctAnswers: "",
        text: "",
    }

    const [question, setQuestion] = useState(initialQuestion);

    const fetchQuestion = async () => {
        const question = await quizClient.findQuestionById(questionId, qid);
        setQuestion(question);
    }

    const getAllQuestions = async () => {
        const fetchedQuestions = await quizClient.findQuestionsForQuiz(qid as string);
        setQuestions(fetchedQuestions);
    }
    useEffect(() => {
        getAllQuestions();
    }
        , []);



    const dispatch = useDispatch();
    const isEditing = questions.some((question: any) => question._id === questionId);

    const handleSave = async () => {
        if (isEditing) {
            const updatedQuestion = await quizClient.updateQuestion(qid, question);
            dispatch(updateQuestion({ ...updatedQuestion, _id: questionId }));
        } else {
            const newQuestion = await quizClient.createQuestionForQuiz(qid, question);
            dispatch(addQuestion(newQuestion));
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    };


    useEffect(() => {
        if (isEditing) {
            fetchQuestion();
        }
    }, [isEditing]);



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
                        value={question.title}
                        onChange={(e) => setQuestion((prev) => ({ ...prev, title: e.target.value }))}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="question-type" className="form-label">Question Type</label>
                    <select
                        id="question-type"
                        className="form-control"
                        value={question.type}
                        onChange={(e) => setQuestion((prev) => ({ ...prev, type: e.target.value }))}
                    >
                        <option value="True/False">True/False</option>
                        <option value="Fill in the blank">Fill in the blank</option>
                        <option value="Multiple Choice">Multiple Choice</option>
                    </select>
                </div>
            </div>
            {question.type === 'True/False' && (
                <TrueOrFalse
                    question={question}
                    setQuestion={setQuestion}
                />
            )}
            {question.type === 'Fill in the blank' && (
                <FillInTheBlanks
                    question={question}
                    setQuestion={setQuestion}
                />
            )}
            {question.type === 'Multiple Choice' && (
                <MultipleChoice
                    question={question}
                    setQuestion={setQuestion}
                />
            )}
            <hr />
            <hr />
            <div className="d-flex justify-content-start">
                <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-danger" onClick={handleSave}>Save</button>
            </div>
        </div>
    );
}