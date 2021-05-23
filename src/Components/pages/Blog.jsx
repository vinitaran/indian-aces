import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Blog.css";

function Blog() {
	let pathname = window.location.pathname.split("/");
	pathname = pathname[2];
	console.log(pathname);

	const [data, setData] = useState([]);

	useEffect(() => {
		const getDataFromDB = async () => {
			await fetch(`https://indian-aces.herokuapp.com/photoGallery/${pathname}`)
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					setData(data.completeInfo);
				});
		};
		getDataFromDB();
	}, [pathname]);

	console.log(data);

	return (
		<div className="blog_body">
			<div className="blog_centre">
				{
                    <div className="blog_main">
					<div className="blog__top">
						<div className="blog__title">
							<h2>{data.title}</h2>
						</div>
						<div className="blog_profile_img">
							<img
								src={data.image}
								alt="blog-profile-img"
							/>
						</div>
						<div className="blog_profile_name">
							{" "}
							<h2>Salman Ul Farisi</h2>{" "}
						</div>
					</div>

					<div className="blog__middle">
						<p>{data.text}</p>
					</div>
					<div className="blog__bottom">
						<div className="blog_author">
							{" "}
							<h3>Author Name: {data.authorbio}</h3>
						</div>
						<div className="blog_link">
							<a href="http://"> {data.authorlink} </a>
						</div>
						<div>
							<img
								className="blog_author_image"
								src={data.authorImage ? data.authorImage : "https://image.flaticon.com/icons/png/512/2922/2922561.png"}
								alt="author_image"
							/>{" "}
						</div>
					</div>
				</div>
                }
				<div className="blog__nav">
					<div className="blog__nav__top">
						<ul>
							<li>
								{" "}
								<a href=" ">Label</a>{" "}
							</li>
							<li className="nav_list">Generic </li>
							<li>Generic</li>
							<li>Generic</li>
						</ul>
					</div>
					<div className="blog__sub">
						<Button type="submit">Subscribe</Button>
					</div>
					<div className="blog_nav_bottom">
						<ul>
							<li>
								<Link to="/RecommendedReading">Recommended Reading</Link>
							</li>
							<li>
								<Link to="/editorpicks">Editor Picks</Link>
							</li>
							<li>
								<Link to="/latestarticles">Latest Articles</Link>
							</li>
							{/* <li>a</li>
                            <li>a</li>
                            <li>a</li>
                            <li>a</li>
                            <li>a</li>
                            <li>a</li>
                            <li>a</li> */}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Blog;
