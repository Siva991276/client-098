import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const McqView = () => {
	const [blogslist, setBlogslist] = useState([]);

	useEffect(() => {
		fetchblogs();
	});

	// const fetchBlogs = async () => {
	//     try {
	//         const response = await axios.get("http://localhost:3051/allperfexData/");
	//         setBlogslist(response.data);
	//     } catch (error) {
	//         console.error("Error fetching data:", error);
	//     }
	// };
	const fetchblogs = async () => {
		const api = "http://localhost:3051/allperfexData";

		try {
			const response = await axios.get(api);
			setBlogslist(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	console.log(blogslist);
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
		menuBtnChange();
	};
	const menuBtnChange = () => {
		const sidebar = document.querySelector(".sidebar");
		const closeBtn = document.querySelector("#btn");
		const searchBtn = document.querySelector(".bx-search");

		if (sidebar?.classList.contains("open")) {
			closeBtn?.classList.replace("bx-menu", "bx-menu-alt-right");
		} else {
			closeBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
		}
	};
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					{isOpen && (
						<div className=" col-12 col-md-3 sectioncard121">
							<Sidebar />
						</div>
					)}
					<div
						className={`my-3 col-12 col-md-${isOpen ? 9 : 12} col-lg-${
							isOpen ? 9 : 12
						}`}
					>
						<div className="ml-5 d-lg-block d-none">
							<i className="fa-solid fa-bars bars" onClick={toggleSidebar}></i>
							<div class=" row ">
								<div className="col-md-9 py-3 ">
									<p>
										<b>Fillter Text Question</b> :
									</p>
									<div className="row card-item p-2">
										{/* <div className="col-2">


                                <select type="text" placeholder="frontend" className="w-100">
                                    <option value="modlue">

                                    {blogslist.map((blog) => (
                                        
                                            <option>{blog.module}</option>
                                    
                                    )

                                    )}
                                    </option>
                                    
                                </select>
                                 
                            </div>  */}
										<div className="col-6">
											{/* <select type="text" placeholder="frontend" className="w-100">
                                    {blogslist.map((blog, index) => (
                                        <option key={index} value={blog.module}>
                                            {blog.module}
                                        </option>
                                    ))}
                                </select> */}
											<select
												type="text"
												placeholder="....Select Subject ..."
												className="form-control"
											>
												<option>...select Subject..</option>
												<option>Front end</option>
											</select>
											<p>Select Subject</p>
										</div>

										{/* <div className="col-2">
                            <select
                          
                          
                        >
                          <option value="Select Batch">
                            ---Select Batch---
                          </option>
                          {blogslist.map((blog) => (
                            <option
                             
                              
                            >
                              {blog.module}
                            </option>
                          ))}
                        </select>
                        </div> */}

										<div className="col-6">
											<select type="text" placeholder="" className="form-control">
												<option value="chapter"></option>

												{blogslist.map((blog) => (
													<option key={blog.id} value={blog.chapter}>
														{blog.chapter}
													</option>
												))}
											</select>
											<p>Select Chapter</p>
										</div>
										<div className="col-6">
											<select type="text" placeholder="" className="form-control">
												<option>Easy</option>
												<option>Medium</option>
												<option>Hard</option>
											</select>
											<p>Diffculty</p>
										</div>

										<div className="col-6">
											<select type="text" placeholder="" className="form-control">
												<option></option>
												<option value="refernce"></option>

												{blogslist.map((blog) => (
													<option key={blog.id} value={blog.refernce}>
														{blog.refernce}
													</option>
												))}
											</select>
											<p>Reference</p>
										</div>

										<div className="col-6">
											<select type="text" placeholder="" className="form-control">
												<option></option>
												<option value="questiontype"></option>

												{blogslist.map((blog) => (
													<option key={blog.id} value={blog.questiontype}>
														{blog.questiontype}
													</option>
												))}
											</select>
											<p>Question type</p>
										</div>
									</div>
									<div className="row">
										<div className="col-5"></div>
										<div className="col-2">
											<button
												className=" mx-5 my-3"
												style={{
													backgroundColor: "black",
													color: "white",
													border: "none",
                                                    padding:"6px",
                                                    borderRadius:"7px"
												}}
											>
												Go
											</button>
										</div>
										<div className="col-2">
											<button
												className="w-15  my-3"
												style={{
													backgroundColor: "red",
													color: "white",
													border: "none",
                                                    padding:"6px",
                                                    borderRadius:"7px"
												}}
											>
												Clear Fillter
											</button>
										</div>
									</div>
									<div className="row card-item">
										<div className="col-12  ">
											<p>
												<b>Question Table</b>
											</p>
											{/* <button style={{ width: "95px" }} cl>
												S.No
											</button>
											<button style={{ width: "95px" }}>ID</button>
											<button style={{ width: "95px" }}>Modulue</button>
											<button style={{ width: "95px" }}>Chapter</button>
											<button style={{ width: "95px" }}>Question</button>
											<button style={{ width: "95px" }}>Diffculty</button>

											<button style={{ width: "95px" }}>Reference</button>
											<button style={{ width: "95px" }}>Action</button> */}
                                            <table className="table table-bordered">
										<thead>
											<tr>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													ID
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Modulue
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Chapter
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Question
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Diffculty
												</th>
												<th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Reference
												</th>
                                                <th
													style={{ fontSize: "14px",backgroundColor:"#333", color:"#fff" }}
													className="text-center"
												>
													Action
												</th>
											</tr>
										</thead>
										{/* <tbody>
											{blogslist.map((blog1, index) => (
												<tr key={index}>
													<td className="text-center">{index + 1}</td>
													<td className="text-center">{blog1.name}</td>
													<td className="text-center">{blog1.subjecttag}</td>
													<td className="text-center">{blog1.chapters}</td>
													<td className="text-center">
														{blog1.totalQuestions}
													</td>
													<td className="text-center">
														<button
															type="button"
															className="btn"
															data-bs-toggle="modal"
															data-bs-target={#myModal${index + 1}}
														>
															<i
																className="fa-sharp fa-solid fa-pen mx-1"
																style={{ color: "skyblue" }}
															></i>
														</button>
														<button
															type="button"
															className="btn"
															onClick={() => handleDelete(blog1._id)}
														>
															<i
																className="fa-solid fa-trash-can mx-2"
																style={{ color: "red" }}
															></i>
														</button>
													</td>
												</tr>
											))}
										</tbody> */}
									</table>
										</div>
									</div>
								</div>
							</div>
							questiontype
						</div>
						{blogslist.map((blog, index) => (
							<p key={index}>{blog.questiontype}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default McqView;