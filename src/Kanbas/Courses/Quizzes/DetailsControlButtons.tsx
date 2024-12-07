import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DetailsControlButtons () {
    const { cid, qid } = useParams();
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${qid}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
            <button className="btn btn-secondary me-2">Preview</button>
            <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
        </div>
    );
};
