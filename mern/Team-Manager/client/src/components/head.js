import React from 'react'
import { Link } from '@reach/router'
const Head = () => {
    return (
        <div>
            <p><Link to="/">Manage Players</Link> || <Link to="/game/1">Manage Players Status</Link> </p>
        </div>
    )
}

export default Head
