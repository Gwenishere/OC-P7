import React from 'react';

class Footer extends React.Component
{
    render ()
    {
        return (
        <footer className="footer">
            <div className="footcontainer">
             <ul>
                <li className="footer_title">Site</li>
                <li>Support technique</li>
                <li>Contact</li>
             </ul>
            </div>
            <div className="footcontainer">
             <ul>
                <li className="footer_title">Termes</li>
                <li>Code de conduite</li>
                <li>Données personnelles</li>
             </ul>
            </div>
            <div className="footcontainer">
             <ul>
                <li className="footer_title">Compagnie</li>
                <li>Groupomania le site officiel</li>
                <li>Actualité CSE</li>
             </ul>
            </div>
        </footer>
        )
    }
}
  export default Footer