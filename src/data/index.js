export default{
    User: [
     {
        user_id: 1,
        name: "홍길동",
        create_at: "2020-09-07"
     },
     {
        user_id: 2,
        name: "김길동",
        create_at: "2020-09-07"
     },
     {
        user_id: 3,
        name: "정길동",
        create_at: "2020-09-07"
     },
     
    ],
    Content: [
    {
        content_id: 1,
        user_id: 1,
        title: "타이틀1",
        context: "내용1",
        created_at: "2022-09-07",
        updated_at: null
    },
    {
        content_id: 2,
        user_id: 3,
        title: "타이틀2",
        context: "내용2",
        created_at: "2022-09-07",
        updated_at: null
    },
    {
        content_id: 3,
        user_id: 2,
        title: "타이틀3",
        context: "내용3",
        created_at: "2022-09-07",
        updated_at: null
    },
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            context_id: 3,
            context: "댓글1",
            created_at: "2022-09-07",
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            context_id: 3,
            context: "댓글2",
            created_at: "2022-09-07",
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            context_id: 1,
            context: "댓글3",
            created_at: "2022-09-07",
            updated_at: null
        }
            
    ],
    SubComment: [
        {
            subcomment_id: 1,
            comment_id: 3,
            user_id:1,
            context: "대댓글1",
            created_at : "2022-09-07",
            updated_at : null
        }
    ]
}