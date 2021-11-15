function navbar(){
    return` <div id="nav">
    <navbar class="navbar">
        <a href="../index.html"><div class="logo">
            <img src="https://th.bing.com/th?q=LinkedIn+Logo+HD&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&adlt=moderate&t=1&mw=247"
                alt="iN">
            <p>LEARNING</p>
        </div></a>
        <div id="browse">
            <img src="https://img.icons8.com/material-outlined/24/000000/list.png" />
            <div>Browse</div>
        </div>
        <div id="search">
            <input type="text" id="search-input" placeholder="Search for skills, subject or software" />
            <button id="search-btn">
                <img src="https://img.icons8.com/material-rounded/24/000000/search.png" />
            </button>
        </div>
        <div class="right">
            <div><img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" />
                <p>Home</p>
            </div>
            <div><img src="https://img.icons8.com/fluency-systems-filled/24/000000/open-book.png" />
                <p>My Learning</p>
            </div>
                <div id="drop"><img
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/25/000000/external-user-user-flatart-icons-outline-flatarticons-5.png" />
                    <p>User</p>
                </div>
            <div><img src="https://img.icons8.com/ios-glyphs/25/000000/globe-earth--v1.png" />
                <p>Language</p>
            </div>
        </div>
        <div id="sign-up" class="sign-up"><a href="../html/signup.html">Sign up</a></div>
        <div id="sign-up-remove" class="sign-up-remove"><a href="../html/checkoutfree.html">Start my free month</a></div>
    </navbar>
</div>
<div id="second">
<div id="nav2">
    <ul>
        <li>Solution for:</li>
        <li>Business</li>
        <li>Higher Education</li>
        <li>Goverment</li>
        <li>Buy for my team</li>
    </ul>
</div>
</div>
<div class="menu" id="menu">
    <h3 id="chnge">Username</h3>
    <h5>Personal account</h5>
    <hr>
    <ul>
        <li>My Learning</li>
        <li>In Progress</li>
        <li>Saved</li>
        <li>Collection</li>
        <li>Learning History</li>
        <li><a href="#">Skills</a></li>
    </ul>
    <hr>
    <ul>
        <li>Language</li>
        <li>Setting</li>
        <li>Go to LinkedIn</li>
        <li>Buy for my team</li>
        <li>help Center</li>
        <li id="signout">Sign Out</li>
    </ul>
</div>`
}


export {navbar}