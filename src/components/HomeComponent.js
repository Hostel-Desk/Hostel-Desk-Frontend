import React from 'react'
function Home() {
    return (
        <div>
            <div className="describe conatiner-fluid col-12">
                <h1>Hostel Desk</h1>
                <hr />
                <p className="content container-fluid">In our current era of automated systems with it being either software or hardware, it’s not
                advisable to be using manual system. We have got six hostels in our university, which consist of four boy’s hostel and two girl’s hostel.
                All these hostels at present are managed manually by the hostel office. The Registration form verification
                to the different data processing are done manually. Thus there are a lot of repetitions which can be easily avoided. And hence there is a lot of strain
                on the person who are running the hostel and software’s are not usually used in this context.This particular project deals with the problems on managing a hostel and avoids the problems which occur when
                carried manually. Identification of the drawbacks of the existing system leads to the designing of computerized
                system that will be compatible to the existing system with the system which is more user friendly and
                more GUI oriented. We can improve the efficiency of the system, thus overcome the drawbacks of
                the existing system.</p>
            </div>
            <div className="feature container-fluid col-12">
                <h2 className="feature-heading">Features</h2>
                <hr className="feature-line" />
                <div className="row offset-1 col-10"><p className="feature-sub">This Hostel Management System allows you to manage all the necessary details of the college hostels.</p></div>
                <div className="row offset-1 col-10">
                    <ul className="feature-content">
                        <li>It allows you to manage all the College hostels efficiently.</li>
                        <li>It allows you to manage different students in different hostels and allocate different rooms to different students.</li>
                    </ul>
                </div>
            </div>
            <div className="hostel">
                <img src="assets/hostel.png" alt="hostel"/>
            </div>
        </div>
    )
}

export default Home;