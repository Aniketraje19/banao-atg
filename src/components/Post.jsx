import { Dropdown } from 'react-bootstrap';

export const Post = ({ post }) => {
    return (
        <div className="border m-2 my-4 overflow-hidden rounded-3">
            {post.category !== "💼️ Job" && (
                <img
                    src={post.thumbnail}
                    alt="thumbnail"
                    style={{ height: "220px", width: "100%", objectFit: "cover" }}
                />
            )}

            <div className="p-4">
                <p style={{ fontSize: "18px" }}>{post.category}</p>
                
                <span className="d-flex justify-content-between">
                    <h2 style={{ fontSize: "22px" }}>{post.title}</h2>
                    <Dropdown>
                        <Dropdown.Toggle variant="transparent" className="border-0">
                            <img src="/images/icons/menu.svg" alt="menu" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Report</Dropdown.Item>
                            <Dropdown.Item href="#">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>

                {["✍️ Article", "🔬️ Education"].includes(post.category) ? (
                    <p style={{ fontSize: "18px", color: "#5C5C5C" }}>{post.content}</p>
                ) : (
                    <div>
                        <p className="fw-medium d-flex gap-5">
                            <span>
                                {post.category === "🗓️ Meetup" ? (
                                    <>
                                        <img src="/images/icons/calender.svg" alt="calendar" /> {post.date}
                                    </>
                                ) : (
                                    <>
                                        <img src="/images/icons/bag.svg" alt="bag" /> {post.company}
                                    </>
                                )}
                            </span>
                            <span>
                                <img src="/images/icons/location.svg" alt="location" /> {post.location}
                            </span>
                        </p>
                        <button className="border rounded-3 w-100 p-2 bg-transparent text-success fw-bold">
                            {post.category === "🗓️ Meetup" ? 'Visit Website' : 'Apply on Timesjobs'}
                        </button>
                    </div>
                )}

                <div className="d-flex justify-content-between mt-4">
                    <div className="d-flex align-items-center">
                        <img
                            style={{ width: "48px", height: "48px", objectFit: "cover", borderRadius: "24px" }}
                            src={post['user-profile']}
                            alt="profile pic"
                        />
                        <p className="fw-bold m-2" style={{ fontSize: "18px" }}>{post.username}</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="m-2" style={{ color: "#525252", fontSize: "16px" }}>
                            <img src="/images/icons/eye.svg" alt="eye" /> {post.views} views
                        </p>
                        <button className="border-0 p-2 px-3 rounded">
                            <img src="/images/icons/share.svg" alt="share" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
