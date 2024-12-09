import React, { useEffect, useState } from 'react';
import QuestionEditor from './QuestionEditor';
import { LiaThermometerThreeQuartersSolid } from 'react-icons/lia';
import { Link, useParams } from 'react-router-dom';
import * as quizClient from './client';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestion, addQuestion, deleteQuestion, updateQuestion } from './questionReducer';

export default function QuestionControl() {
    const { cid, qid } = useParams();
    const newQuestionId = new Date().getTime().toString();
    const [questionName, setQuestionName] = useState("");
    const [quiz, setQuiz] = useState({
        questions: [
            { id: 1, title: 'Question 1', type: 'True/False', text: 'Is the sky blue?', choices: ['True', 'False'], points: 5 },
            { id: 2, title: 'Question 2', type: 'Multiple Choice', text: 'What is 2 + 2?', choices: ['3', '4', '5'], points: 10 },
            // Add more questions as needed
        ]
    });

    const { questions } = useSelector((state: any) => state.questionReducer);
    const dispatch = useDispatch();

    const fetchQuestions = async () => {
        const Questions = await quizClient.findQuestionsForQuiz(qid as string);
        dispatch(setQuestion(Questions));
    };
    useEffect(() => {
        fetchQuestions();
    }, []);
    console.log("qid:", qid);
    console.log("questions:", questions);

    const createQuestionForQuiz = async () => {
        if (!qid) return;
        const newQuestion = { name: questionName, quiz: qid };
        const question = await quizClient.createQuestionForQuiz(cid, newQuestion);
        dispatch(addQuestion(question));
    };

    const removeQuestion = async (qid: string, questionId: string) => {
        await quizClient.deleteQuestion(qid, questionId);
        dispatch(deleteQuestion(questionId));
    };


    const handleDelete = (id: number) => {
        setQuiz((prevQuiz) => ({
            ...prevQuiz,
            questions: prevQuiz.questions.filter((question) => question.id !== id)
        }));
    };

    const handleSave = () => {
        // Logic to save the quiz
        console.log('Quiz saved:', quiz);
    };

    const handleCancel = () => {
        // Logic to cancel the operation
        console.log('Operation cancelled');
    };

    return (
        <div className="container">
            <h1>Question Editor</h1><br />
            <div className="d-flex justify-content-center mb-3">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/${newQuestionId}`}>
                    <button className="btn btn-secondary btn-lg" >+ New Question</button>
                </Link>
            </div>            <br /><hr />
            <div>
                {quiz.questions.map((question) => (
                    <div key={question.id} className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title"><strong>{question.title}</strong></h5>
                                <div>
                                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/${question.id}`}>
                                        <button className="btn btn-secondary me-2">Edit</button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(question.id)}>Delete</button>
                                </div>
                            </div>
                            <p className="card-text"><strong>Question:</strong> {question.text}</p>
                            <p className="card-text"><strong>Choices:</strong> {question.choices.join(', ')}</p>
                            <p className="card-text"><strong>Points:</strong> {question.points}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}