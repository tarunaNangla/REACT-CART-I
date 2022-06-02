import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div class="footer">
        {/* socialmedia, faq,job */}

        <div>
        <Link to="/social">Social Media</Link>
        </div>
        <div>
        <Link to="/faq">F.A.Q</Link>
        </div>
        <div>
        <Link to="/job">Job Oppertunities</Link>
        </div>

      
    </div>
  )
}

export default Footer
