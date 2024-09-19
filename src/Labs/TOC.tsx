import {Link} from 'react-router-dom';
export default function TOC() {
    return (
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        <li><a href="https://github.com/deograciasong/kanbas-web-app-react" id="wd-github-link" target="_blank">Github</a><br/></li>
      </ul>
    );
  }
  