import React, { useEffect, useState } from 'react';
import QuestionEditor from './QuestionEditor';
import { LiaThermometerThreeQuartersSolid } from 'react-icons/lia';
import { Link, useParams } from 'react-router-dom';
import * as quizClient from './client';
import { useDispatch, useSelector } from 'react-redux';
import { setQuestions, addQuestion, deleteQuestion, updateQuestion } from './questionReducer';

export default function QuestionControl() {
    const { cid, qid } = useParams();
    const newQuestionId = new Date().getTime().toString();
    const [questionName, setQuestionName] = useState("");
    const [quiz, setQuiz] = useState({
    });

    const [questions, setQuestions] = useState<any[]>([]);
    const dispatch = useDispatch();

    console.log("questions", questions);

    const fetchQuestions = async () => {
        console.log("error:", qid);
        const fetchedQuestions = await quizClient.findQuestionsForQuiz(qid as string);
        console.log("fetchedQuestions", fetchedQuestions);
        setQuestions(fetchedQuestions);
    };
    useEffect(() => {
        fetchQuestions();
    }, [questions]);

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
    console.log("qid", qid);

    const initialQuestion = {
        _id: newQuestionId,
        title: "",
        quiz: qid,
        points: 0,
        choices: [],
        type: "Multiple Choice",
        correctAnswers: "",
        text: "",
    }
    const [question, setQuestion] = useState(initialQuestion);




    return (
        <div className="container">
            <br />
            <div className="d-flex justify-content-center mb-3">
                <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/${newQuestionId}`}>
                    <button className="btn btn-secondary btn-lg" >+ New Question</button>
                </Link>
            </div>            <br />
            <div>
                {questions.map((question: any) => (
                    <div key={question._id} className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title"><strong>{question.title}</strong></h5>
                                <div>
                                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/questions/${question._id}`}>
                                        <button className="btn btn-secondary me-2">Edit</button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => removeQuestion(question.quiz, question._id)}>Delete</button>
                                </div>
                            </div>
                            <p className="card-text"><strong>Question:</strong><p className="card-text" dangerouslySetInnerHTML={{ __html: question.text }} /></p>
                            <p className="card-text"><strong>Choices:</strong> {question.choices.join(', ')}</p>
                            <p className="card-text"><strong>Points:</strong> {question.points}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}