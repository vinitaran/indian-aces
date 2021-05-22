import React from 'react'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import "./Blog.css";

function Blog() {
   
    return (
        <div className="blog_body">
            <div className="blog_centre">
            <div className="blog_main">
              <div className="blog__top">
               <div className="blog__title"><h2>The story of my life</h2></div>
               <div className="blog_profile_img"><img src="https://image.flaticon.com/icons/png/512/2922/2922524.png" alt="blog-profile-img" /></div>
               <div className="blog_profile_name"> <h2>Salman Ul Farisi</h2> </div>
              </div>
                
               <div className="blog__middle">
                <p>22-year old Salman Ul Farisi is successfully juggling his study and work - he is an ACCA  student and a manager at a café. Ever since he can remember, he has felt attracted to men but  didn‟t know about the spectrum of sexual orientation or even the terms „gay‟ or „homosexual‟. The sexual curiosity of his teenage years led him to a porn site and this is where he first came  across the term „gay‟. This made him inquisitive and he started reading more about sexuality on  the internet. The more he tried to understand his orientation, the more conflicted he became. By  the time, he had completed school, he began feeling that he doesn‟t deserve to be part of society.  The mental distress even led to a suicide attempt. Religion didn‟t help too. It condemned  homosexual people and coming from a religious family this only added to his distress. 
                   He confided in two friends from school about his identity and his turmoil. They told him that  there was nothing wrong with being gay and encouraged him to consult a therapist. His regular visits to the therapist raised questions in his family and he had to tell them about the way he felt.  They couldn‟t accept what he said and assured him that all this will go away if he gets married to  a woman. He tried to make them understand but to no avail. After this, they never discussed it at  home, again. Occasionally they broach the subject of his marriage, he refuses and the  conversation ends there. 
                Going to therapy may be one of the best decisions Salman ever made. The therapist talked to him  about other gay people and how they led their lives. Slowly, he began accepting himself. Getting  to meet other people from the community helped too. The therapist reassured Salman that society  
                  was in the process of change and within a year or two it would become more accepting of the  LGBTQIA+ community. Salman says that the therapy made him confident and he has never felt  ashamed of this sexuality again. 
                The therapist had warned Salman that people may not always react positively to his sexuality. Fortunately, this was not to be the case. Salman says coming out to his classmates and faculty  members was so effortless that it surprised him. He owned his identity at his institute, Lakshya  CA Campus before Section 377 was read down. The faculty members were unanimous in their  acceptance. His classmates were not very aware of the spectrum of sexuality and gender identity.  He talked to them and they began understanding. They used to come to him at lunch breaks to clarify their doubts about certain terms. The same was the situation at his work. He took it upon  himself to make his co-workers, who were surprised to know that two men could love each other,  aware. Now, they all come and say hi when his partner calls him at work. 
                Though his mother refuses to talk about his identity, there are people in his family who are open  in their support. He has got two sisters- one pursuing her under graduation and the other studying  in class 5. Though the youngest one doesn‟t know about his identity, she always stands up for  him. When their parents rebuke her for putting mehendi on his hands, she tells them that if her  brother likes it, there is no need to disapprove of it. Only if more people begin to think like his  little sister! His other sister is vocal in her support too. Once, he told the person she was seeing about Salman‟s identity and he was very understanding. This dissipated Salman‟s doubts about 
                his identity making it difficult for his sisters to find a match. His uncle and aunt are supportive  too. Once, his uncle told off a nosy acquaintance by saying that Salman living his life on his  terms need not bother anyone else.

                </p>
              </div>
              <div className="blog__bottom">
                <div className="blog_author"> <h3>Author Name: Ernest Hemingway</h3></div>
                <div className="blog_link"><a href="http://"> Page Link </a></div>
                <div><img className="blog_author_image" src="https://image.flaticon.com/icons/png/512/2922/2922561.png" alt="author_image" /> </div>
               </div>
              </div>
                <div className="blog__nav">
                    <div className="blog__nav__top">
                        <ul>
                            <li> <a href=" ">Label</a> </li>
                            <li className="nav_list">Generic </li>
                            <li>Generic</li>
                            <li>Generic</li>
                        </ul>
                    </div>
                    <div className="blog__sub">
                    <Button type="submit" >Subscribe</Button>
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
            
            
    )
};

export default Blog;
