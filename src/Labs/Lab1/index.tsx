export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2> Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. 
                Each section is usually prefaced with a short title or heading that attempts 
                to summarize the topic of the section it precedes. For instance this paragraph 
                is preceded by the heading Heading Tags. The font of the section headings are 
                usually larger and bolder than the plain text and their subsection headings. 
                This document uses headings to introduce topics such as HTML Documents, HTML 
                Tags, Heading Tags, etc. HTML heading tags can be used to format plain text 
                so that it renders in a browser as large headings. There are 6 heading tags 
                for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading 
                and h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                This is a paragraph. We often separate a long set of sentences with vertical
                spaces to make the text easier to read. Browsers ignore vertical white spaces
                and render all the text as one single set of sentences. To force the browser 
                to add vertical spacing, wrap the paragraphs you want to separate with the paragraph
                tag
                </p>
                <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format
                vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white
                gap between the paragraph above and this paragraph, by default
                browsers render them as one contiguous piece of text as shown here on
                the right.
                </p>
                <p id="wd-p-4">
                This is the third paragraph. Wrap each paragraph with the paragraph
                tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wdlists">
                <h4>Lists Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">     
                <li>Mix dry ingredients.</li>
                <li>Add wet ingredients.</li>
                <li>Stir to combine.</li>
                <li>Heat a skillet or griddle.</li>
                <li>Pour batter onto the skillet.</li>
                <li>Cook until bubbly on top.</li>
                <li>Flip and cook the other side.</li>
                <li>Serve and enjoy!</li>
                </ol>
                My Favorite Recipe:
                <ol id="wd-your-favorite-recipe">
                <li>Slice porkbelly</li>
                <li>add to a large cast iron pot</li>
                <li>after fully cooked, add kimchi and garlic</li>
                <li>add broth of your choosing</li>
                <li>add MSG, soy sauce, sesame oil, fish sauce, and pepper</li>
                <li>let it come to a boil</li>
                <li>add cubed tofu and zuccini</li>
                <li>stir regularly and enjoy!</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                    <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                    </ul>
                My Favorite Books (in no particular order)
                <ul id="wd-your-books">
                    <li>Fourth Wing</li>
                    <li>Crying in Hmart</li>
                    <li>Ninth House</li>
                </ul>
            </div>
            <div id="wd-tables"> 
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td align="right">85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>HTML</td>
                            <td>2/10/21</td>
                            <td align="right">90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td align="right">95</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td align="center" colSpan={3}>Average</td>
                            <td align="right">90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
            <h4>Image tag</h4>
            Loading an image from the internet:
            <br />
                <img id="wd-starship" alt="starship"
                width="400px"
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                />
            <br />
                Loading a local image:
            <br />
                <img id="wd-teslabot" src="images/gloves.png" height="200px" alt="tesla bot"/>
            </div>
            <div id="wd-forms">
                <h4> Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" id="wd-text-fields-password" value="cowscantrun123" /> <br />
                    <label htmlFor="wd-text-fields-username">First Name:</label>
                    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input type="text" id="wd-text-fields-last-name" placeholder="Doe" 
                    value="Wonderland" title="The last name" />

                    <h5>Text Boxes</h5>
                    <label>Biography:</label><br />
                    <textarea id="wd-textarea" cols={30} rows={10}>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                    for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum 
                    et Malorum" by Cicero are also reproduced in their exact original form, accompanied
                    by English versions from the 1914 translation by H. Rackham.
                    </textarea>

                    <h5 id="wd-buttons">Buttons</h5>
                    <button id="wd-all-good" onClick={() => alert("Thanks! :)")} type="button">
                        Click me!
                    </button>

                    <h5>File Upload</h5>
                    <input id="wd-upload" type="file" />

                    <h5 id="wd-radio-buttons">Radio Buttons</h5>
                    <label>Favorite movie genre:</label><br />
                    <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
                    <label htmlFor="wd-radio-comedy">Comedy</label><br />
                    <input type="radio" name="radio-genre" id="wd-rdaio-drama"/>
                    <label htmlFor="wd-radio-drama">Drama</label><br />
                    <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
                    <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
                    <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
                    <label htmlFor="wd-radio-fantasy">Fantasy</label>   

                    <h5 id="wd-checkboxes">Checkboxes</h5>
                    <label>Favorite movie genre</label><br />
                    <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                    <label htmlFor="wd-chkbox-comedy">Comedy</label><br />
                    <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                    <label htmlFor="wd-chkbox-drama">Drama</label><br/>
                    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                    <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
                    <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                    <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

                    <h4 id="wd-dropdowns">Dropdowns</h4>
                    <h5>Select one</h5>
                    <label htmlFor="wd-select-one-genre">FAvoreite movie genre:</label><br />
                    <select id="wd-select-one-genre">
                        <option value="COMEDY">comedy</option>
                        <option value="DRAMA">drama</option>
                        <option selected value="SCIFI">science fiction</option>
                        <option value="FANTASY">fantasy</option>
                    </select>

                    <h5>Select many</h5>
                    <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
                    <select id="wd-select-many-genre" multiple>
                        <option selected value="COMEDY">Comedy</option>
                        <option value="DRAMA">Drama</option>
                        <option selected value="SCIFI">Science Fiction</option>
                        <option value="FANTASY">Fantasy</option>
                    </select>

                    <h4>Other HTML field types</h4>
                    <label htmlFor="wd-text-fields-email">Email:</label>
                    <input type="email" placeholder="jdoe@gmail.com" id="wd-text-fields-emials"/><br />

                    <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
                    <input type="number" id="wd-text-fields-salary-start" placeholder="1000" value="100000"/><br/>

                    <label htmlFor="wd-text-fields-rating"> Rating: </label>
                    <input type="range" id="wd-text-fields-rating" placeholder="Doe" max="5" value="4"/><br/>

                    <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
                    <input type="date" id="wd-text-fields-dob" value="2000-01-21"/><br/>

                    <h4>Anchor Tag</h4>
                    please
                    <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a>
                    to get dummy text <br />

                </form>
            </div>
        </div>

    
    );
}

