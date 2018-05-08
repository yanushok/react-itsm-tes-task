import 'whatwg-fetch';

export default {
    posts: {
        fetchAll: (page, limit) => fetch(`http://localhost:4000/posts?_sort=timestamp&_order=desc&_limit=${limit}&_page=${page}`).then(res => {
            const totalCount = res.headers.get('X-Total-Count');
            if (totalCount) {
                window.localStorage.setItem('total-count', totalCount);
            } else {
                window.localStorage.removeItem('total-count');
            }
        
            return res;
        }).then(res => res.json()),
        
        get: (id) => fetch(`http://localhost:4000/posts/${id}`).then(res => res.json()),
        
        create: (post) => fetch(`http://localhost:4000/posts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }).then(res => res.json())
    }
};