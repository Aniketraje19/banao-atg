
import posts from "../data/posts.json"
import { Post } from "./Post"
export const Main = () => {
    return (
        <div className="mx-auto d-flex flex-column align-items-center p-2">

            <div className="d-none pt-4 d-md-flex justify-content-between border-bottom w-100" style={{ maxWidth: "1048px" }}>
                <ul className="nav nav-underline">
                    <li className="nav-link active">All Posts(32)</li>
                    <li className="nav-link">Article</li>
                    <li className="nav-link">Event</li>
                    <li className="nav-link">Education</li>
                    <li className="nav-link">Job</li>
                </ul>
                <div className="my-2">
                    <button className="bg-light-gray border-0 custom-tab-btn fw-medium rounded mx-2">Write a Post <img src="images/icons/down.svg" alt="down" /></button>
                    <button className="border-0 custom-tab-btn bg-royal-blue text-white fw-medium rounded mx-2"><img src="images/icons/group.svg" alt="down" /> Join Group</button>
                </div>
            </div>
            <div className="d-flex d-md-none pt-4 d-flex justify-content-between m-2 w-100 px-4">
                <p className="fw-bold">Posts(368)</p>
                <button className="border-0 fw-semibold px-4 rounded">Filter: All <img src="/images/icons/down.svg" alt="down" /></button>
            </div>

            <div className="mx-auto d-flex gap-5 justify-content-center" style={{ maxWidth: "1048px" }}>
                <div>
                    {posts.map(post => <Post post={post} key={post.id} />)}
                </div>

                <div className="p-2 d-none d-md-flex flex-column">
                    <div className="border-bottom mt-5 " style={{ width: "243px" }}>
                        <img src="/images/icons/location.svg" alt="location" />
                        <input className="border-0 outline-none p-2 fw-medium" placeholder="|Enter your location" />
                    </div>
                    <p className="mt-4 opacity-50"><img src="/images/icons/info.svg" alt="info" /> Your location will help us serve better and extend a personalised experience.</p>
                    <p className="fw-medium mt-5" style={{ fontSize: "16px" }}><img src="/images/icons/thumb-up.svg" alt="thumb-up" /> RECOMMENDED GROUPS</p>

                    <div className="d-flex justify-content-between m-2">
                        <p className="text-black">
                        <img src="/images/profiles/leisure.jpg" alt="profile-pic" style={{width:"36px",height:"36px",objectFit:"cover",borderRadius:"21px",marginRight:"10px"}} />
                            Leisure
                            </p>
                        <button className="border-0 rounded-5 px-4 py-0">Follow</button>
                    </div>
                    <div className="d-flex justify-content-between m-2">
                        <p className="text-black">
                        <img src="/images/profiles/activism.jpg" alt="profile-pic" style={{width:"36px",height:"36px",objectFit:"cover",borderRadius:"21px",marginRight:"10px"}} />
                        Activism
                            </p>
                        <button className="border-0 rounded-5 px-4 py-0">Follow</button>
                    </div>
                    <div className="d-flex justify-content-between m-2">
                        <p className="text-black">
                        <img src="/images/profiles/mba.jpg" alt="profile-pic" style={{width:"36px",height:"36px",objectFit:"cover",borderRadius:"21px",marginRight:"10px"}} />
                        MBA
                            </p>
                        <button className="border-0 rounded-5 px-4 py-0">Follow</button>
                    </div>
                    <div className="d-flex justify-content-between m-2">
                        <p className="text-black">
                        <img src="/images/profiles/philosophy.jpg" alt="profile-pic" style={{width:"36px",height:"36px",objectFit:"cover",borderRadius:"21px",marginRight:"10px"}} />
                        Philosophy
                            </p>
                        <button className="border-0 rounded-5 px-4 py-0">Follow</button>
                    </div>

                    <p className="text-royal-blue mt-5 text-end">See More...</p>

                </div>


            </div>

        </div>
    )
}