import React from 'react';

class Footer extends React.Component
{
    render ()
    {
        return (
        <footer className="d-flex justify-content-around">
            <div className="footcontainer">
             <ul>
                <li>Support technique</li>
                <li>Contact</li>
             </ul>
            </div>
            <div className="footcontainer">
             <ul>
                <li>Code de conduite</li>
             </ul>
            </div>
            <div className="footcontainer">
             <ul>
                <li>Groupomania le site officiel</li>
                <li>Actualité CSE</li>
             </ul>
            </div>
        </footer>
        )
    }
}
  export default Footer