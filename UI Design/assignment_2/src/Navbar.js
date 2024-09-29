
export default function navbar() {
    return (
        <div className="navigation-menu">
            <section className="container">

            <nav class="navbar navbar-expand-lg navbar-light py-4">
            <a href="#"><img className='logo' src='logo.png' alt='logo' /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">

                    </ul>
                    <div className="">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="homemenu nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Services Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Why Us</a>
                            </li>
                            <li class="nav-item contact-btn">
                            <button type="button" class="contactbtn btn bg-white">Contact Us</button>   
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </nav>
            </section>
        </div>
    )
}