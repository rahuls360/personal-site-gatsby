import React from 'react';

const Header = () => (
    <ul style={{color: 'darksalmon', display: 'flex', listStyle:'none', justifyContent: 'space-around', padding: '20px 0', background: "orange" }}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Blog</a></li>
        <li><a href="/">Contact</a></li>
    </ul>
)

export default Header;