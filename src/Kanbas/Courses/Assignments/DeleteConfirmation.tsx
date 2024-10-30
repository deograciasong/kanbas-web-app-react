export default function DeleteConfirmation(
    { assignmentId, assignmentName, deleteAssignment, modalId}:
    { assignmentName: string; assignmentId: string; 
        deleteAssignment: (assignmentId: string) => void; 
        modalId: string;}) {
      return (
        <div id={modalId} className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Are you sure you want to delete this assignment: {assignmentName}?</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <button type="button" className="btn btn-secondary mx-2" data-bs-dismiss="modal">
                  No </button>
                <button onClick={() => deleteAssignment(assignmentId)} 
                type="button" data-bs-dismiss="modal" className="btn btn-danger mx-2">
                  Yes </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    