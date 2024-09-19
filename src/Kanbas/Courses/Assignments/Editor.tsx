export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online. Submit a link to the landing page of your 
          Web application running on Netlify. The landing page should include the following: 
          your full name and section, links to each of the lab assignments, link to the Kanbas 
          application, and links to all relevant source code repositories. The Kanbas application 
          should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
            {/* Points */}
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr><br />


            {/* Assignment Group */}
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                    <option selected value="Assignments">ASSIGNMENTS</option>
                    <option value="QUIZZES">QUIZZES</option>
                    <option value="EXAMS">EXAMS</option>
                    <option value="PROJECT">PROJECT</option>
                    </select>
                </td>
            </tr><br />


            {/* Display Grade as */}
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                    <option selected value="PERCENTAGE">PERCENTAGE</option>
                    <option value="DECIMAL">DECIMAL</option>
                    </select>
                </td>
            </tr><br />


            {/* Submission Type */}
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                    <option selected value="ONLINE">ONLINE</option>
                    </select>
                </td>
            </tr>

            {/* Online Entry Options */}
            <tr>
                <td></td>
                <td>
                    <label>Online Entry Options</label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                <input type="checkbox" name="check-online-options" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-online-options" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-online-options" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-online-options" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-online-options" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Upload</label>
                </td>
            </tr><br/>


            {/* Assign Assign to */}
            <tr>
                <td align="right" valign="top">
                    <label>Assign</label>
                </td>
                <label htmlFor="wd-assign-to">Assign to</label>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input id="wd-assign-to" value={"Everyone"} />
                </td>
            </tr><br />


            {/* Due Date */}
            <tr>
                <td></td>
                <td>
                    <label htmlFor="wd-due-date">Due</label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="date" id="wd-due-date" value="2024-05-13"/><br/>
                </td>
            </tr><br/>


            {/* Available Until */}
            <tr>
                <td></td>
                <td>
                    <label htmlFor="wd-available-from">Available from</label>
                </td>
                <td>
                    <label htmlFor="wd-available-until">Until</label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="date" id="wd-available-from" value="2024-05-06"/>
                </td>
                <td>
                    <input type="date" id="wd-available-until" value="2024-05-20"/><br/>
                </td>
            </tr>

            {/* Buttons at the Bottom */}
            <tr>
                <td></td><td></td>
                <td>
                    <div style={{ textAlign: 'right', paddingTop: '10px' }}>
                    <button>Cancel</button>
                    <button>Save</button>
                    </div>
                </td>
            </tr>      
                  
        </table>
      </div>
  );}
  