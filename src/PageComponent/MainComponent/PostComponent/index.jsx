import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/postsSlice'; // Import the thunk
import '../../../App.css';
import './PostStyle.css';
import Pagination from '@mui/material/Pagination';

const Post = () => {

    const [page, setPage] = useState(1);

    // const [postClick, setPostClick] = useState(true);
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.items); // Access posts from the store
    const postStatus = useSelector((state) => state.posts.status);
    const error = useSelector((state) => state.posts.error);

    // const postClickFunction = () => {
    //     setPostClick(!postClick);
    //     console.log('nigger')
    // }

    // Fetch posts when the component mounts
    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    // Handle loading and error states
    if (postStatus === 'loading') {
        return <div>Loading...</div>;
    }

    if (postStatus === 'failed') {
        return <div>Error: {error}</div>;
    }

    const itemsPerPage = 8; // Number of items to display per page

    const totalPages = Math.ceil(posts.length / itemsPerPage);

    const displayedData = posts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const itemsPerPage2 = 2; // Number of items to display per page

    const totalPages2 = Math.ceil(posts.length / itemsPerPage2);

    const displayedData2 = posts.slice((page - 1) * itemsPerPage2, page * itemsPerPage2);

    const handlePageChange2 = (event, value) => {
        setPage(value);
    };

    // Render posts
    return (
        <div className='Post'>
            <div className='Post-header'>
                <div className='side-object-container'>
                    <div className='circle-3d'></div>
                    <div className='dots'></div>
                    <div className='triangle-3d'></div>
                </div>
                <div className='post-header'>
                    <div className='post-heading'>
                        <div className='product-button'>
                            <p>Our Services</p>
                        </div>
                        <h1>Stay One Step Ahead <br /> of Adversaries</h1>
                    </div>
                    <div className='post-learn-more-part'>
                        <p>Lorem ipsum dolor sit amet consectetur. Blandit duis vestibulum a sed <br />
                            quis ante vitae vitae. Vitae vel proin quis iaculis. Senectus morbi sit <br />
                            volutpat id egestas augue tempor. Augue faucibus est at curabitur <br />
                            adipiscing ornare nunc sem libero.</p>
                        <div className='post-learn-more-btn'></div>
                    </div>
                </div>
                <div className='grid-container'>
                    {/* <div className='post-show-btn' onClick={postClickFunction}><p style={{fontSize: '16px'}}>Show Posts</p></div> */}
                    <div className='post-grid-container'>
                        {displayedData.map((post, index) => (
                            <div key={post.id}  className="post" id={`post-n${index + 1}`}>
                                <div className='post-object-container'>
                                    <div className='posts-object'></div>
                                </div>
                                <div>
                                    <h1 style={{fontSize: '30px', textAlign: 'left'}}>{post.title}</h1>
                                    <p style={{fontSize: '16px', textAlign: 'left'}}>{post.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='post-grid-container-2'>
                        {displayedData2.map((post, index) => (
                            <div key={post.id}  className="post-2" id={`post-2-n${index + 1}`}>
                                <div className='post-object-container'>
                                    <div className='posts-object'></div>
                                </div>
                                <div>
                                    <h1 style={{fontSize: '30px', textAlign: 'left'}}>{post.title}</h1>
                                    <p style={{fontSize: '16px', textAlign: 'left'}}>{post.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                    <Pagination className='pagination'  count={13} variant="outlined" color="secondary" onChange={handlePageChange} sx={{
            '& .MuiPaginationItem-root': {color: 'white'},}}/>
                    <Pagination className='responsive-pagination'  count={50} variant="outlined" color="secondary" onChange={handlePageChange2} sx={{
            '& .MuiPaginationItem-root': {color: 'white'},}}/>
    </div>    
                </div>
            </div>
            <div className='momrgvalebuli-ragaca'></div>
            <div className='mrgvali-3d-wre'></div>
        </div>
    );
};

export default Post;